import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import React from 'react'
import SignUpScreen from "./pages/SignUpScreen";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route  path='/signup'  element={<SignUpScreen/>} />
            </Routes>
            </Container>
        </BrowserRouter>
    )
}


export default App