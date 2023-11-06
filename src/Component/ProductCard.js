import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
    return <div className="my-4 product-card">
        <Link to="/product-page" >
            <div className="position-relative text-center">
                <img src={props.product.img} className="product-image" />
                <div className="action-icons position-absolute d-flex">
                    <img src="/images/products/cart.png" />
                    <img src="/images/products/like.png" />
                    <img src="/images/products/share.png" />
                </div>
            </div>
        </Link>

        <div className="text-center">
            <p className="mb-2">{props.product.name}</p>
            <span className="fw-bold price">Rs.{props.product.discounted_price}</span><del className="text-danger">{props.product.price}</del>

            <div className="d-flex sizes justify-content-center mt-2">
                {
                    props.product.sizes.map((size) => {
                        return (
                            <span>{size}</span>
                        )
                    })
                }
            </div>
        </div>
    </div>
}

export default ProductCard;