import React from 'react';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import currencyFormatter from 'currency-formatter';


function NewArrival(){

    const {products} = useSelector(state => state.ProductsReducerA);

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                    <h1>
                            <strong>
                                New Arrival
                            </strong>
                        </h1>
                        <div className="row">
                            {products.map(product =>(
                                <div className="col-md-4 mb-4" key={product.id}>

                                    <div className="product_img">
                                    
                                    <NavLink to={`/detailA/${product.id}`}>
                                    <img src={`/img/${product.image}`} alt="product"
                                    className="menProductImg" />
                                    </NavLink>
                                    </div>

                                    
                                    <div className="card-body">
                                      <h6>  {product.name} </h6>

                                    <div className="card_data">
                                    <p className="price">
                                        {currencyFormatter.format(product.price, {code: 'USD'})}
                                    </p>

                                    <p id="card_data_discount">
                                        {product.discount}%
                                    </p>
                                    
                                    <div className="card_data_discount_price">
                                    <p>
                                    {currencyFormatter.format(product.discountPrice, {code: 'USD'})}
                                    </p> 
                                    </div> 
                                    </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewArrival