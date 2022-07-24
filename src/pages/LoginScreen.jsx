import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
// import { auth } from '../firebase'
// import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from '../components/Loader'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { AiFillGithub } from 'react-icons/ai'

function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login, currentUser, loginWithGithub } = useAuth();

    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser])
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await login(email, password)
            //   const res = await signInWithEmailAndPassword(auth, email, password)
            //   navigate('/')
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }

    };

    return (
        <>
            <h1 className="fs-4">Login</h1>
            {loading && <Loader />}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <hr />
            <Button onClick={loginWithGithub} variant="secondary">
                <AiFillGithub /> Login with Github
            </Button>
        </>
    );
}

export default LoginScreen