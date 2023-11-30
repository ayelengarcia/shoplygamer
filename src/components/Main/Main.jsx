import { Route, Routes, Navigate, Link } from "react-router-dom";
import { Button, ButtonGroup, Text, Image } from "@chakra-ui/react";
import MenuProductos from "../MenuProductos/MenuProductos";
import { useTheme } from "../../context/ThemeContext";
import Carrito from "../Carrito/Carrito";
import styles from "./Main.module.css";
import Ayuda from "./Ayuda";
import { useState, useEffect } from "react";

const Main = () => {
  const { theme } = useTheme();

  const [vista, setVista] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setVista(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              {vista <= 768 ? (
                <img
                  src="BannerMobile.png"
                  alt="Banner"
                  style={{ borderRadius: "3px" }}
                />
              ) : (
                <img
                  src="banner.png"
                  alt="Banner"
                  style={{ borderRadius: "3px" }}
                />
              )}
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

        <Route path="ayuda" element={<Ayuda />} />

        <Route
          path="marcasSponsor"
          element={
            <div
              className={styles.inicio}
              style={{ background: theme.bgTrasluc, color: theme.color }}
            >
              <Text className={styles.text} mb="3">
                Nuestros Sponsors 🛍
              </Text>

              {vista <= 768 ? (
                <Image objectFit="contain" src="sponsors.png" alt="Sponsors" />
              ) : (
                <Image
                  objectFit="contain"
                  src="sponsorsDeskt.png"
                  alt="Sponsors"
                />
              )}
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
