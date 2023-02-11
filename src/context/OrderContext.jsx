import { useState, createContext } from "react";

const OrderContext = createContext();

export const OrderProvider = ({children}) => {

  const [order, changeOrder] = useState(false);
  const [items, changeItems] = useState(false);
  const [filter, changeFilter] = useState(false);

  const [icon, changeIcon] = useState(false);
  const [icon2, changeIcon2] = useState(false);
  const [icon3, changeIcon3] = useState(false);

  const [selectCategory, setSelectCategory] = useState(null);

  const [search, setSearch] = useState("");
  const searcher = (e) => { setSearch(e.target.value) };

  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  const [orden, setOrden] = useState(false);
  const [msj, setMsj] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [value, setValue] = useState("1");

  return (
    <OrderContext.Provider
      value={{ order, changeOrder, items, changeItems, filter, changeFilter, icon, changeIcon, icon2, changeIcon2, icon3, changeIcon3, selectCategory, setSelectCategory, search, setSearch, searcher, carrito, setCarrito, count, setCount, total, setTotal, nombre, setNombre, email, setEmail, confirmEmail, setConfirmEmail, orden, setOrden, msj, setMsj, value, setValue}}>
      { children }
    </OrderContext.Provider>
  );
};

export default OrderContext;
