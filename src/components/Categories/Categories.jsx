import { useContext } from "react";
import { NavLink } from "react-router-dom";
import OrderContext from "../../context/OrderContext";

const Categories = ({ categories, styles }) => {

  const { setSelectCategory, setSearch } = useContext(OrderContext);
  return (
    <ul className={styles.listUl}>
      {Object.keys(categories).map((category) => (
        <NavLink key={category} to={`${category}`}>
          <li onClick={() => { setSelectCategory(category); setSearch("")}}>{category}</li>
        </NavLink>
      ))}
    </ul>
  );
};

export default Categories;
