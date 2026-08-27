import { useState } from "react";

function isValidEmail(email) {
  email = email.trim();
  if (email.length === 0) return false;

  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");

  if (atIndex < 1) return false;
  if (dotIndex <= atIndex + 1) return false;
  if (dotIndex >= email.length - 1) return false;
  if (email.indexOf(" ") !== -1) return false;

  return true;
}

const inputStyle = {
  background: "white",
  color: "var(--text-primary)",
  borderColor: "var(--light-gray)",
};

function ContactForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({ nome: false, email: false, assunto: false, msg: false });

  const handleNomeChange = (value) => {
    setNome(value);
    if (value.trim().length >= 2) {
      setErrors((prev) => ({ ...prev, nome: false }));
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (isValidEmail(value)) {
      setErrors((prev) => ({ ...prev, email: false }));
    }
  };

  const handleContact = () => {
    const nomeVal = nome.trim();
    const emailVal = email.trim();
    const msgVal = msg.trim();

    const nextErrors = {
      nome: nomeVal.length < 2,
      email: !isValidEmail(emailVal),
      assunto: assunto === "",
      msg: msgVal.length < 10,
    };
    setErrors(nextErrors);

    const isValid = !Object.values(nextErrors).some(Boolean);
    if (!isValid) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    let confirmMsg = "Confirma o envio?\n\n";
    confirmMsg += "Nome: " + nomeVal + "\n";
    confirmMsg += "E-mail: " + emailVal + "\n";
    confirmMsg += "Assunto: " + assunto + "\n";
    confirmMsg += "Mensagem: " + msgVal.substring(0, 50) + "...";

    const confirmou = confirm(confirmMsg);

    if (confirmou) {
      alert(
        "Mensagem enviada com sucesso, " + nomeVal + "!\n\nEntraremos em contato em até 48 horas pelo e-mail " + emailVal + "."
      );
      setNome("");
      setEmail("");
      setAssunto("");
      setMsg("");
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        background: "#f8fafc",
        borderRadius: 16,
        padding: "2rem",
        border: "1px solid var(--light-gray)",
      }}
    >
      <div className="form-group">
        <label htmlFor="contact-nome" style={{ color: "var(--text-secondary)" }}>
          Nome completo
        </label>
        <input
          type="text"
          id="contact-nome"
          placeholder="Seu nome"
          style={inputStyle}
          value={nome}
          onChange={(e) => handleNomeChange(e.target.value)}
        />
        <span className={"form-error" + (errors.nome ? " show" : "")}>
          Por favor, insira seu nome.
        </span>
      </div>

      <div className="form-group">
        <label htmlFor="contact-email" style={{ color: "var(--text-secondary)" }}>
          E-mail
        </label>
        <input
          type="email"
          id="contact-email"
          placeholder="seu@email.com"
          style={inputStyle}
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
        <span className={"form-error" + (errors.email ? " show" : "")}>
          Por favor, insira um e-mail válido.
        </span>
      </div>

      <div className="form-group">
        <label htmlFor="contact-assunto" style={{ color: "var(--text-secondary)" }}>
          Assunto
        </label>
        <select
          id="contact-assunto"
          style={inputStyle}
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
        >
          <option value="">Selecione um assunto</option>
          <option value="beta">Quero participar do Beta</option>
          <option value="sugestao">Sugestão de funcionalidade</option>
          <option value="bug">Reportar problema</option>
          <option value="parceria">Proposta de parceria</option>
          <option value="outro">Outro</option>
        </select>
        <span className={"form-error" + (errors.assunto ? " show" : "")}>
          Selecione um assunto.
        </span>
      </div>

      <div className="form-group">
        <label htmlFor="contact-msg" style={{ color: "var(--text-secondary)" }}>
          Mensagem
        </label>
        <textarea
          id="contact-msg"
          placeholder="Escreva sua mensagem..."
          rows="4"
          style={inputStyle}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <span className={"form-error" + (errors.msg ? " show" : "")}>
          Por favor, escreva uma mensagem.
        </span>
      </div>

      <button className="btn-submit" style={{ background: "var(--blue)" }} onClick={handleContact}>
        Enviar Mensagem
      </button>
    </div>
  );
}

export default ContactForm;
