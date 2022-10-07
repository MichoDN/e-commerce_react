import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const calcTotal = (array) => {
        // console.log (array)
        let all = 0
        array.map(numb =>  all += parseInt(numb))
        return all
    }
    const purchases = useSelector(state => state.purchases)
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    useEffect(() => { dispatch(getPurchasesThunk()) }, [])
    return (
        <div className='purchases_comp'>
            {purchases.map(purchase => {
                const date = new Date(purchase.createdAt)
                return (

                    <div className='purchase background2' key={purchase.cartId}>
                        <h4>{date.toLocaleDateString(undefined, options)}</h4>

                        {purchase.cart.products.map(product => (
                            <div className='product_purchased' key={product.id}>
                                <p onClick={() => navigate(`/products/${product.id}`)} className="unselectable"> <b>* {product.brand}:</b> {product.title} </p>
                                <div>
                                    <p>Quantity: {product.productsInCart.quantity} <br /> Price: {product.price} </p>
                                </div>
                            </div>
                        ))}
                        <div className='product_purchased'>
                            <p>total:</p>
                            <p>$ {calcTotal(purchase.cart.products.map(product => product.price * product.productsInCart.quantity))}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Purchases;