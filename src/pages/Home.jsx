import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axiosPng from '../assets/axios.png'
import reduxPng from '../assets/redux.png'
import reactjsPng from '../assets/reactjs.png'
import { useSelector } from 'react-redux';

const Home = () => {
    const navigate = useNavigate()
    const isLogged = useSelector(state => state.isLogged)
    return (
        <div className='home_comp-container'>
            <div className='home_info'>
                <center><h2>Welcome {isLogged ? (localStorage.getItem("userName")) : ( <>Visitor</> )}</h2></center>
                <p>
                    Este es un e-commerce parte de mi portafolio y muestra de mis habilidades como desarrollador en
                    el cual he implementado por mi cuenta todas las funcionalidades necesarias para que sea un proyecto
                    totalmente funcional.
                </p>
                <p>
                    Sientete libre de explorar y probar tanto como quieras y si estás interezado en mi perfil,
                    te invito a comunicarte conmigo mediante mis redes sociales que estan al pie de la pagina
                </p>
            </div>
            <div className='tech_used'>
                <center><h2>Used in this proyect:</h2></center>
                <div>
                    <ul>
                        <li>React</li>
                        <li>Axios</li>
                        <li>redux</li>
                        <li>React Bootstrap</li>
                        <li>Bootswatch</li>
                        <li>React hook form</li>
                        <li>React Router Dom</li>
                    </ul>
                </div>
            </div>
            <div className='social_media'>
                <center><h2>Social Media</h2></center>
                <div><h2><b>Not yet. Coming soon.</b></h2></div>
            </div>
            <div className='goToPage'>
                <center><h2>Continue to page</h2></center>
                <Button className='buttonbg' onClick={() => navigate("/store")}> Continue </Button>
            </div>
        </div>
    );
};

export default Home;