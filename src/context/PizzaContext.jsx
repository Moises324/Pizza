import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getPizzas = async () => {
    const res = await fetch("/Pizzas.json");
    const data = await res.json();

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    const PizzasName = data.map((pizza) => ({
      ...pizza,
      name: capitalizeFirstLetter(pizza.name),
    }));

    setPizzas(PizzasName);
    setLoading(false);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const VerMas = (id) => {
    navigate(`pizza/${id}`);
  };

  const anadirCarrito = (pizza) => {
    setCarrito([...carrito, pizza]);
  };

  const removerCarrito = (pizza) => {
    const pizzaIndex = carrito.findIndex((item) => item.id === pizza.id);
    const carroActual = [...carrito];

    if (carroActual[pizzaIndex].quantity > 1) {
      carroActual[pizzaIndex].quantity -= 1;
    } else {
      carroActual.splice(pizzaIndex, 1);
    }

    setCarrito(carroActual);
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        setPizzas,
        VerMas,
        loading,
        anadirCarrito,
        removerCarrito,
        carrito,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
