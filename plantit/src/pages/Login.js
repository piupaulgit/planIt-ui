import React, { useState } from 'react';
import { Container, Row,Col, Form, FormControl, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginCall } from '../apicalls/user';
import '../assets/scss/login.scss';
import { authenticate, isAuthenticated } from '../helper/user';
toast.configure();
const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        isLoading: false,
        error: '',
        redirectEnable: false
    })
    const {user} = isAuthenticated();
    const Login = (e) =>{
        e.preventDefault();
        loginCall(userInfo).then(res => {
            if(res.error){
                toast.error(res.data)
            }
            else{
                authenticate(res, () => {
                    setUserInfo({...userInfo,redirectEnable: true})
                })
            }
        }).catch(err => toast.error('Something went wrong.'))
    }
    const handleChange = (name) => (e) => {
        const value = e.target.value;
        setUserInfo({...userInfo, [name]:value})
    }

    const performRedirect = () => {
        if(userInfo.redirectEnable || user){
            return <Redirect to="/dashboard"></Redirect>;
        }
    }
    return(
        <div className="login">
            <Container fluid className="p-0">
                <Row className="m-0">
                    <Col md={5} lg={6} className="login__left bg-pink d-flex align-item-between">
                        <div>
                            <span className="logo logo--large"></span>
                            <h1 className="text-uppercase font-bold">Plan your project <br></br>like a PRO</h1>
                        </div>
                    </Col>
                    <Col md={7} lg={6} className="login__right">
                        <Form>
                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <FormControl value={userInfo.email} name="email" type="email" placeholder="Enter email" required onChange={handleChange('email')}></FormControl>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <FormControl value={userInfo.password} name="password" type="password" placeholder="Enter Password" required onChange={handleChange('password')}></FormControl>
                            </Form.Group>
                            <Button className="btn btn-dark" onClick={Login}>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            {performRedirect()}
        </div>
    )
}

export default Login;