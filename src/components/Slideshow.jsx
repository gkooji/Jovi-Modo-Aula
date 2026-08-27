import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    icon: "📂",
    title: "Organização por Matéria",
    desc: "Selecione a disciplina e todas as fotos são salvas automaticamente na pasta correta.",
  },
  {
    icon: "📝",
    title: "OCR Inteligente com Gemini",
    desc: "Extraia texto de lousas e livros com um toque. Resultado editável e compartilhável.",
  },
  {
    icon: "🧠",
    title: "IA Assistente de Captura",
    desc: "Alertas em tempo real sobre reflexo, foco e iluminação antes de você fotografar.",
  },
  {
    icon: "📊",
    title: "Captura Automática de Slides",
    desc: "A câmera detecta mudanças de slide projetado e captura automaticamente para você.",
  },
];

const AUTOPLAY_MS = 4000;
const FADE_MS = 200;

function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef(null);

  // Troca de slide com efeito de fade, como no slideshow.js original
  const changeSlide = useCallback((updateIndex) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(updateIndex);
      setVisible(true);
    }, FADE_MS);
  }, []);

  const nextSlide = useCallback(() => {
    changeSlide((prev) => (prev + 1) % slides.length);
  }, [changeSlide]);

  const prevSlide = useCallback(() => {
    changeSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [changeSlide]);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, AUTOPLAY_MS);
  }, [nextSlide]);

  // Auto-play ao montar + navegação por teclado (setas)
  useEffect(() => {
    startAutoPlay();

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
        startAutoPlay();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
        startAutoPlay();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [startAutoPlay, nextSlide, prevSlide]);

  const handleNextClick = () => {
    nextSlide();
    startAutoPlay();
  };

  const handlePrevClick = () => {
    prevSlide();
    startAutoPlay();
  };

  const slide = slides[current];
  const fadeStyle = { opacity: visible ? 1 : 0, transition: "opacity 0.2s ease" };

  return (
    <div id="slideshow-container" style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
      <div
        style={{
          background: "var(--navy)",
          borderRadius: 16,
          padding: "2rem",
          minHeight: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div style={{ fontSize: "3rem", ...fadeStyle }}>{slide.icon}</div>
        <h3 style={{ color: "white", fontSize: "1.3rem", ...fadeStyle }}>{slide.title}</h3>
        <p style={{ color: "#94A3B8", maxWidth: 400, ...fadeStyle }}>{slide.desc}</p>
        <div style={{ color: "#64748B", fontSize: "0.8rem" }}>
          {current + 1} / {slides.length}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
        <button
          onClick={handlePrevClick}
          className="btn-secondary"
          style={{ padding: "0.5rem 1.5rem", fontSize: "0.9rem" }}
        >
          ← Anterior
        </button>
        <button
          onClick={handleNextClick}
          className="btn-primary"
          style={{ padding: "0.5rem 1.5rem", fontSize: "0.9rem" }}
        >
          Próximo →
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
