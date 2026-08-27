import FeatureCard from "../components/FeatureCard";
import Slideshow from "../components/Slideshow";

function Funcionalidades() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section className="hero" style={{ minHeight: "40vh", padding: "3.5rem 1.5rem" }}>
        <div className="hero-content" style={{ flexDirection: "column", textAlign: "center" }}>
          <div className="hero-text" style={{ maxWidth: 700 }}>
            <span className="hero-badge">Funcionalidades</span>
            <h1>
              Tudo que o <span>Modo Aula</span> oferece
            </h1>
            <p>Cada funcionalidade foi pensada para resolver dores reais dos estudantes.</p>
          </div>
        </div>
      </section>

      {/* ====== FEATURES DETALHADAS ====== */}
      <section className="features-section">
        <div className="features-grid" style={{ maxWidth: 1100 }}>
          <FeatureCard icon="📂" iconClass="bg-blue" title="Subpastas por Matéria">
            Crie pastas para cada disciplina (Cálculo, Física, Programação...). Ao capturar no
            Modo Aula, a foto vai direto para a pasta selecionada. Nunca mais misture fotos de
            aula com pessoais.
          </FeatureCard>
          <FeatureCard icon="📝" iconClass="bg-pink" title="OCR com Gemini AI">
            Toque no botão OCR após capturar e a IA Gemini extrai o texto da imagem. Funciona com
            lousa, livro, caderno e slides. Suporta português, inglês e fórmulas matemáticas.
          </FeatureCard>
          <FeatureCard icon="🧠" iconClass="bg-green" title="IA Assistente em Tempo Real">
            Antes de capturar, a IA analisa o viewfinder e alerta sobre: reflexos na lousa, foco
            insuficiente, iluminação ruim e ângulo inadequado. Melhore a qualidade na origem.
          </FeatureCard>
          <FeatureCard icon="🖼️" iconClass="bg-orange" title="Galeria Acadêmica">
            Acesse todas as fotos organizadas por matéria em uma galeria dedicada. Busque por
            texto extraído via OCR. Encontre qualquer conteúdo em segundos.
          </FeatureCard>
          <FeatureCard icon="📊" iconClass="bg-teal" title="Captura Automática de Slides">
            Em apresentações, a câmera detecta mudanças de slide e captura automaticamente.
            Anti-flickering ativado. Nunca mais perca um slide do professor.
          </FeatureCard>
          <FeatureCard icon="🔗" iconClass="bg-yellow" title="Compartilhar com Colegas">
            Envie uma pasta completa de matéria para colegas via WhatsApp, link ou PDF compilado.
            Inclui fotos e textos OCR extraídos. Estudo em grupo facilitado.
          </FeatureCard>
        </div>
      </section>

      {/* ====== TECNOLOGIAS ====== */}
      <section className="flow-section" style={{ padding: "4rem 1.5rem" }}>
        <div className="section-header">
          <h2 style={{ color: "white" }}>Tecnologias Utilizadas</h2>
          <p style={{ color: "#94A3B8" }}>APIs abertas do Google que viabilizam tecnicamente o Modo Aula.</p>
        </div>
        <div className="features-grid" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FeatureCard icon="📷" iconBg="rgba(37,99,235,0.2)" title="CameraX + Camera2" dark>
            APIs Android para captura com controle de foco, exposição e análise de imagem em tempo
            real.
          </FeatureCard>
          <FeatureCard icon="🤖" iconBg="rgba(236,72,153,0.2)" title="Gemini AI" dark>
            IA multimodal do Google para OCR inteligente com suporte a português, fórmulas e
            handwriting.
          </FeatureCard>
          <FeatureCard icon="💾" iconBg="rgba(16,185,129,0.2)" title="MediaStore + ML Kit" dark>
            Gerenciamento de mídia nativo para pastas + ML Kit para detecção on-device de lousa e
            texto.
          </FeatureCard>
        </div>
      </section>

      {/* ====== SLIDESHOW ====== */}
      <section className="features-section" style={{ background: "#f8fafc" }}>
        <div className="section-header">
          <h2>Modo Aula em Ação</h2>
          <p>Veja como a interface funciona no dia a dia do estudante.</p>
        </div>
        <Slideshow />
      </section>
    </>
  );
}

export default Funcionalidades;
