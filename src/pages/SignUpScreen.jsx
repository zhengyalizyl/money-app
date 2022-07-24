import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Loader from '../components/Loader'
import { useAuth } from '../contexts/AuthContext'

function SignUpScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {signup} =useAuth();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (password !== confirmPassword) {
            setError("Password do not match");
            return;
        }

        try {
            // const res = await createUserWithEmailAndPassword(auth, email, password)
            // console.log(res)
            await signup(email, password)
        } catch (err) {
            setError(err.message)
        }finally{
            setLoading(false)
        }

    };

    return (
        <>
            <h1 className="fs-4">Sign Up</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {loading && <Loader />}
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

                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default SignUpScreen;