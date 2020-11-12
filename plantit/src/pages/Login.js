import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
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
                        right
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;