import { faShoppingCart, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Product({ id, image, name, rate, price }) {
  return (
    <div className="Product">
      <img src={image} alt={name} />
      <p className="Name">{name}</p>
      <p className="Rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className="Price">
        {price} <span>R$</span>
      </p>

      <div className="Button">
        <Link to="/products/123/checkout" className="Btn-Icon">
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>
        </Link>
        <button className="Btn-Icon Add-To-Cart-Btn">
          <span>Adicionar ao Carrinho</span>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}
