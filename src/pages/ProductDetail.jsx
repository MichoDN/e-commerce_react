import React, { useEffect, useState } from 'react';
import { Button, Carousel, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCards from '../components/ProductCards'
import { addProductToCartThunk } from '../store/slices/cartProducts.slice';

const ProductDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const products = useSelector(state => state.products)

    // Product showed in details
    const selectedProduct = products?.filter(product => product.id == id)

    // Product showed in details
    const similarList = products?.filter(product => product.category.id == selectedProduct[0]?.category.id)
    const [quantity, setQuantity] = useState(1)

    const changeQuantity = value => {
        //if value > 0: increment; else if value < 0 AND quantity > 1: decrement; 
        if (value > 0) setQuantity(quantity + 1)
        else if (value < 0 && quantity > 1) setQuantity(quantity - 1)
    }

    //Add product to cart with quantity and productId
    const addToCart = () => {
        const inCartProduct = {
            id: id,
            quantity: quantity
        }
        dispatch(addProductToCartThunk(inCartProduct))
    }

    //When page changes then restart quantity
    useEffect(() => setQuantity(1), [id])

    //Bootstrap
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => setIndex(selectedIndex)
    return (
        <div className='productDetailComp_container'>
            <div className='details_container'>
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    variant="dark"
                    slide={false}
                >
                    {
                        selectedProduct[0]?.productImgs.map(img => (
                            <Carousel.Item key={img}>
                                <div className='carousel_displayer'>
                                    <div className='carousel_backgound'>
                                        <img
                                            className="carousel_img"
                                            src={img}
                                            alt="First slide"
                                        />

                                    </div>
                                </div>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>

                <div className='info_container'>

                    <center><h4 className='myTitle'><b>{selectedProduct[0]?.title}</b></h4></center>

                    <p>{selectedProduct[0]?.description}</p>

                    <div className='price_n_quantity'>
                        <span>Price: <br /><b>$ {selectedProduct[0]?.price}</b></span>

                        {/* Quantity */}
                        <div>
                            <span>Quantity</span>

                            <div className='quantity_container'>
                                <button onClick={() => changeQuantity(-1)}>-</button>
                                <input
                                    type="text"
                                    value={quantity}
                                    disabled
                                />
                                <button onClick={() => changeQuantity(1)}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='info_button_container'>
                        <Button
                            className='detail_addToCar_button unselectable buttonbg'
                            variant="info"
                            onClick={() => addToCart()}
                        >
                            <span><b>Add to cart</b></span> 
                        </Button>
                    </div>
                </div>
            </div>
            <div className='centerer'>
                <h1 className='myTitle'>Recomended</h1>
                <div className='similar_container '>
                    <ProductCards products={similarList} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;