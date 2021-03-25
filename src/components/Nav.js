//Styles
import "../styles/nav.scss";
//Router
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
      <nav>
        <h1>
          <Link to="/">QR Code</Link>
        </h1>
        <ul>
          <li>
            <Link to="/generate">Generate</Link>
          </li>
          <li>
            <Link to="/translate">Translate</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
