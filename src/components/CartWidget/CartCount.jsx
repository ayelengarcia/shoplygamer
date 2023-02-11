import { useContext, useEffect } from "react";
import OrderContext from "../../context/OrderContext";

const CartCounter = ({ title, category }) => {
  const { carrito, setCarrito } = useContext(OrderContext);

  const item = carrito.find(
    (product) => product.title === title && product.category === category
  );

  useEffect(() => {
    if (item && item.amount <= 0) {
      const newCarrito = carrito.filter((product) => product !== item);
      setCarrito(newCarrito);
    }
  }, [carrito]);

  return <span>{item ? item.amount : 0}</span>;
};

export default CartCounter;