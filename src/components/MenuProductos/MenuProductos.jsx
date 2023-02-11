import ItemListContainer from "../ItemListContainer/ItemListContainer";
import useFirestore from "../../customHooks/useFirestore";
import { useTheme } from "../../context/ThemeContext";
import NavLateral from "../NavLateral/NavLateral";
import { Grid, GridItem} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "./MenuProductos.module.css"
import { useState, useEffect, useContext } from "react";
import OrderContext from "../../context/OrderContext";

const MenuProductos = () => {
  const { theme } = useTheme();
  const { productos, setProductos } = useFirestore();
  const { search, searcher } = useContext(OrderContext);

  //Buscador
  const resultado = !search ? productos : productos.filter((producto) => producto.title.toLowerCase().includes(search.toLowerCase()));
  
  //Vista grid
  const [colSpan1, setColSpan1] = useState(6);
  const [colSpan2, setColSpan2] = useState(6);
  let vista = window.matchMedia("(min-width: 490px)");

  useEffect(() => {
    const changeGrilla = () => {
      if (vista.matches) {
        setColSpan1(1);
        setColSpan2(5);
      } else {
        setColSpan1(6);
        setColSpan2(6);
      }
    };
    changeGrilla();
    window.addEventListener("resize", changeGrilla);
    return () => {
      window.removeEventListener("resize", changeGrilla);
    };
  }, []);

  return (
    <Grid
      className={styles.container}
      templateColumns="repeat(6, 1fr)"
      templateRows="repeat(1, 1fr)"
      gap={1}
      py="3"
    >
      <GridItem colSpan={colSpan1} color={theme.color}>
        <input
          type="text"
          className={styles.search}
          placeholder="Buscar..."
          onChange={searcher}
          value={search}
        />

        <NavLateral
          styles={styles}
          productos={productos}
          setProductos={setProductos}
        />
      </GridItem>

      <GridItem colSpan={colSpan2}>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer productos={resultado} />}
          />

          <Route
            path="/:category"
            element={<ItemListContainer productos={resultado} />}
          />

          <Route
            path="/:category/:title"
            element={<ItemDetail productos={productos} />}
          />
        </Routes>
      </GridItem>
    </Grid>
  );
};

export default MenuProductos;
