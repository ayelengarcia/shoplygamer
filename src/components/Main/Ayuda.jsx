import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,Text } from "@chakra-ui/react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Main.module.css";

const Ayuda = () => {
  const { theme } = useTheme();

  return (
    <Accordion
      className={styles.inicio}
      style={{ background: theme.bgTrasluc, color: theme.color }}
      defaultIndex={[0]}
      allowMultiple
    >
      <Text className={styles.text} mb="5">
        Preguntas Frecuentes
      </Text>
      <AccordionItem className={styles.acordionItem}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Realizar un pedido
            </Box>
            <AccordionIcon color="#0078ff" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text color="#0078ff">¿Cómo realizo un pedido?</Text>
          <Text>
            Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras, para conocer el costo del envío colocás tu código postal en el recuadro correspondiente, elegís la mensajería de tu preferencia y debajo seleccionas la forma de pago. Luego hacés clic en el botón COMPRAR completás los pasos brindados, hasta confirmar la compra. Se te asignará un número de pedido y se mostrarán los datos del mismo. También enviaremos un mail a tu correo electrónico registrado con los detalles del pedido realizado donde podrás finalizar la compra.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className={styles.acordionItem}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Precio
            </Box>
            <AccordionIcon color="#0078ff" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text color="#0078ff">¿El precio que figura en la web es el precio final?</Text>
          <Text>
            Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className={styles.acordionItem}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Formas de pago
            </Box>
            <AccordionIcon color="#0078ff" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text color="#0078ff">¿Cuáles son las formas de pago?</Text>
          <Text>
           Contamos con tres formas de pago: a través de depósito/transferencia bancaria, con la cual obtenés el precio especial, o bien, a través de los métodos Pago Gamer (Visa o MasterCard) o MercadoPago (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar en cuotas, al precio de lista.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className={styles.acordionItem}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Envíos
            </Box>
            <AccordionIcon color="#0078ff" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text color="#0078ff">¿Cómo gestiono el envío de mi pedido?</Text>
          <Text>
           Actualmente realizamos envíos a todo el país través de Oca y Andreani; y si te encontrás en CABA o alrededores.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className={styles.acordionItem}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Facturación
            </Box>
            <AccordionIcon color="#0078ff" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text color="#0078ff">¿Cómo tramito la factura de mi compra?</Text>
          <Text>
          En todas las compras efectuadas en la web, brindamos sin excepción alguna, la factura de compra. Una vez que realiza y abona el pedido, enviamos a tu dirección de correo electrónico la factura correspondiente.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Ayuda;
