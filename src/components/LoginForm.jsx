import { useState } from "react";

const MAX_LOGIN_ATTEMPTS = 3;

// Validar formato de e-mail usando manipulação de strings (mesma lógica do validacao.js)
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

function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);
  const [emailBorder, setEmailBorder] = useState("");
  const [senhaBorder, setSenhaBorder] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | success | blocked

  const handleEmailChange = (value) => {
    setEmail(value);
    if (isValidEmail(value)) {
      setEmailBorder("#10B981");
      setEmailError(false);
    } else {
      setEmailBorder("");
    }
  };

  const handleEmailBlur = () => {
    if (email.length > 0 && !isValidEmail(email)) {
      setEmailError(true);
      setEmailBorder("#EF4444");
    }
  };

  const handleSenhaChange = (value) => {
    setSenha(value);
    if (value.length >= 6) {
      setSenhaBorder("#10B981");
      setSenhaError(false);
    } else {
      setSenhaBorder("");
    }
  };

  const handleLogin = () => {
    if (status !== "idle") return;

    let isValid = true;
    setEmailError(false);
    setSenhaError(false);

    if (!isValidEmail(email)) {
      setEmailError(true);
      isValid = false;
    }
    if (senha.length < 6) {
      setSenhaError(true);
      isValid = false;
    }

    if (!isValid) {
      alert("Por favor, corrija os campos destacados em vermelho.");
      return;
    }

    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);

    if (nextAttempts > MAX_LOGIN_ATTEMPTS) {
      alert(
        "Você excedeu o número máximo de tentativas (" + MAX_LOGIN_ATTEMPTS + "). Tente novamente mais tarde."
      );
      setStatus("blocked");
      return;
    }

    // Login "demo" - aceita qualquer e-mail válido + senha >= 6 chars
    let nome = email.substring(0, email.indexOf("@"));
    nome = nome.charAt(0).toUpperCase() + nome.substring(1);

    alert("Bem-vindo(a) ao JOVI Modo Aula, " + nome + "!\n\nSeu login foi realizado com sucesso.");
    setStatus("success");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const btnLabel = status === "success" ? "Conectado ✓" : status === "blocked" ? "Bloqueado" : "Entrar";
  const btnStyle =
    status === "success"
      ? { background: "#10B981" }
      : status === "blocked"
      ? { background: "#64748B" }
      : undefined;

  return (
    <div className="contact-form-wrapper">
      <h3 style={{ color: "white", marginBottom: "1rem", fontSize: "1.2rem" }}>Login</h3>

      <div className="form-group">
        <label htmlFor="login-email">E-mail</label>
        <input
          type="email"
          id="login-email"
          placeholder="seu@email.com"
          value={email}
          style={{ borderColor: emailBorder || undefined }}
          onChange={(e) => handleEmailChange(e.target.value)}
          onBlur={handleEmailBlur}
          onKeyDown={handleKeyDown}
        />
        <span className={"form-error" + (emailError ? " show" : "")}>
          Por favor, insira um e-mail válido.
        </span>
      </div>

      <div className="form-group">
        <label htmlFor="login-senha">Senha</label>
        <input
          type="password"
          id="login-senha"
          placeholder="Sua senha"
          value={senha}
          style={{ borderColor: senhaBorder || undefined }}
          onChange={(e) => handleSenhaChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span className={"form-error" + (senhaError ? " show" : "")}>
          A senha deve ter no mínimo 6 caracteres.
        </span>
      </div>

      <button
        className="btn-submit"
        id="btn-login"
        onClick={handleLogin}
        disabled={status !== "idle"}
        style={btnStyle}
      >
        {btnLabel}
      </button>

      <p style={{ textAlign: "center", marginTop: "0.8rem", fontSize: "0.8rem", color: "#64748B" }}>
        Esqueceu a senha? <a href="#" style={{ color: "var(--teal)" }}>Redefinir</a>
      </p>
    </div>
  );
}

export default LoginForm;
