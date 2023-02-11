import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import OrderContext from "../../context/OrderContext";
import styles from "./CartWidget.module.css"

const CartWidget = () => {
  const { count } = useContext(OrderContext);

  return (
    <button className={styles.carrito}>
      <HiShoppingCart />
      <span className={styles.contador}>{count}</span>
    </button>
  );
};

export default CartWidget;
