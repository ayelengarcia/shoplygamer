import { Flex } from "@chakra-ui/react";
import styles from "./Carrito.module.css";
import { MdDeleteForever } from "react-icons/md";
import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import OrderContext from "../../context/OrderContext";
import CartCounter from "../CartWidget/CartCount";

const CarritoListContainer = () => {
  const { carrito, setCarrito, setCount, count, total, setTotal } = useContext(OrderContext);
  
  const deleteItem = (item) => {
    const resultado = carrito.filter(product => product.id !== item.id)
    setCarrito(resultado)
    setCount(count - item.amount);
    setTotal(total - item.price * item.amount);
  }

  const addCarrito = (item) => {
    setTotal(total + item.price);
    setCount(count + 1)
    const existeProduct = carrito.find((product) => product.id === item.id);
    if (existeProduct) {
      const newCarrito = carrito.map((product) =>
        product.id === item.id
          ? { ...product, amount: product.amount + 1 }
          : product
      );
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, { ...item, amount: 1 }]);
    }
  };

  const deleteCarrito = (item) => {
    const existeProduct = carrito.find((product) => product.id === item.id);
    if (existeProduct) {
      const newCarrito = carrito.map((product) =>
        product.id === item.id
          ? { ...product, amount: product.amount - 1 }
          : product
      );
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, { ...item, amount: 1 }]);
    }
    setTotal(total - item.price);
    setCount(count - 1);
  };


  return (
    <Flex flex="1" justifyContent="center" flexDirection="column" mb="2">
      {carrito.map((item) => {
        return (
          <div key={item.id} className={styles.containerPago}>
            <div className="flexStart" style={{marginTop:"20px"}}>
              <Image
                boxSize="80px"
                me="3"
                src={item.image}
                alt="Imagen Producto"
              />
              <h2 className={styles.title}>{item.title}</h2>
            </div>

            <div className="flexEnd width">
              <div className={styles.count}>
                <p onClick={() => deleteCarrito(item)}>-</p>
                <CartCounter
                  title={item.title}
                  category={item.category}
                  amount={item.amount}
                />
                <p onClick={() => addCarrito(item)}>+</p>
              </div>

              <p className={styles.precio}>
                $ {(item.price * item.amount).toLocaleString()}
              </p>

              <button
                style={{ padding: "5px" }}
                onClick={() => deleteItem(item)}
              >
                <MdDeleteForever />
              </button>
            </div>
          </div>
        );
      })}
    </Flex>
  );
};

export default CarritoListContainer;
