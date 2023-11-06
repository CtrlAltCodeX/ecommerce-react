// Home.js
import React from 'react';

const ProductPage = () => {
    return <div class="container my-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Category</a></li>
                <li class="breadcrumb-item active" aria-current="page">Product Name</li>
            </ol>
        </nav>
        <div class="row">
            <div class="col-md-6">
                <img src="/images/products/1.png" alt="Product Image" class="img-fluid" />
            </div>
            <div class="col-md-6">
                <h2>Product Name</h2>
                <p class="text-muted">Category</p>
                <p>Description of the product goes here.</p>
                <h4>$99.99</h4>
                <button class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>;
};

export default ProductPage;
