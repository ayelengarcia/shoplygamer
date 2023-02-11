import { useContext } from "react";
import OrderContext from "../../context/OrderContext";

const Subcategories = ({ categories, styles }) => {

  const { selectCategory, setSearch } = useContext(OrderContext);

  const filterSubcategory = (subcategory) => {setSearch(subcategory)};
  return (
    <div>
      {selectCategory && (
        <div className={styles.listUl}>
          {categories[selectCategory][0].subcategories &&
            Object.keys(categories[selectCategory][0].subcategories).map(
              (subcategory) => (
                <li key={subcategory}>
                  <h4>{subcategory}</h4>
                  <ul className={styles.listUl}>
                    {categories[selectCategory][0].subcategories[
                      subcategory
                    ].map((item) => (
                      <li key={item}>
                        <input type="radio" name={categories} onClick={() => filterSubcategory(item)}/>
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )}
        </div>
      )}
    </div>
  );
};

export default Subcategories;
