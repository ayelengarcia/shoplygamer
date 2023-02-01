import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProductsCard from "../components/ProductCard";

const ItemListContainer = ({ productos}) => {
  const { category } = useParams();

  let productosFilt = productos;
  if (category && category !== "todos") {
    productosFilt = productos.filter(
      (producto) => producto.category === category
    );
  }

  return (
    <Flex
      flex="1"
      gap="2"
      justifyContent="center"
      flexWrap="wrap"
    >
      {productosFilt.map((producto) => {
        return (
          <ProductsCard
            key={producto.id}
            image={producto.image}
            title={producto.title}
            price={producto.price}
            categ={producto.category}
          />
        );
      })}
    </Flex>
  );
};

export default ItemListContainer;
