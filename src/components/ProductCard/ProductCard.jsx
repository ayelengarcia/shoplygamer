import {
  Button,
  ButtonGroup,
  Skeleton,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  SkeletonText,
} from "@chakra-ui/react";
import useFirestore from "../../customHooks/useFirestore";
import { useTheme } from "../../context/ThemeContext";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ image, title, price, categ }) => {
  const { theme } = useTheme();
  const { category } = useParams();
  const { loading } = useFirestore();


  return (
    <Card
      minW="270px"
      maxW="350px"
      flex="1"
      my="0"
      bg={theme.bgTrasluc}
      boxShadow="5px 6px 8px -2px rgba(0,0,0,0.62)"
    >
      <CardBody p="0">
        <div className={styles.imgCont}>
          <Skeleton height="182.92px" isLoaded={!loading}>
            <Image src={image} borderRadius="lg" className={styles.imagen} />
          </Skeleton>
        </div>
        <Stack mt="6" spacing="3" color={theme.color} px="4">
          <Heading
            size="md"
            fontFamily="font-family: 'Montserrat', sans-serif;"
          >
            <SkeletonText isLoaded={!loading}>{title}</SkeletonText>
          </Heading>
          <Skeleton
            fontSize="2xl"
            height="35px"
            width="150px"
            isLoaded={!loading}
          >
            <Text color={theme.colorPrice}></Text>${price.toLocaleString()}
          </Skeleton>
        </Stack>
      </CardBody>

      <Divider pt="2" className={styles[theme.divider]} flex="1" />

      <CardFooter flex="1" alignItems="end">
        <Skeleton height="35px" isLoaded={!loading}>
          <ButtonGroup>
            {category !== undefined ? (
              <Link key={title} to={`${title}`}>
                <Button variant="solid" colorScheme={theme.btn}>
                  Ver detalle
                </Button>
              </Link>
            ) : (
              <Link key={title} to={`${categ}/${title}`}>
                <Button variant="solid" colorScheme={theme.btn}>
                  Ver detalle
                </Button>
              </Link>
            )}
          </ButtonGroup>
        </Skeleton>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
