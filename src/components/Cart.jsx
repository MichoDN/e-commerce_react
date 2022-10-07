import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseCart } from '../store/slices/cartProducts.slice';
import InCartProducts from './InCartProducts';

const Cart = ({ show, handleClose }) => {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cartProducts)
    const calcTotal = () => {
        let totalVar = 0
        //take all prices from cart and add them to totalVar
        cartProducts.map(product => totalVar += (parseInt(product.price) *  parseInt(product.productsInCart.quantity)))
        return totalVar
    }

    
    return (
        <Offcanvas show={show} onHide={handleClose} placement={'end'} name={'end'} 
        
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className='cart_body'>
                <div className='cart_products_list'>
                    <center><h2>Products</h2></center>
                    {cartProducts.map(product => ( <InCartProducts key={product.id} product={product} /> ))}
                </div>
                <div className='total'>
                    <div>
                        <h4>Total</h4><span>${calcTotal()}</span>
                    </div>
                    <button onClick={() => dispatch(purchaseCart())}>Check Out</button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Cart;