import { Button, ButtonGroup, Divider, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import CarritoListContainer from "./CarritoListContainer";
import useFirestore from "../../customHooks/useFirestore";
import { useTheme } from "../../context/ThemeContext";
import OrderContext from "../../context/OrderContext";
import { useContext, useEffect, React } from "react";
import { MdDeleteSweep } from "react-icons/md";
import styles from "./Carrito.module.css";

const Carrito = () => {
  const { theme } = useTheme();
  const { total, setCarrito, setCount, setTotal, confirmEmail, setConfirmEmail, email, setEmail, nombre, setNombre, orden, setOrden, msj, setMsj, value, setValue } = useContext(OrderContext);
  const { getOrdenes, ordenID } = useFirestore();

  const clearCarrito = () => {
    setCarrito([])
    setCount(0)
    setTotal(0)
    setNombre("");
    setEmail("");
    setConfirmEmail("");
    setOrden(false);
    setMsj(false);
  }

  useEffect(() => {
    if (orden) {
      setOrden(true);
    }
  }, [orden, setOrden]);

 const showOrder = async (e) => {
     e.preventDefault();
    if (nombre && email && confirmEmail && total !== 0 && email === confirmEmail) {
      setOrden(true);
      setMsj(false);  
      await getOrdenes(nombre, email, total); 
    } else {
      setMsj("Porfavor, verifique que todos los campos sean correctos y que haya productos en su carrito.");
    }
  };

  return (
    <div
      className={styles.detail}
      style={{ background: theme.bgTrasluc, color: theme.color }}
    >
      <h2>Carrito de compras</h2>

      <div className={styles.container}>
        <button className={styles.btn} onClick={clearCarrito}>
          <MdDeleteSweep /> <p>Vaciar carrito</p>
        </button>
      </div>

      <CarritoListContainer />

      <div className={styles.containerPago}>
        <div className="flexStart">
          <img src="logo-shoply.png" alt="Logo" />

          <RadioGroup
            className={styles.listUl}
            onChange={setValue}
            value={value}
          >
            <Stack direction="column">
              <Radio type="radio" name="pago" value="1">
                Deposito o Transferencia Bancaria.
              </Radio>
              <Radio type="radio" name="pago" value="2">
                Pago Gamer - Tarjetas Visa o MasterCard.
              </Radio>
              <Radio type="radio" name="pago" value="3">
                Mercadopago - Tarjetas Online, PagoFacil, RapiPago.
              </Radio>
            </Stack>
          </RadioGroup>
        </div>

        <div>
          <p className={styles.precio}>Total: $ {total.toLocaleString()}</p>
        </div>
      </div>

      <div className={styles.containerPago}>
        <form
          onSubmit={showOrder}
          className="flexBetween"
          style={{ width: "100%" }}
        >
          <div className="flexBetween">
            <img src="logo-shoply.png" alt="Logo" />
            <div p="2" className="flexColumn" w="250px">
              <Input
                fontSize=".9rem"
                type="text"
                value={nombre}
                className={styles.email}
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
              />
              <Input
                fontSize=".9rem"
                type="Email"
                value={email}
                className={styles.email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                fontSize=".9rem"
                type="Email"
                value={confirmEmail}
                className={styles.email}
                placeholder="Confirmar Email"
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </div>
          </div>
          <ButtonGroup>
            <Button variant="solid" colorScheme={theme.btn} type="submit">
              Comprar
            </Button>
          </ButtonGroup>
        </form>
      </div>

      <Text color="red">{msj}</Text>

      <div className="flexCenter">
        {orden && (
          <div className={styles.orderContainer}>
            <h3>ORDEN DE COMPRA</h3>
            <Divider mb="3" my="2" />
            <p>Nro orden: {ordenID}</p>
            <p>Nombre: {nombre}</p>
            <p>Email: {email}</p>
            <p>Total: ${total.toLocaleString()}</p>

            <h2>
              Muchas Gracias por tu compra!. <br /> Te enviaremos un email para
              finalizarla 🙌
            </h2>
            <Button
              mt="3"
              variant="solid"
              colorScheme="facebook"
              onClick={clearCarrito}
            >
              Cerrar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;
