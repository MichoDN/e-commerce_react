import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const productCards = ({ products }) => {
    const navigate = useNavigate()

    return (
        <>
            {
                products?.map(product => (
                    <Card className='card zoom' key={product.id}>

                        <div
                            onClick={() => navigate(`/products/${product.id}`)}
                            className='card_image-container unselectable'
                        >
                            <Card.Img variant="top" className='card_image' src={product.productImgs[0]} />
                        </div>

                        <Card.Body className='background2'>
                            <Card.Title
                                className='unselectable card_tittle'
                                onClick={() => navigate(`/products/${product.id}`)}
                            >
                                {product.title}
                            </Card.Title>

                            <div className='buy_info'>
                                <Card.Text
                                    className='price_text unselectable'
                                    onClick={() => navigate(`/products/${product.id}`)}
                                >
                                    <b className='unselectable'>Price:</b> <br /> {product.price}
                                </Card.Text>

                                <Button
                                    className='see_more_button buttonbg'
                                    variant="info"
                                    onClick={() => navigate(`/products/${product.id}`)}
                                >
                                    <b>See more...</b>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            }
        </>
    );
};

export default productCards;