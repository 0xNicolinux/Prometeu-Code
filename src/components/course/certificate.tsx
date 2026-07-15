import { useCourse } from "@/lib/course-context";
import { MODULES } from "@/lib/course-data";
import { Award, Download, RotateCcw, Share2, UserSquare } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export function Certificate() {
  const {
    answered,
    correct,
    xp,
    modulesCompleted,
    totalExercises,
    totalModules,
    reset,
    studentName,
    setStudentName,
    level,
  } = useCourse();

  const done = modulesCompleted >= totalModules;
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  const [showConfetti, setShowConfetti] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);
  const shownRef = useRef(false);

  useEffect(() => {
    if (done && !shownRef.current) {
      shownRef.current = true;
      setShowConfetti(true);
      const t = setTimeout(() => setShowConfetti(false), 6000);
      return () => clearTimeout(t);
    }
    if (!done) {
      shownRef.current = false;
    }
  }, [done]);

  const today = useMemo(() => {
    return new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, []);

  if (!done) {
    return (
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-brand/40 bg-gradient-soft p-8 text-center">
          <div className="mb-3 text-4xl">🎯</div>
          <h3 className="text-2xl font-bold">Continue estudando</h3>
          <p className="mt-2 text-muted-foreground">
            Conclua todos os <strong>{totalModules}</strong> módulos para desbloquear sua{" "}
            <strong className="text-brand">Conquista Prometeu Code</strong>. Você já respondeu{" "}
            <strong>{answered}</strong> de {totalExercises} exercícios.
          </p>
        </div>
      </section>
    );
  }

  const name = studentName.trim() || "Aluno(a) Prometeu";

  const drawConquista = (): HTMLCanvasElement => {
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d")!;

    const grad = ctx.createLinearGradient(0, 0, 1600, 1000);
    grad.addColorStop(0, "#0b1020");
    grad.addColorStop(0.5, "#151b3d");
    grad.addColorStop(1, "#1a1240");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1600, 1000);

    const glow = ctx.createRadialGradient(800, 300, 20, 800, 300, 900);
    glow.addColorStop(0, "rgba(120,90,255,0.35)");
    glow.addColorStop(1, "transparent");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 1600, 1000);

    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.lineWidth = 3;
    ctx.strokeRect(60, 60, 1480, 880);
    ctx.strokeStyle = "rgba(180,140,255,0.6)";
    ctx.lineWidth = 1;
    ctx.strokeRect(80, 80, 1440, 840);

    ctx.fillStyle = "#a78bfa";
    ctx.font = "600 26px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("PROMETEU CODE", 800, 170);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 72px Inter, sans-serif";
    ctx.fillText("Conquista Prometeu Code", 800, 270);

    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "400 28px Inter, sans-serif";
    ctx.fillText("Certificamos que", 800, 360);

    ctx.fillStyle = "#ffffff";
    ctx.font = "700 64px Inter, sans-serif";
    ctx.fillText(name, 800, 440);

    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "400 28px Inter, sans-serif";
    ctx.fillText("Concluiu a trilha Fundamentos da Programação", 800, 510);

    // seal
    ctx.beginPath();
    ctx.arc(800, 660, 90, 0, Math.PI * 2);
    const sealGrad = ctx.createLinearGradient(710, 570, 890, 750);
    sealGrad.addColorStop(0, "#f5c76a");
    sealGrad.addColorStop(1, "#b8842a");
    ctx.fillStyle = sealGrad;
    ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,0.35)";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = "#3b2600";
    ctx.font = "800 18px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("FUNDAMENTOS", 800, 655);
    ctx.fillText("CONCLUÍDOS", 800, 680);

    // xp + date
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "500 26px Inter, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`XP conquistado: ${xp}`, 140, 880);
    ctx.textAlign = "right";
    ctx.fillText(`Data: ${today}`, 1460, 880);

    return canvas;
  };

  const download = () => {
    const canvas = drawConquista();
    const link = document.createElement("a");
    link.download = `conquista-prometeu-code-${name.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const share = async () => {
    const text = `🏆 Concluí a trilha Fundamentos da Programação no Prometeu Code! ${xp} XP, ${accuracy}% de acertos.`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Conquista Prometeu Code", text });
        setShareMsg("Compartilhado!");
      } else {
        await navigator.clipboard.writeText(text);
        setShareMsg("Copiado para a área de transferência!");
      }
    } catch {
      setShareMsg("Não foi possível compartilhar.");
    }
    setTimeout(() => setShareMsg(null), 2500);
  };

  return (
    <section className="relative border-t border-border py-16">
      {showConfetti && <ConfettiBurst />}

      <div className="mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-3xl border-2 border-brand/40 bg-card p-8 text-center shadow-brand sm:p-12">
          <div className="absolute inset-0 bg-gradient-hero opacity-70" />
          <div className="relative">
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand shadow-brand">
              <Award className="h-8 w-8 text-brand-foreground" />
            </div>
            <div className="text-5xl">🎉</div>
            <h3 className="mt-2 text-3xl font-bold sm:text-4xl">Parabéns, {name}!</h3>
            <p className="mt-3 text-lg text-muted-foreground">
              Você concluiu a trilha <strong>Fundamentos da Programação</strong> e desbloqueou a{" "}
              <strong className="text-brand">Conquista Prometeu Code</strong>.
            </p>

            <div className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-xl border border-border bg-background/70 p-2 backdrop-blur">
              <UserSquare className="ml-2 h-4 w-4 shrink-0 text-brand" />
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value.slice(0, 60))}
                placeholder="Digite seu nome para a conquista"
                className="flex-1 bg-transparent px-2 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>

            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
              <Stat value={`Nv ${level}`} label="Nível" />
              <Stat value={xp} label="XP Total" />
              <Stat value={`${accuracy}%`} label="Acertos" />
            </div>

            <div className="mx-auto mt-6 grid max-w-2xl gap-2 rounded-2xl border border-border bg-background/60 p-4 text-left text-sm backdrop-blur">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand">
                O que você aprendeu
              </div>
              <ul className="grid gap-1 sm:grid-cols-2">
                {MODULES.map((m) => (
                  <li key={m.id} className="flex items-center gap-2 text-muted-foreground">
                    <span>{m.emoji}</span>
                    <span>{m.title}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex justify-between border-t border-border pt-2 text-xs text-muted-foreground">
                <span>
                  Módulos concluídos:{" "}
                  <strong className="text-foreground">
                    {modulesCompleted}/{totalModules}
                  </strong>
                </span>
                <span>
                  Exercícios resolvidos:{" "}
                  <strong className="text-foreground">
                    {answered}/{totalExercises}
                  </strong>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={download}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition hover:opacity-95"
              >
                <Download className="h-4 w-4" /> Baixar Conquista
              </button>
              <button
                onClick={share}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
              >
                <Share2 className="h-4 w-4" /> Compartilhar
              </button>
              <button
                onClick={() => {
                  if (
                    window.confirm(
                      "Isso vai apagar todo o seu progresso (XP, respostas e conquista). Deseja continuar?",
                    )
                  ) {
                    reset();
                  }
                }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
              >
                <RotateCcw className="h-4 w-4" /> Refazer trilha
              </button>
            </div>
            {shareMsg && <p className="mt-3 text-xs text-brand">{shareMsg}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-4 backdrop-blur">
      <div className="text-2xl font-bold text-gradient-brand">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

const CONFETTI_COLORS = ["#8b5cf6", "#3b82f6", "#ec4899", "#f59e0b", "#22c55e"];

function ConfettiBurst() {
  const pieces = useMemo(() => {
    return Array.from({ length: 90 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      duration: 2.8 + Math.random() * 2.2,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      rotate: Math.random() * 360,
      size: 6 + Math.random() * 8,
    }));
  }, []);
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute -top-4 block rounded-sm"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 0.4}px`,
            background: p.color,
            transform: `rotate(${p.rotate}deg)`,
            animation: `confetti-fall ${p.duration}s ${p.delay}s linear forwards`,
          }}
        />
      ))}
    </div>
  );
}
