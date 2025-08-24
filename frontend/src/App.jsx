import React from "react"
import { useColorModeValue } from "@chakra-ui/react"
import { Routes } from "react-router-dom"
import CreatePage from "./pages/CreatePage"
import Homepage from "./pages/homepage"
import NavBar from "./components/NavBar"
import { Box } from "@chakra-ui/react"
import { Route } from "react-router-dom"

function App() {

  const appBg = useColorModeValue('gray.100', 'gray.900');
  return (
    <Box minH="100vh" bg={appBg}>
      <NavBar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/CreatePage" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
