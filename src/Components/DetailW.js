import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import currencyFormatter from 'currency-formatter';

function DetailW(){

    const {id} = useParams();

    const dispatch = useDispatch();

    const{product} = useSelector(state => state.ProductsReducerW)


    useEffect(() =>{
        dispatch({type: 'PRODUCT', id:id})
    },[id])


    const [quantity, setQuantity] = useState(1);

    const decQuantity =() =>{
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <>

        <div className="container mt-5">
            <div className="row">
            <div className="col-md-12 mx-auto">
                        <div className="row">
                            <div className="col-md-6 mb-4" key={product.id}>
                                <img src={`/img/${product.image}`} alt="product"
                                    className="detailMImg" />
                            </div>

                            <div className="col-md-6 detail_data">

                                <h3 className="text-muted mb-4">
                                    <strong>
                                    {product.name}
                                    </strong>
                                    
                                </h3>

                                <h5 className="mb-4 detail_per">
                                    <strong>
                                        NOW 40% OFF!
                                    </strong>
                                </h5>



                                <div className="d-flex flex-row mb-4 mt-4">
                                    <div className="detail_price">
                                        {currencyFormatter.format(product.price, {code: 'USD'})}
                                    </div>
                                    
                                    <div className="ml-4 detail_totalPrice">
                                        {currencyFormatter.format(product.discountPrice,{code: 'USD'})}
                                    </div>
                                </div>
                                <p className="detail_qty">QUANTITY</p>
                                <div className="d-flex flex-row mb-4 mt-4">


                                    <div className="dec">
                                        <AiFillMinusCircle 
                                        onClick={decQuantity}/>
                                    </div>
                                    <div className="quantity">{quantity}</div>

                                    <div className="inc">
                                        <AiFillPlusCircle 
                                        onClick={() => setQuantity(quantity + 1)}/>
                                    </div>
                                    <button className="btn btn-warning ml-auto btn-block"
                                    onClick={() => dispatch({type: 'ADD_TO_CART', 
                                    payload:{product,quantity}})}>
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-md-6" key={product.id}>
                        <h5 className="desc">
                           DESCRIPTION
                        </h5>
                        <p className="mb-4">{product.description}</p>

                        <h5>FIT</h5>
                        <p>{product.fit}</p>

                        <h5>MATERIAL - CARE</h5>
                        <p>{product.care}</p>
                    </div>

                </div>
            </div>
        


        </>
    )
}

export default DetailW