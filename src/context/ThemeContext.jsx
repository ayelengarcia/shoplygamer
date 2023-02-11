import { createContext, useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Themes = {
  light: {
    icon: <FaMoon fontSize="1.2rem" />,
    bgUL: "fondoMainLight",
    bgHeader: "#3182CE",
    color: "#000000",
    color2: "#F9F9F9",
    colorPrice: "#807C7C",
    btn: "facebook",
    btnHamburg: "facebook",
    bgMenu: "rgba(249, 249, 249, 1)",
    bgMenulist: "#385898",
    bgTrasluc: "rgba(269, 259, 249, 0.7)",
    divider: "dividerLight",
  },

  dark: {
    icon: <FaSun fontSize="1.2rem" />,
    bgUL: "fondoMainDark",
    bgHeader: "#001C52",
    color: "#F9F9F9",
    color2: "#000000",
    colorPrice: "rgb(219, 205, 205)",
    btn: "blue",
    btnHamburg: "",
    bgMenu: "rgba(15, 14, 14, 3)",
    bgMenulist: "#000000",
    bgTrasluc: "rgba(15, 14, 14, .8)",
    divider: "dividerDark",
  },
};

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("dark");
  
  const changeTheme = () => theme === "dark" ? setTheme("light") : setTheme("dark");
  const value = { theme: Themes[theme], changeTheme };

  return <ThemeContext.Provider value={value} > {children} </ThemeContext.Provider >;
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme };
