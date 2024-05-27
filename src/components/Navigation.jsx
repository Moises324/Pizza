import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

const Navigation = () => {
  const { carrito } = useContext(PizzaContext);

  // Calcular el precio total
  const PrecioTotal = carrito.reduce((total, pizza) => total + pizza.price, 0);

  return (
    <nav className="navbar navbar-expand-lg color sticky-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-light">
          Mamma Mia!
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/carrito" className="nav-link active text-light">
                <strong>🛒 Carrito ${PrecioTotal.toFixed()}</strong>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
