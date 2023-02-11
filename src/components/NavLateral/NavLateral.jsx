import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Subcategories from "../SubCategories/SubCategories";
import categories from "../../../public/categories.json";
import { useTheme } from "../../context/ThemeContext";
import OrderContext from "../../context/OrderContext";
import Categories from "../Categories/Categories";
import { Divider, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";

const NavLateral = ({ styles, productos, setProductos }) => {
  const { theme } = useTheme();

  const { order, changeOrder, items, changeItems, filter, changeFilter, icon, changeIcon, icon2, changeIcon2, icon3, changeIcon3, selectCategory, setSelectCategory, setSearch } = useContext(OrderContext);
  
  const orderPrice = (ascending) => { const orderProducts = [...productos].sort((a, b) => { return ascending ? a.price - b.price : b.price - a.price }); setProductos(orderProducts)};

  return (
    <div className={styles.navProductos} style={{ background: theme.bgTrasluc }}>

      <button className={styles.btnProd} onClick={() => { changeOrder(!order), changeIcon(!icon) }}>
        <p>Ordenar</p>
        {icon ? (
          <IoMdArrowDropup color="#3182ce" />
        ) : (
          <IoMdArrowDropdown color="#3182ce" />
        )}
      </button>

      {order && (
        <ul className={styles.listUl}>
          <Link to={"/productos"} onClick={() => { setSearch(""); setSelectCategory(null)}}>Todos </Link>
          <button onClick={() => orderPrice(false)}>Mayor Precio</button>
          <button onClick={() => orderPrice(true)}>Menor Precio</button>
        </ul>
      )}

      <Divider className={styles[theme.divider]} flex="1" />

      <button className={styles.btnProd} onClick={() => { changeItems(!items), changeIcon2(!icon2)}}>
        <p>Categorias</p>
        {icon2 ? (
          <IoMdArrowDropup color="#3182ce" />
        ) : (
          <IoMdArrowDropdown color="#3182ce" />
        )}
      </button>

      {items && (
        <Categories
          categories={categories}
          setSelectCategory={setSelectCategory}
          styles={styles}
        />
      )}

      <Divider className={styles[theme.divider]} flex="1" />

      <button className={styles.btnProd} onClick={() => {changeFilter(!filter), changeIcon3(!icon3)}}>
        <p>Filtros</p>
        {icon3 ? (
          <IoMdArrowDropup color="#3182ce" />
        ) : (
          <IoMdArrowDropdown color="#3182ce" />
        )}
      </button>

      {filter && (
        <Subcategories
          categories={categories}
          selectCategory={selectCategory}
          styles={styles}
        />
      )}

      <Divider className={styles[theme.divider]} flex="1" />
    </div>
  );
};

export default NavLateral;
