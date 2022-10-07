import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeProductFromCart } from '../store/slices/cartProducts.slice';

const InCartProducts = ({product}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className='InCartProducts-cont background' >
            <div>
                <div>
                    <span onClick={() => navigate(`/products/${product.id}`)} className="unselectable">{product.title}</span>
                </div>
                <button className='removeFromCart' onClick={() => dispatch(removeProductFromCart(product.id))}>X</button>
            </div>
            <div className='inCart_Quantity'>
                <span>{product.productsInCart.quantity}</span>
            </div>
            <span className='in_cart_price'>Price: ${product.price}</span>
        </div>
    );
};

export default InCartProducts;