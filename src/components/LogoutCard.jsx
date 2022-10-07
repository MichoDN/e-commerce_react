import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleIsLogged } from '../store/slices/isLogged.slice';

const LogoutCard = () => {

    const dispatch = useDispatch()

    const logout = () => {
        localStorage.setItem("token", "")
        dispatch(toggleIsLogged(false))
        localStorage.setItem("userName", "")
    }

    return (
        <Card className='logout-card background'>
            <Card.Title
                className='unselectable card_tittle'
            >
                <p>
                    Right now you are logged in as: 
                    <br />
                    {localStorage.getItem("userName").length > 1 ? (
                        localStorage.getItem("userName")
                    ) : (
                        <>Visitor</>
                    )}
                </p>
            </Card.Title>
            <Button variant="primary" type="submit" className='buttonbg' onClick={logout}>
                Logout
            </Button>
        </Card>
    );
};

export default LogoutCard;