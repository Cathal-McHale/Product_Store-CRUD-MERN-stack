import { Heading, HStack, IconButton, Box, Image, Text, useColorModeValue, Button } from '@chakra-ui/react'
import React from 'react'
//import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const ProductCard = ({product}) => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <Button colorScheme="red">Edit</Button>
          <Button colorScheme="red">Delete</Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default ProductCard