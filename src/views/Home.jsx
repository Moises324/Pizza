import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { pizzas, VerMas, anadirCarrito } = useContext(PizzaContext);
  return (
    <>
      <div className="banner p-5">
        <Banner />
      </div>
      <div className="container mt-3">
        <div className="row">
          {pizzas &&
            pizzas.map((pizza) => (
              <div key={pizza.id} className="col-md-4 mb-3">
                <div className="card">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title border-bottom pb-2">
                      {pizza.name}
                    </h5>
                    <ul className="custom-list">
                      {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                    <div className="text-center border-top">
                      <p className="card-text">$ {pizza.price}</p>
                      <button
                        className="btn btn-danger me-1"
                        onClick={() => VerMas(pizza.id)}
                      >
                        Ver más
                      </button>
                      <button
                        className="btn btn-success ms-1"
                        onClick={() => anadirCarrito(pizza)}
                      >
                        Agregar 🛒
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <NavLink to="/carrito" className="btn btn-primary">
          Ir a Carrito
        </NavLink>
      </div>
    </>
  );
};

export default Home;
