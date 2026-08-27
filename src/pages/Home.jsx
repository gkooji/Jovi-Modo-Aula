import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Novo no JOVI Smartphone</span>
            <h1>
              Sua câmera.
              <br />
              Sua aula.
              <br />
              <span>Tudo organizado.</span>
            </h1>
            <p>
              O Modo Aula transforma a câmera do seu JOVI em uma ferramenta acadêmica inteligente.
              Organize fotos por matéria, extraia texto com IA e capture lousas com qualidade — tudo
              sem sair da câmera.
            </p>
            <div className="hero-buttons">
              <Link to="/funcionalidades" className="btn-primary">
                Conheça as Funcionalidades
              </Link>
              <Link to="/sobre" className="btn-secondary">
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <span className="mode-label">MODO AULA</span>
                <div className="subject-bar">
                  <span style={{ background: "#2563EB" }}>Cálculo</span>
                  <span style={{ background: "#EC4899" }}>Física</span>
                  <span style={{ background: "#10B981" }}>Progr.</span>
                </div>
                <div className="viewfinder">
                  <span className="ia-alert">✓ Foco OK — Sem reflexo</span>
                  <span style={{ color: "#94A3B8", fontSize: "0.7rem" }}>Lousa detectada</span>
                </div>
                <div className="capture-btn"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURES PREVIEW ====== */}
      <section className="features-section">
        <div className="section-header">
          <h2>Por que o Modo Aula?</h2>
          <p>Três pilares que transformam como estudantes usam a câmera do smartphone.</p>
        </div>
        <div className="features-grid">
          <FeatureCard icon="📂" iconClass="bg-blue" title="Organização Automática">
            Crie subpastas por matéria e nunca mais perca uma foto de aula. Separação total entre
            fotos pessoais e acadêmicas.
          </FeatureCard>
          <FeatureCard icon="📝" iconClass="bg-pink" title="OCR Inteligente">
            Extraia texto de lousas, livros e anotações com um toque. Powered by Gemini AI —
            suporta português e fórmulas.
          </FeatureCard>
          <FeatureCard icon="🧠" iconClass="bg-green" title="IA Assistente">
            Receba alertas em tempo real sobre reflexo, foco e iluminação antes de capturar. Fotos
            legíveis sempre.
          </FeatureCard>
        </div>
      </section>

      {/* ====== FLOW ====== */}
      <section className="flow-section">
        <div className="section-header">
          <h2 style={{ color: "white" }}>Como Funciona</h2>
          <p style={{ color: "#94A3B8" }}>Em 5 passos, do quadro da sala para suas anotações digitais.</p>
        </div>
        <div className="flow-steps">
          <div className="flow-step">
            <div className="step-num bg-blue">1</div>
            <h4>Ative o Modo Aula</h4>
            <p>Um toque no carrossel de modos da câmera</p>
          </div>
          <span className="flow-arrow">→</span>
          <div className="flow-step">
            <div className="step-num bg-teal">2</div>
            <h4>Escolha a Matéria</h4>
            <p>Selecione ou crie a pasta da disciplina</p>
          </div>
          <span className="flow-arrow">→</span>
          <div className="flow-step">
            <div className="step-num bg-green">3</div>
            <h4>Capture com IA</h4>
            <p>Assistência em tempo real no viewfinder</p>
          </div>
          <span className="flow-arrow">→</span>
          <div className="flow-step">
            <div className="step-num bg-pink">4</div>
            <h4>Extraia Texto</h4>
            <p>OCR com Gemini — editável e compartilhável</p>
          </div>
          <span className="flow-arrow">→</span>
          <div className="flow-step">
            <div className="step-num bg-orange">5</div>
            <h4>Revise e Compartilhe</h4>
            <p>Galeria organizada por matéria</p>
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>
              Validado com <span className="text-teal">estudantes reais</span>
            </h2>
            <p>
              O Modo Aula nasceu de uma pesquisa com mais de 120 estudantes universitários da
              FIAP. Entendemos suas dores e criamos uma solução integrada.
            </p>
            <p>
              Nenhum concorrente oferece um modo dedicado ao contexto acadêmico. O JOVI com Modo
              Aula é o primeiro smartphone pensado para quem estuda.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-num text-blue">120+</div>
              <div className="stat-label">Estudantes Entrevistados</div>
            </div>
            <div className="stat-card">
              <div className="stat-num text-pink">87%</div>
              <div className="stat-label">Perdem fotos de aula</div>
            </div>
            <div className="stat-card">
              <div className="stat-num text-green">92%</div>
              <div className="stat-label">Usariam Modo Aula</div>
            </div>
            <div className="stat-card">
              <div className="stat-num text-teal">4.6/5</div>
              <div className="stat-label">Nota de interesse</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
