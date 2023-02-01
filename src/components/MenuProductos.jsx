import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import { Grid, GridItem, Divider } from "@chakra-ui/react";
import useFirestore from "../customHooks/useFirestore";
import ItemListContainer from "./ItemListContainer";
import ItemDetail from "./ItemDetail";
import { useState } from "react";

const MenuProductos = () => {
  const { productos, setProductos } = useFirestore();

  // mostrar y ocultar categorias
  const [order, changeOrder] = useState(false);
  const [items, changeItems] = useState(false);
  const [filter, changeFilter] = useState(false);

  const [icon, changeIcon] = useState(false);
  const [icon2, changeIcon2] = useState(false);
  const [icon3, changeIcon3] = useState(false);

  //Ordenar por mayor y menor precio
  const orderMayorPrice = () => {
    const orderProducts = [...productos].sort((a, b) => {
      return b.price - a.price;
    });
    setProductos(orderProducts);
  };

  const orderMenorPrice = () => {
    const orderProducts = [...productos].sort((a, b) => {
      return a.price - b.price;
    });
    setProductos(orderProducts);
  };

  //Buscador
  const [search, setSearch] = useState("");

  const searcher = (e) => setSearch(e.target.value);

  const resultado = !search ? productos : productos.filter((producto) => producto.title.toLowerCase().includes(search. toLowerCase()));

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
    <Grid px="2" pb="2" templateColumns="repeat(6, 1fr)" gap={1}>
      <GridItem
        borderRadius="8px"
        colSpan={1}
        bg="rgba(15, 14, 14, .8)"
        color="#f9f9f9"
      >
        <div className="nav-productos">
          <button
            className="btn-prod"
            onClick={() => {
              changeOrder(!order), changeIcon(!icon);
            }}
          >
            <p>Ordenar</p>
            {icon ? (
              <IoMdArrowDropup color="#3182ce" />
            ) : (
              <IoMdArrowDropdown color="#3182ce" />
            )}
          </button>
          {order && (
            <ul className="list-ul">
              <Link to={"/productos"}>Todos </Link>
              <button onClick={() => orderMayorPrice(resultado)}>
                Mayor Precio
              </button>
              <button onClick={() => orderMenorPrice(resultado)}>
                Menor Precio
              </button>
            </ul>
          )}

          <Divider flex="1" />

          <button
            className="btn-prod"
            onClick={() => {
              changeItems(!items), changeIcon2(!icon2);
            }}
          >
            <p>Categorias</p>
            {icon2 ? (
              <IoMdArrowDropup color="#3182ce" />
            ) : (
              <IoMdArrowDropdown color="#3182ce" />
            )}
          </button>

          {items && (
            <ul className="list-ul">
              {categories.map((category) => (
                <NavLink key={category} to={`${category}`}>
                  <li>{category}</li>
                </NavLink>
              ))}
            </ul>
          )}

          <Divider flex="1" />
          <button
            className="btn-prod"
            onClick={() => {
              changeFilter(!filter), changeIcon3(!icon3);
            }}
          >
            <p>Filtros</p>
            {icon3 ? (
              <IoMdArrowDropup color="#3182ce" />
            ) : (
              <IoMdArrowDropdown color="#3182ce" />
            )}
          </button>
          {filter && (
            <p className="list-ul">
              Los filtros de productos son aplicables a las subcategorías, elegí
              una en el menú de categorías.
            </p>
          )}
          <Divider flex="1" />
        </div>
      </GridItem>

      <GridItem colSpan={5}>
        <input
          type="text"
          className="search margin"
          placeholder="Buscar..."
          onChange={searcher}
          value={search}
        />

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
