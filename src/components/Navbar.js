import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="Nav">
      <div className="Inner-Content">
        <h1 className="Logo">
          <a href="/">
            BOOK<span>STORE</span>
          </a>
        </h1>
        <nav className={`${show && "show"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contacts">Contatos</Link>
            </li>
            <li>
              <Link to="/account">Conta</Link>
            </li>
          </ul>
        </nav>
        <div className="Navs-Icon-Container">
          <div className="Search-Input-Container">
            <input type="search" placeholder="Procurar"></input>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </div>
          <button className="Shopping-Cart">
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            <div className="Products-Count">12</div>
            <button className="Menu-Button" onClick={() => setShow(!show)}>
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
          </button>
        </div>
      </div>
    </div>
  );
}
