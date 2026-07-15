import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Language } from "./course-data";
import { LANGUAGES, MODULES, TOTAL_EXERCISES } from "./course-data";

export interface CourseState {
  language: Language;
  setLanguage: (l: Language) => void;
  dark: boolean;
  toggleDark: () => void;

  answers: Record<string, boolean>;
  answerExercise: (moduleId: string, exerciseIndex: number, correct: boolean) => void;

  studentName: string;
  setStudentName: (n: string) => void;

  // gamification derived
  xp: number;
  level: number;
  xpToNextLevel: number;
  xpIntoLevel: number;
  answered: number;
  correct: number;
  progress: number; // 0..1 of exercises answered
  modulesCompleted: number;
  totalExercises: number;
  totalModules: number;

  reset: () => void;
  isModuleComplete: (moduleId: string) => boolean;
}

const Ctx = createContext<CourseState | null>(null);

const THEME_STORAGE_KEY = "prometeu-code-theme";
const XP_PER_LEVEL = 50;

export function CourseProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("python");

  // Synchronous initialization from localStorage on client-side
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(THEME_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed.dark === "boolean") {
            return parsed.dark;
          }
        }
        // Fallback to old key
        const oldRaw = localStorage.getItem("prometeu-code-state-v2");
        if (oldRaw) {
          const oldParsed = JSON.parse(oldRaw);
          if (oldParsed && typeof oldParsed.dark === "boolean") {
            return oldParsed.dark;
          }
        }
      } catch {
        /* ignore */
      }
    }
    return true; // default
  });

  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleDark = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        document.documentElement.classList.toggle("dark", next);
        try {
          localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify({ dark: next }));
        } catch {
          /* ignore */
        }
      }
      return next;
    });
  }, []);

  const answerExercise = useCallback(
    (moduleId: string, exerciseIndex: number, correct: boolean) => {
      const key = `${moduleId}#${exerciseIndex}`;
      setAnswers((prev) => {
        if (key in prev) return prev;
        return { ...prev, [key]: correct };
      });
    },
    [],
  );

  const reset = useCallback(() => {
    setAnswers({});
  }, []);

  const isModuleComplete = useCallback(
    (moduleId: string) => {
      const mod = MODULES.find((m) => m.id === moduleId);
      if (!mod) return false;
      return mod.exercises.every((_, i) => `${moduleId}#${i}` in answers);
    },
    [answers],
  );

  const value = useMemo<CourseState>(() => {
    const answered = Object.keys(answers).length;
    const correct = Object.values(answers).filter(Boolean).length;
    const xp = correct * 10;
    const level = Math.floor(xp / XP_PER_LEVEL) + 1;
    const xpIntoLevel = xp % XP_PER_LEVEL;
    const xpToNextLevel = XP_PER_LEVEL - xpIntoLevel;
    const progress = answered / TOTAL_EXERCISES;
    const modulesCompleted = MODULES.filter((m) =>
      m.exercises.every((_, i) => `${m.id}#${i}` in answers),
    ).length;

    return {
      language,
      setLanguage,
      dark,
      toggleDark,
      answers,
      answerExercise,
      studentName,
      setStudentName,
      xp,
      level,
      xpToNextLevel,
      xpIntoLevel,
      answered,
      correct,
      progress,
      modulesCompleted,
      totalExercises: TOTAL_EXERCISES,
      totalModules: MODULES.length,
      reset,
      isModuleComplete,
    };
  }, [language, dark, toggleDark, answers, answerExercise, studentName, reset, isModuleComplete]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCourse() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCourse must be inside CourseProvider");
  return v;
}
