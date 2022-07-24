import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

export default function Panel() {
    return (
        <Row>
            <Col md={4}>
                <Card
                    bg="primary"
                    text='white'
                    className="mb-2"
                >
                    <Card.Header>收入</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            111
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
            <Col md={4}>
                <Card
                    bg="secondary"
                    text='white'
                    className="mb-2"
                >
                    <Card.Header>支出</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            111
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
            <Col md={4}>
                <Card
                    bg="danger"
                    text='white'
                    className="mb-2"
                >
                    <Card.Header>余额</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            111
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
    )
}