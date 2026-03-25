import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="Inner-Content">
        <div className="Left-Side">
          <h2>O que existe ALÉM do que podemos ver...?</h2>
          <p>
            O mundo, a cada dia que passa, afunda em um mar de… algo que nem
            sabemos nomear. E a realidade… está cada vez mais difícil de
            engolir. Mas ainda existe uma forma de escapar. De cruzar
            horizontes. De viajar para lugares que, talvez, nunca possamos
            tocar… Mas que podemos… sentir.
          </p>
          <Link to="/products" className="See-More-Btn">
            <span>Ler Agora</span>
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </Link>
        </div>
        <div className="Right-Side">
          <img src="/images/header-image2.png" alt="Modelos de Livros"></img>
        </div>
      </div>
    </header>
  );
}
