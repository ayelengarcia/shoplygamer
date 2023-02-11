import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import styles from "./ProductCard.module.css";
import { useTheme } from "../../context/ThemeContext";

const SkeletonCard = () => {
  const { theme } = useTheme();

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
        <div>
          <Skeleton minW="270px" maxW="350px" height="182px" />
        </div>
        <Stack mt="6" spacing="3" px="4">
          <Heading
            size="md"
            fontFamily="font-family: 'Montserrat', sans-serif;"
          >
            <SkeletonText my="4" noOfLines={4} spacing="5" skeletonHeight="2" />
          </Heading>
        </Stack>
      </CardBody>

      <Divider className={styles[theme.divider]} flex="3" />

      <CardFooter flex="1" alignItems="end" gap="2">
        <Skeleton height="30px" width="90px" />
        <Skeleton height="30px" width="90px" />
      </CardFooter>
    </Card>
  );
};

export default SkeletonCard;
