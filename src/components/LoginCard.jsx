import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toggleIsLogged } from '../store/slices/isLogged.slice';

const LoginCard = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("")

    const submit = (data) => {
        axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
            .then(res => {
                localStorage.setItem("token", res.data.data.token)
                dispatch(toggleIsLogged(true))
                localStorage.setItem('userName', userName)
            })

            .catch(err => {
                if (err.response?.status == 404) {
                    alert("Creenciales Invalidas")
                }
                console.log(err.response)
            })
    }
    return (
        <Card className='login-card background'>
            <Card.Title
                className='unselectable card_tittle'
            >
                Login
            </Card.Title>
            <Form className='login-form' onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        {...register("email")}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                    <Form.Text className="text-muted">
                        <center>Please, use michael@mail.com</center>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="Username"
                        placeholder="Username"
                        onChange={ev => setUserName(ev.target.value)}
                    />
                    <Form.Text className="text-muted">
                        <center>How do you want us to call you?</center>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        {...register("password")}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <Form.Text className="text-muted">
                        <center>password: pass1234</center>
                    </Form.Text>
                </Form.Group>

                <Button variant="info" className='buttonbg' type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    );
};

export default LoginCard;