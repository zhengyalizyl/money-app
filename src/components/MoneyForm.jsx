import React, { useState } from 'react'
import { Form, Row, Col, FormControl, Button } from 'react-bootstrap'
import { RiAddFill } from 'react-icons/ri';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function MoneyForm() {
    const [amount, setAmount] = useState();
    const [title, setTitle] = useState('');
    const [type, setType] = useState('Credit');
    const [date, setDate] = useState();

    return (
        <Form>
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
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
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

