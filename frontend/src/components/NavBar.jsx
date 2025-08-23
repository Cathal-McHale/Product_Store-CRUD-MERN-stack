import { Container, Flex, HStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'



const NavBar = () => {
        return (
            <Flex w="100vw" h={16} alignItems="center" px={8} bg="gray.100" boxShadow="sm">
                {/* Centered heading */}
                <Flex flex="1" justifyContent="center">
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        bgGradient="linear(to-r, teal.500, green.500)"
                        bgClip="text"
                    >
                        <Link to="/homepage">Product Store</Link>
                    </Text>
                </Flex>
                {/* Buttons on the right */}
                <HStack spacing={4}>
                    <Link to="/CreatePage">
                        <Button variant="outline">Create</Button>
                    </Link>
                    <Link to="/homepage">
                        <Button colorScheme="teal">Home</Button>
                    </Link>
                </HStack>
            </Flex>
        )
}

export default NavBar