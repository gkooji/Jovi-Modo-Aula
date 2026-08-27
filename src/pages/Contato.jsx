import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import ContactForm from "../components/ContactForm";

function Contato() {
  // Prompt de boas-vindas ao visitar a página (apenas uma vez por sessão)
  useEffect(() => {
    if (!sessionStorage.getItem("welcomed")) {
      const nomeVisitante = prompt("Bem-vindo ao JOVI Modo Aula! Qual é o seu nome?");
      if (nomeVisitante && nomeVisitante.trim().length > 0) {
        alert("Olá, " + nomeVisitante.trim() + "! Explore nossas funcionalidades ou faça login.");
      }
      sessionStorage.setItem("welcomed", "true");
    }
  }, []);

  return (
    <>
      {/* ====== LOGIN SECTION ====== */}
      <section className="contact-section" style={{ minHeight: "60vh" }}>
        <div className="contact-container" style={{ alignItems: "center" }}>
          <div className="contact-info">
            <h2>
              Acesse sua <span className="text-teal">Conta JOVI</span>
            </h2>
            <p>
              Entre para gerenciar suas preferências do Modo Aula, sincronizar fotos acadêmicas e
              acessar o backup na nuvem.
            </p>
            <p style={{ fontSize: "0.9rem" }}>
              Não tem conta? Preencha o formulário de contato abaixo para participar do programa
              beta.
            </p>
          </div>
          <LoginForm />
        </div>
      </section>

      {/* ====== CONTACT FORM ====== */}
      <section className="features-section" style={{ padding: "4rem 1.5rem" }}>
        <div className="section-header">
          <h2>Formulário de Contato</h2>
          <p>Quer participar do beta ou tem alguma sugestão? Fale conosco.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}

export default Contato;
