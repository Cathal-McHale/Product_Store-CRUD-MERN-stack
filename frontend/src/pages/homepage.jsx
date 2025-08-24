import React, { useEffect } from 'react'
import { Container, VStack, SimpleGrid, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import useProductStore from '../store/product';
import ProductCard from '../components/ProductCard';

const Homepage = () => {

  const { fetchProducts, products } = useProductStore();
  const safeProducts = Array.isArray(products) ? products : [];
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={30}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products!
        </Text>


        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={6}
          w="100%"
        >
            {safeProducts.map((product) => (
                <ProductCard key={product._id} product={product}/>
            ))}
        </SimpleGrid>

        {(!products || products.length === 0) && (
          <Text fontSize='xl' fontWeight='bold' color='gray.500' textAlign='center'>
            No products found :P{' '}
            <Link to={'/CreatePage'}>
              <span style={{ color: '#3182ce', textDecoration: 'underline', cursor: 'pointer' }}>
                Create a Product
              </span>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
}

export default Homepage