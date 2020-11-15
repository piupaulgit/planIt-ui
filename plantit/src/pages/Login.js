import React from 'react';
import { Container, Row,Col, Form, FormControl, Button } from 'react-bootstrap';
import '../assets/scss/login.scss';

const Login = () => {
    return(
        <div className="login">
            <Container fluid className="p-0">
                <Row className="m-0">
                    <Col md={6} className="login__left bg-pink d-flex align-item-between">
                        <div>
                            <span className="logo logo--large"></span>
                            <h1 className="text-uppercase font-bold">Plan your project <br></br>like a PRO</h1>
                        </div>
                    </Col>
                    <Col md={6} className="login__right">
                        <Form>
                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <FormControl type="email" placeholder="Enter email"></FormControl>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Password</Form.Label>
                                <FormControl type="email" placeholder="Enter Password"></FormControl>
                            </Form.Group>
                            <Button type="secondary">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;