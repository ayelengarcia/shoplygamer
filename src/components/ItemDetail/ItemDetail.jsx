import { useTheme } from "../../context/ThemeContext";
import { useParams, Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";
import { useContext} from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Button, ButtonGroup, useToast } from "@chakra-ui/react";
import OrderContext from "../../context/OrderContext";
import CartCounter from "../CartWidget/CartCount";

const ItemDetail = ({ productos }) => {
  const { theme } = useTheme();
  const { category, title } = useParams();
  const { carrito, setCarrito, count, setCount, total, setTotal } = useContext(OrderContext);
  
  const toast = useToast({
    position: "top",
    title: "Has agregado un producto al carrito",
    duration: 3000,
    isClosable: true,
    containerStyle: {
      width: "800px",
      maxWidth: "100%",
      background: "#0078ff",
      color: "#f9f9f9",
    },
  });

  const item = productos.find(
    (item) => item.title === title && item.category === category
  );

  const addCarrito = () => {
    setCount(count + item.amount);
    setTotal(total + item.price);

    const existeProduct = carrito.find(
      (product) => product.title === item.title
    );
    if (existeProduct) {
      const newCarrito = carrito.map((product) =>
        product.title === item.title
          ? { ...product, amount: product.amount + 1 }
          : product
      );
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, { ...item, amount: 1 }]);
    }
  };

  const deleteCarrito = () => {
    const existeProduct = carrito.find(
      (product) => product.title === item.title
    );
    if (existeProduct) {
      const newCarrito = carrito.map((product) =>
        product.title === item.title
          ? { ...product, amount: product.amount - 1 }
          : product
      );
      setCount(count - item.amount >= 0 ? count - item.amount : 0);
      setTotal(total - item.price >= 0 ? total - item.price : 0);
      setCarrito(newCarrito);
    }
  };

  return (
    <div
      className={styles.detail}
      style={{ background: theme.bgTrasluc, color: theme.color }}
    >
      <h2 className={styles.titleDetail}>{item.title.toUpperCase()}</h2>
      <div className={styles.detailVista}>
        <img className={styles.imgDetail} src={item.image} alt={item.title} />
        <div className={styles.description}>
          <Link to="/carrito">
            <div className="flexEnd">
              <button className={styles.btn}>
                <p>Ir al</p>
                <HiShoppingCart />
              </button>
            </div>
          </Link>

          <p>{item.description}</p>

          <strong>$ {item.price.toLocaleString()}</strong>

          <div className="flexStart">
            <p>Cantidad:</p>
            <CartCounter
              title={item.title}
              category={item.category}
              amount={item.amount}
            />
          </div>

          <ButtonGroup>
            <Button
              variant="solid"
              colorScheme={theme.btn}
              onClick={() => {addCarrito(), toast();}}
            >
              <p style={{ padding: "0px 5px" }}>Añadir</p>
            </Button>

            <Button
              variant="ghost"
              colorScheme={theme.btn}
              onClick={() => deleteCarrito()}
            >
              <p style={{ padding: "0px 5px" }}>Quitar</p>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
