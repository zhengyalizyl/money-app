import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import React from 'react'
import SignUpScreen from "./pages/SignUpScreen";
import LoginScreen from "./pages/LoginScreen";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<HomeScreen />} />
                        <Route path='/signup' element={<SignUpScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                    </Routes>
                </Container>
            </AuthProvider>
        </BrowserRouter>
    )
}


export default App