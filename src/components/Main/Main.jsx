import { Route, Routes, Navigate, Link } from "react-router-dom";
import { Button, ButtonGroup, Text, Image } from "@chakra-ui/react";
import MenuProductos from "../MenuProductos/MenuProductos";
import { useTheme } from "../../context/ThemeContext";
import Carrito from "../Carrito/Carrito";
import styles from "./Main.module.css";
import Ayuda from "./Ayuda";

const Main = () => {
  const { theme } = useTheme();

  return (
    <div className={styles[theme.bgUL]}>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className={styles.inicio}
              style={{ background: theme.bgTrasluc, color: theme.color }}
            >
              <Text className={styles.text} mb="5">
                BIENVENIDOS/AS A SHOPLY GAMER 🖥!
              </Text>
              <img src="banner.png" alt="Banner" />
              <ButtonGroup mt="30px">
                <Link to="/productos">
                  <Button variant="solid" colorScheme={theme.btn}>
                    Seguir navegando
                  </Button>
                </Link>
              </ButtonGroup>
            </div>
          }
        />

        <Route
          path="ayuda"
          element={ <Ayuda/>}/>

        <Route
          path="marcasSponsor"
          element={
            <div className={styles.inicio}
              style={{ background: theme.bgTrasluc, color: theme.color }} >
              <Text className={styles.text} mb="12">Nuestros Sponsors 🛍</Text>
              <Image boxSize='320px' objectFit='contain' src="sponsors.png" alt="Sponsors" />
            </div>
          }
        />

        <Route path="productos/*" element={<MenuProductos />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Main;
