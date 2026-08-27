import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <div className="logo-icon">📷</div>
          <div>
            <div className="logo-text">JOVI</div>
            <div className="logo-accent">MODO AULA</div>
          </div>
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" className={({ isActive }) => (isActive ? "active" : "")}>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/funcionalidades" className={({ isActive }) => (isActive ? "active" : "")}>
                Funcionalidades
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contato"
                className={({ isActive }) => "btn-nav" + (isActive ? " active" : "")}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
