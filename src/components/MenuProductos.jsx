import { Grid, GridItem, Divider } from "@chakra-ui/react";
import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetail from "./ItemDetail";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";

const MenuProductos = () => {
  const [productos, setProductos] = useState([]);

  const getProductos = () => {
    axios.get("/products.json").then((response) => {
      setProductos(response.data);
    });
  };
  useEffect(() => {
    getProductos();
  }, []);

  const categories = [
    "Notebooks",
    "Procesadores",
    "Mothers",
    "Placas de video",
    "Memorias Ram",
    "Almacenamiento",
    "Fuentes",
    "Gabinetes",
    "Monitores",
  ];

  return (
    <Grid px="2" pb="2" templateColumns="repeat(4, 1fr)" gap={1}>
      <GridItem
        borderRadius="8px"
        colSpan={1}
        bg="rgba(15, 14, 14, .8)"
        color="#f9f9f9"
      >
        <div className="nav-productos">
          <button className="btn-prod">
            <p>Ordenar por</p> <IoMdArrowDropdown color="#3182ce" />
          </button>
          <ul className="list-ul">
            <Link to={`todos`}>
              <li>Todos</li>
            </Link>
            <li>Mayor Precio</li>
            <li>Menor Precio</li>
          </ul>

          <Divider flex="1" />

          <button className="btn-prod">
            <p>Categorias</p> <IoMdArrowDropdown color="#3182ce" />
          </button>

          <ul className="list-ul">
            {categories.map((category) => (
              <Link key={category} to={`${category}`}>
                <li>{category}</li>
              </Link>
            ))}
          </ul>

          <Divider flex="1" />
          <button className="btn-prod">
            <p>Filtros</p> <IoMdArrowDropdown color="#3182ce" />
          </button>
          <p className="list-ul">
            Los filtros de productos son aplicables a las subcategorías, elegí
            una en el menú de categorías.
          </p>
          <Divider flex="1" />
        </div>
      </GridItem>

      <GridItem colSpan={3}>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer productos={productos} />}
          />
          <Route
            path="/:category"
            element={<ItemListContainer productos={productos} />}
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
