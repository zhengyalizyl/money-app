import React, { useState, useEffect } from 'react'
import { Form, Row, Col, FormControl, Button } from 'react-bootstrap'
import { RiAddFill } from 'react-icons/ri';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext'

export default function MoneyForm() {
    const [amount, setAmount] = useState();
    const [title, setTitle] = useState('');
    const [type, setType] = useState('Credit');
    const [date, setDate] = useState();

    const { currentUser } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (type === '') {
            return;
        }
        try {
            await addDoc(collection(db, "records"), {
                date,
                title,
                amount,
                type,
                user: doc(db, "users", currentUser.uid),
            })

            setTitle('')
            setAmount('')
            setDate('')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="align-items-center">
                <Col sm={2} className="my-1">
                    <DatePicker
                        required
                        selected={date}
                        onChange={(date) => setDate(date)}
                        maxDate={new Date()}
                        isClearable
                        showYearDropdown
                        showTimeSelect
                        className="form-control"
                        dateFormat="yyyy/MM/dd HH:mm"
                    />
                </Col>
                <Col sm={2} className="my-1">
                    <Form.Select value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="">Select type</option>
                        <option value="Credit">收入</option>
                        <option value="Debit">支出</option>
                    </Form.Select>
                </Col>
                <Col sm={2} className="my-1">
                    <FormControl value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Title" />
                </Col>
                <Col sm={2} className="my-1">
                    <FormControl value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder="Amount" type="number" />
                </Col>
                <Col xs="auto" className="my-1">
                    <Button type="submit"><RiAddFill /> Add</Button>
                </Col>
            </Row>
        </Form>
    )
}

