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

  // exerciseKey = `${moduleId}#${index}` -> correct?
  answers: Record<string, boolean>;
  answerExercise: (moduleId: string, exerciseIndex: number, correct: boolean) => void;

  studentName: string;
  setStudentName: (n: string) => void;

  // gamification derived
  xp: number;
  level: number;
  xpToNextLevel: number;
  xpIntoLevel: number;
  streak: number;
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

const STORAGE_KEY = "prometeu-code-state-v2";
const XP_PER_LEVEL = 50;
const LANGUAGE_IDS = new Set<Language>(LANGUAGES.map((l) => l.id));

function isLanguage(v: unknown): v is Language {
  return typeof v === "string" && LANGUAGE_IDS.has(v as Language);
}

interface Persisted {
  language: Language;
  dark: boolean;
  answers: Record<string, boolean>;
  studentName: string;
  streak: number;
  lastActive: string; // YYYY-MM-DD
}

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function dayDiff(a: string, b: string) {
  const da = new Date(a + "T00:00:00").getTime();
  const db = new Date(b + "T00:00:00").getTime();
  return Math.round((db - da) / 86400000);
}

export function CourseProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("python");
  const [dark, setDark] = useState(true);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [studentName, setStudentName] = useState("");
  const [streak, setStreak] = useState(0);
  const [lastActive, setLastActive] = useState<string>("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const p = JSON.parse(raw) as Partial<Persisted>;
        if (isLanguage(p.language)) setLanguage(p.language);
        if (typeof p.dark === "boolean") setDark(p.dark);
        if (p.answers) setAnswers(p.answers);
        if (typeof p.studentName === "string") setStudentName(p.studentName);
        if (typeof p.streak === "number") setStreak(p.streak);
        if (typeof p.lastActive === "string") setLastActive(p.lastActive);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          language,
          dark,
          answers,
          studentName,
          streak,
          lastActive,
        } satisfies Persisted),
      );
    } catch {
      /* ignore */
    }
  }, [language, dark, answers, studentName, streak, lastActive]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const bumpStreak = useCallback(() => {
    const today = todayISO();
    setLastActive((prev) => {
      if (prev === today) return prev;
      setStreak((s) => {
        if (!prev) return 1;
        const diff = dayDiff(prev, today);
        if (diff === 1) return s + 1;
        if (diff === 0) return s || 1;
        return 1;
      });
      return today;
    });
  }, []);

  const answerExercise = useCallback(
    (moduleId: string, exerciseIndex: number, correct: boolean) => {
      const key = `${moduleId}#${exerciseIndex}`;
      setAnswers((prev) => {
        if (key in prev) return prev;
        return { ...prev, [key]: correct };
      });
      bumpStreak();
    },
    [bumpStreak],
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
      toggleDark: () => setDark((d) => !d),
      answers,
      answerExercise,
      studentName,
      setStudentName,
      xp,
      level,
      xpToNextLevel,
      xpIntoLevel,
      streak,
      answered,
      correct,
      progress,
      modulesCompleted,
      totalExercises: TOTAL_EXERCISES,
      totalModules: MODULES.length,
      reset,
      isModuleComplete,
    };
  }, [language, dark, answers, answerExercise, studentName, streak, reset, isModuleComplete]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCourse() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCourse must be inside CourseProvider");
  return v;
}
