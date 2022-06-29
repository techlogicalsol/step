import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import currencyFormatter from 'currency-formatter';

function Cart() {

    const { products, totalQuantities, totalPrice } =
        useSelector(state => state.CartReducer);

    const dispatch = useDispatch();

    return (
        <>
            <div className="container mt-5">
                <h1>Your cart</h1>

                {products.length > 0 ? <>

                    <div className="row">
                        
                    <div className="col-md-9 mx-auto mt-5 cartTitle">
                        <div className="row">
                            <div className="col-md-2 mb-3 mt-2 cartHeading">
                                Picture
                            </div>
                            <div className="col-md-2 mb-3 mt-2 cartHeading">
                                Item
                            </div>

                            <div className="col-md-2 mb-3 mt-2 cartHeading">
                                Price
                            </div>

                            <div className="col-md-2 mb-3 mt-2 cartHeading">
                                + / -
                            </div>

                            <div className="col-md-2 mb-3 mt-2 cartHeading">
                                Remove
                            </div>

                            <div className="col-md-2 mb-3 mt-2 cartHeading">
                                Total Price
                            </div>
                        </div>
                        {products.map(product =>(
                        <div className="row">
                            <div className="col-md-2 cartData">
                                <img src={`/img/${product.image}`} alt="product"
                                className="cartPhoto" />
                            </div>

                            <div className="col-md-2 cartData">
                                {product.name}
                            </div>

                            <div className="col-md-2 cartData">
                                {currencyFormatter.format(product.discountPrice, {code: 'USD'})}
                            </div>

                            <div className="col-md-2 cartData">
                                <span className="dec">
                                    <AiFillMinusCircle 
                                    onClick={() => dispatch({type: 'DEC',
                                    payload:product.id})}/>
                                </span>

                                <span className="quantity">
                                    {product.quantity}
                                </span>

                                <span className="inc">
                                    <AiFillPlusCircle 
                                    onClick={() => dispatch({type: 'INC',
                                    payload:product.id})}/>
                                </span>
                            </div>

                            <div className="col-md-2 cartData">
                                <RiDeleteBin5Fill className="remove"
                                onClick={() => dispatch({type: 'REMOVE',
                                payload:product.id})}/>
                            </div>

                            <div className="col-md-2 cartData">
                                {currencyFormatter.format(product.discountPrice * product.quantity, {code: 'USD'})}
                            </div>
                        </div>
                        ))}
                    </div>
             
                        
                        



                        <div className="col-md-3 mt-5 summary">
                            <h2>Summary</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="total_item">Total Item</p>
                                </div>

                                <div className="col-md-6">
                                    <p>{totalQuantities}</p>
                                </div>

                                <div className="col-md-6 total_price">
                                    <p>Total Price</p>
                                </div>

                                <div className="col-md-6">
                                    <p>{currencyFormatter.format(totalPrice,{code: 'USD'})}</p>
                                </div>
                            </div>
                            <button className="btn btn-warning btn-block">CHECKOUT</button>
                        </div>
                    </div>

                </> : 'Your cart is currently empty'}

            
            </div>
            

        </>
    )
}

export default Cart