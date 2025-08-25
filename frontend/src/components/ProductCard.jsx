import { Heading, HStack, IconButton, Box, Image, Text, useColorModeValue, Button, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, VStack, Input, ModalFooter } from '@chakra-ui/react'
import React from 'react'
//import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import useProductStore from '../store/product';
import { useToast } from "@chakra-ui/react";

const ProductCard = ({product}) => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const bg = useColorModeValue("white", "gray.800");

  const {deleteProduct, products, setProducts} = useProductStore();
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
          <Button colorScheme="blue" onClick={onOpen}>Edit</Button>
          <Button colorScheme="red" onClick={handleDeleteProduct}>
            Delete
          </Button>
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
            <ModalHeader>Update Product</ModalHeader>
            <ModalCloseButton/>
            <modalBody>
                <VStack spacing={4}>
                    <Input placeholder='Product name'
                    name='name'/>
                    <Input placeholder='Price'
                    name='price'/>
                    <Input placeholder='Product description'
                    name='description'/>
                    <Input placeholder='Product Image'
                    name='image'/>

                </VStack>
            </modalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3}>
                    Update Product
                </Button>
                <Button variant='ghost' onClick={onClose}>
                    Cancel
                </Button>
            </ModalFooter>
        </ModalContent>

      </Modal>
    </Box>
  );
}

export default ProductCard