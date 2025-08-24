import {
  Flex,
  HStack,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex w="100vw" h={16} alignItems="center" px={8} bg={navBg} boxShadow="sm">
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
      <HStack spacing={4}>
        <Link to="/CreatePage">
          <Button variant="outline">Create</Button>
        </Link>
        <Link to="/homepage">
          <Button colorScheme="teal">Home</Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
