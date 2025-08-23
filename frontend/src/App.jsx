import React from "react"
import { Routes } from "react-router-dom"
import CreatePage from "./pages/CreatePage"
import Home from "./pages/homepage"
import NavBar from "./components/NavBar"
import { Box } from "@chakra-ui/react"
import { Route } from "react-router-dom"

function App() {

  return (
    <Box minH="100vh" bg="gray.100">
      <NavBar />
      <Routes>
        <Route path="/homepage" element={<Home />} />
        <Route path="/CreatePage" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
