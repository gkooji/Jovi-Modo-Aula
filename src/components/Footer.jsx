import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2026 NextStage — Challenge FIAP x JOVI. Todos os direitos reservados.</p>
        <div className="footer-links">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/funcionalidades">Funcionalidades</Link>
          <Link to="/contato">Contato</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
