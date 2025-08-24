import { Box, VStack, Container, Heading, FormControl, FormLabel, Input, Textarea, Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

const CreatePage = () => {
    const [newProduct, setNewProduct] = React.useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });

    const boxBg = useColorModeValue('white', 'gray.800');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add API call to create product
        console.log('Product created:', newProduct);
    };

  return (
        <Container maxW="container.sm">
            <VStack spacing={8}>
                <Heading as="h1" size="xl">Create New Product</Heading>
                <Box w="100%" bg={boxBg} p={6} rounded="lg" shadow="md">
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    value={newProduct.name}
                                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Price</FormLabel>
                                <Input
                                    type="number"
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    value={newProduct.description}
                                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Image URL</FormLabel>
                                <Input
                                    value={newProduct.image}
                                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                                />
                            </FormControl>
                            <Button type="submit" colorScheme="blue">Create Product</Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </Container>
)}

export default CreatePage