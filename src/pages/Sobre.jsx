import FeatureCard from "../components/FeatureCard";

const team = [
  { name: "Thiago Souza de Lima", role: "Product Owner & UX Research", bg: "bg-blue" },
  { name: "Matheus Akira Aso", role: "Tech Lead & Desenvolvimento", bg: "bg-pink" },
  { name: "Guilherme Kooji Kubota", role: "Design & Prototipação", bg: "bg-green" },
  { name: "João Vitor Batista de Mattos", role: "Desenvolvimento & QA", bg: "bg-orange" },
  { name: "Kelvyn Lukas Junqueira da Silva", role: "Desenvolvimento Front-End", bg: "bg-teal" },
];

function Sobre() {
  return (
    <>
      {/* ====== SOBRE O PROJETO ====== */}
      <section className="hero" style={{ minHeight: "50vh", padding: "4rem 1.5rem" }}>
        <div className="hero-content" style={{ flexDirection: "column", textAlign: "center" }}>
          <div className="hero-text" style={{ maxWidth: 700 }}>
            <span className="hero-badge">Sobre o Projeto</span>
            <h1>
              Conheça o <span>Modo Aula</span>
            </h1>
            <p>Uma solução criada por estudantes para estudantes, em parceria com a JOVI e a FIAP.</p>
          </div>
        </div>
      </section>

      {/* ====== EMPRESA JOVI ====== */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>
              A Empresa <span className="text-blue">JOVI</span>
            </h2>
            <p>
              A JOVI é a marca exclusiva da vivo Mobile Communication Co., Ltd. no mercado
              brasileiro. Representa juventude e alegria de viver, simbolizando um estilo de vida
              jovem e livre.
            </p>
            <p>
              A vivo Mobile é uma empresa de tecnologia que cria produtos baseados em design, com
              dispositivos e serviços inteligentes como núcleo. Atua em mais de 60 países com mais
              de 500 milhões de usuários.
            </p>
            <p>
              Os smartphones JOVI são dedicados a surpreender os usuários brasileiros por meio de
              tecnologia inteligente e centrada no ser humano.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-num text-blue">60+</div>
              <div className="stat-label">Países com presença</div>
            </div>
            <div className="stat-card">
              <div className="stat-num text-pink">500M+</div>
              <div className="stat-label">Usuários no mundo</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== NOSSO TIME ====== */}
      <section className="team-section">
        <div className="section-header">
          <h2>Nosso Time</h2>
          <p>Equipe NextStage — Challenge FIAP x JOVI 2026</p>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className={`team-avatar ${member.bg}`}>👤</div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ====== PROBLEMA ====== */}
      <section className="flow-section" style={{ padding: "4rem 1.5rem" }}>
        <div className="section-header">
          <h2 style={{ color: "white" }}>O Problema que Resolvemos</h2>
          <p style={{ color: "#94A3B8" }}>Dores reais identificadas em pesquisa com 120+ estudantes.</p>
        </div>
        <div className="features-grid" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FeatureCard icon="😤" iconBg="rgba(239,68,68,0.2)" title="Desorganização" dark>
            Fotos de aula misturadas com pessoais. 87% dos estudantes relatam perder material de
            estudo na galeria.
          </FeatureCard>
          <FeatureCard icon="📸" iconBg="rgba(249,115,22,0.2)" title="Fotos Ilegíveis" dark>
            Reflexos, foco incorreto e ângulos ruins geram fotos que o aluno só descobre ilegíveis
            depois.
          </FeatureCard>
          <FeatureCard icon="📱" iconBg="rgba(236,72,153,0.2)" title="Apps Fragmentados" dark>
            Para digitalizar texto, alunos precisam instalar CamScanner, Google Lens e outros —
            fragmentando o fluxo.
          </FeatureCard>
        </div>
      </section>
    </>
  );
}

export default Sobre;
