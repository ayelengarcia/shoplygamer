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
import CartWidget from "./CartWidget";

const header = () => {
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
        bg="#001C52"
        p="2"
        className="flexStart"
      >
        <Link to="/">
          <img className="logo" src="shoplylogo.png" alt="Shoply Gammer" />
        </Link>
      </GridItem>

      <GridItem
        colSpan={3}
        rowSpan={1}
        bg="#001C52"
        color="#f9f9f9"
        px="2"
        className="flexEnd"
      >
        <Button variant="solid" colorScheme="blue">
          INICIAR SESIÓN
        </Button>
      </GridItem>

      <Menu>
        <GridItem
          colSpan={1}
          bg="rgba(15, 14, 14, 3)"
          px="2"
          className="flexCenter"
        >
          <MenuButton
            className="btnMenu"
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon color="#f9f9f9" />}
            variant="outline"
            border="1px"
            borderColor="#f9f9f985"
          />
          <MenuList
            color="#f9f9f9"
            bg="#001C52"
            border="1px"
            borderColor="#f9f9f985"
          >
            <Link to="/productos">
              <MenuItem className="menuItem">PRODUCTOS</MenuItem>
            </Link>

            <Link to="/ayuda">
              <MenuItem className="menuItem">AYUDA</MenuItem>
            </Link>

            <Link to="/marcasSponsor">
              <MenuItem className="menuItem">MARCAS SPONSOR</MenuItem>
            </Link>
          </MenuList>
        </GridItem>

        <GridItem
          colSpan={4}
          className="flexAround"
          bg="rgba(15, 14, 14, 3)"
          p="2"
          color="#f9f9f9"
        >
          <nav className="menu-desplegado">
            <NavLink to="/productos">
              <li className="item-desplegado">PRODUCTOS</li>
            </NavLink>
            <NavLink to="/ayuda">
              <li className="item-desplegado">AYUDA</li>
            </NavLink>
            <NavLink to="/marcasSponsor">
              <li className="item-desplegado">MARCAS SPONSOR</li>
            </NavLink>
          </nav>
        </GridItem>

        <GridItem
          colSpan={1}
          bg="rgba(15, 14, 14, 3)"
          p="2"
          className="flexEnd"
          color="#f9f9f9"
        >
          <CartWidget />
        </GridItem>
      </Menu>
    </Grid>
  );
};

export default header;
