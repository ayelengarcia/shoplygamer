import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Header.module.css";
import { useTheme } from "../../context/ThemeContext";

const header = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <Grid
      h="150px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(6, 1fr)"
      pos="fixed"
      w="100%"
      zIndex={2}
      top="0"
    >
      <GridItem
        colSpan={3}
        rowSpan={1}
        bg={theme.bgHeader}
        p="2"
        className="flexStart"
      >
        <Link to="/">
          <img
            className={styles.logo}
            src="shoplylogo.png"
            alt="Shoply Gammer"
          />
        </Link>
      </GridItem>

      <GridItem
        colSpan={3}
        rowSpan={1}
        bg={theme.bgHeader}
        color="#f9f9f9"
        px="2"
        gap={3}
        className="flexEnd"
      >
        <Button
          onClick={() => changeTheme()}
          variant="ghost"
          colorScheme="facebook"
        >
          {theme.icon}
        </Button>
        <Button fontSize=".8rem" variant="solid" colorScheme={theme.btn}>
          INGRESAR
        </Button>
      </GridItem>

      <Menu>
        <GridItem colSpan={1} bg={theme.bgMenu} px="1" className="flexCenter">
          <MenuButton
            className={styles.btnMenu}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon color="#f9f9f9" />}
            border="1px"
            colorScheme={theme.btnHamburg}
            borderColor="#f9f9f985"
          />
          <MenuList
            color={theme.color}
            bg={theme.bgMenulist}
            border="1px"
            borderColor="#f9f9f985"
          >
            <Link to="/productos">
              <MenuItem bg={theme.bgMenulist} color="#f9f9f9">
                PRODUCTOS
              </MenuItem>
            </Link>

            <Link to="/ayuda">
              <MenuItem bg={theme.bgMenulist} color="#f9f9f9">
                AYUDA
              </MenuItem>
            </Link>

            <Link to="/marcasSponsor">
              <MenuItem bg={theme.bgMenulist} color="#f9f9f9">
                MARCAS SPONSOR
              </MenuItem>
            </Link>
          </MenuList>
        </GridItem>

        <GridItem
          colSpan={4}
          className="flexAround"
          bg={theme.bgMenu}
          p="2"
          color={theme.color}
        >
          <nav className={styles.menuDesplegado}>
            <NavLink to="/productos">
              <li>PRODUCTOS</li>
            </NavLink>
            <NavLink to="/ayuda">
              <li>AYUDA</li>
            </NavLink>
            <NavLink to="/marcasSponsor">
              <li>MARCAS SPONSOR</li>
            </NavLink>
          </nav>
        </GridItem>

        <GridItem
          colSpan={1}
          bg={theme.bgMenu}
          p="2"
          className="flexEnd"
          color={theme.color}
        >
          <Link to="/carrito">
            <CartWidget />
          </Link>
        </GridItem>
      </Menu>
    </Grid>
  );
};

export default header;
