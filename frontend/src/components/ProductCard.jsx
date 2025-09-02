import { Heading, HStack, IconButton, Box, Image, Text, useColorModeValue, Button, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, VStack, Input, ModalFooter, ModalBody } from '@chakra-ui/react'
import React from 'react'
//import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import useProductStore from '../store/product';
import { useToast } from "@chakra-ui/react";
import { useState } from 'react';


const ProductCard = ({product}) => {
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name || "",
    price: product.price || "",
    description: product.description || "",
    image: product.image || ""
  });


  const textColor = useColorModeValue("gray.600", "gray.300");
  const bg = useColorModeValue("white", "gray.800");

  const {deleteProduct,  products, setProducts} = useProductStore();
  const toast = useToast();

  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleDeleteProduct = async () => {
    const { success, message } = await deleteProduct(product._id);
    if (success && message.toLowerCase().includes('deleted')) {
      setProducts(products.filter(p => p._id !== product._id));
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
        variant: 'subtle',
      });
    } else {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };
  const { updateProduct } = useProductStore();
  const handleUpdateProduct = async (pid, updatedProductData) => {
    const { success, message } = await updateProduct(pid, updatedProductData);
    toast({
      title: success ? 'Success' : 'Error',
      description: message,
      status: success ? 'success' : 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
      variant: 'subtle',
    });
    if (success) onClose();
  } 

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
          <Button colorScheme="blue" onClick={onOpen}>
            Edit
          </Button>
          <Button colorScheme="red" onClick={handleDeleteProduct}>
            Delete
          </Button>
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product name"
                name="name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                name="price"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Product description"
                name="description"
                value={updatedProduct.description}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    description: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Product Image"
                name="image"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                }
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update Product
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ProductCard