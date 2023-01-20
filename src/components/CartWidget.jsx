import { HiShoppingCart } from "react-icons/hi";

const CartWidget = () => {
  return (
    <button className="carrito">
      <HiShoppingCart />
      <span className="contador">0</span>
    </button>
  );
};

export default CartWidget;
