import { ReactComponent as Githubicon } from "assets/img/github.svg";
import './styles.css'
function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/Jonaslunafreitas">
            <div className = "dsmovie-contact-conteiner">
              <Githubicon />
              <p className ="dsmovie-contact-link">/Jonaslunafreitas</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;