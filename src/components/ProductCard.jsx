import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Link, useParams } from "react-router-dom";

const ProductCard = ({ image, title, price, categ }) => {

  const { category } = useParams();

  return (
    <Card
      minW="sm"
      maxW="md"
      flex="1"
      my="0"
      backgroundColor="rgba(15, 14, 14, .8)"
      boxShadow="5px 6px 8px -2px rgba(0,0,0,0.62)"
    >
      <CardBody p="0">
        <div className="imagenCont">
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            className="imagen"
          />
        </div>
        <Stack mt="6" spacing="3" color="white" px="4">
          <Heading
            size="md"
            fontFamily="font-family: 'Montserrat', sans-serif;"
          >
            {title}
          </Heading>
          <Text color="rgb(219, 205, 205)" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider flex="1" />
      <CardFooter flex="1" alignItems="end">
        <ButtonGroup>
          {category !== undefined ? (
            <Link key={title} to={`${title}`}>
              <Button variant="solid" colorScheme="blue">
                Ver detalle
              </Button>
            </Link>
          ) : (
            <Link key={title} to={`${categ}/${title}`}>
              <Button variant="solid" colorScheme="blue">
                Ver detalle
              </Button>
            </Link>
          )}

          <Button variant="ghost" colorScheme="blue">
            Añadir a carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
