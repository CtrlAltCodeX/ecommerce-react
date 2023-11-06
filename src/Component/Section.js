
import NewsLetter from "./NewsLetter";
// import ProductCard from "./ProductCard";
import React, { Suspense, lazy } from 'react';
import ProductListingPage from "./ProductListingPage";

const ProductCard = lazy(() => import('./ProductCard'));

function Section() {

    const categories = [
        {
            id: 1,
            content: 'Men`s T-Shirt',
            img: '/images/slider/1.png'
        },
        {
            id: 2,
            content: 'Women`s Wear',
            img: '/images/slider/2.png'
        },
        {
            id: 3,
            content: 'Winter Collection',
            img: '/images/slider/3.png'
        },
        {
            id: 4,
            content: 'Hooded T-Shirt',
            img: '/images/slider/4.png'
        },
        {
            id: 5,
            content: 'Polo Nect T-Shirt',
            img: '/images/slider/5.png'
        },
        {
            id: 6,
            content: 'Full Sleeves T-Shirt',
            img: '/images/slider/6.png'
        },
    ];

    const trendingProducts = [
        {
            id: 1,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/1.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 2,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/2.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 3,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/3.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 4,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/4.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 5,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/5.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 6,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/6.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 7,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/7.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 8,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/7.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
    ];

    const featuredProducts = [
        {
            id: 1,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/1.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 2,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/2.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 3,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/3.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 4,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/4.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 5,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/5.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 6,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/6.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 7,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/7.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
        {
            id: 8,
            name: 'Men Henley Neck Full Sleeve Red Wine',
            img: '/images/products/7.png',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            price: 1299,
            discounted_price: 399,
        },
    ];

    const categoriesProducts = [
        {
            id: 1,
            name: 'Streetwear Collections',
            img: '/images/products/8.png',
        },
        {
            id: 2,
            name: 'Striped T-Shirts',
            img: '/images/products/9.png',
        },
        {
            id: 3,
            name: 'Round Neck T-Shirts',
            img: '/images/products/10.png',
        },
        {
            id: 4,
            name: 'Printed T-Shirts',
            img: '/images/products/11.png',
        },
        {
            id: 5,
            name: 'Oversized T-Shirts',
            img: '/images/products/12.png',
        },
        {
            id: 6,
            name: 'Half Sleeves T-Shirts',
            img: '/images/products/13.png',
        },
    ];

    return <div >
        <img src='/images/image 1.png' alt="slider image" width="100%" />

        <div className="container">

            <div className="categories d-flex justify-content-center">
                {
                    categories.map((value, index) => {
                        return (
                            <div className="text-center">
                                <img src={value.img} />
                                <p>{value.content}</p>
                            </div>
                        );
                    })
                }
            </div>

            <div>
                <div className="categories d-flex justify-content-center">
                    <img src="/images/ads/1.png" width="100%" />
                    <img src="/images/ads/2.png" width="100%" />
                </div>

                <div className="categories d-flex justify-content-center">
                    <img src="/images/ads/3.png" width="100%" />
                    <img src="/images/ads/4.png" width="100%" />
                    <img src="/images/ads/5.png" width="100%" />
                </div>
            </div>

            <h2 className="m-5 text-center fw-bold">Trending T-Shirts</h2>

            <ProductListingPage />

            <h2 className="m-5 text-center fw-bold">Featured Products</h2>

            <ProductListingPage />

            <img src='/images/banner2.png' alt="slider image" width="100%" ></img>

            <h2 className="m-5 text-center fw-bold">New Products</h2>

            <ProductListingPage />

            <h2 className="m-5 text-center fw-bold">Best Selling Products</h2>

            <ProductListingPage />

            <div className="d-grid category-products">
                {
                    categoriesProducts.map((value, index) => {
                        return (
                            <div className="my-4">
                                <div className="position-relative">
                                    <img src={value.img} className="product-image" />

                                    <div className="product-cap position-absolute text-light fw-bold w-100 text-center">
                                        <span>StreetWear Collection</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <img src='/images/banner3.png' alt="slider image" width="100%" />

            <div className="sale d-grid">
                <div className="first text-center position-relative">
                    <img src='/images/diamond 1.png' className="position-absolute" />
                    <div className="position-absolute w-100">
                        <h2 style={{ fontSize: "36px" }}>Hurry Up!</h2>
                        <h1 style={{ fontSize: "84px" }}>85% OFF </h1>
                        <h3 style={{ fontSize: "36px" }}>Sale</h3>
                        <button className="btn btn-outline-light mt-3" style={{ width: "170px" }}>Shop Now</button>
                    </div>
                </div>

                <div className="second text-center position-relative">
                    <img src='/images/discount 1.png' className="position-absolute" />
                    <div className="position-absolute w-100">
                        <h2 style={{ fontSize: "36px" }}>Hurry Up!</h2>
                        <h1 style={{ fontSize: "84px" }}>85% OFF </h1>
                        <h3 style={{ fontSize: "36px" }}>Sale</h3>
                        <button className="btn btn-outline-light mt-3" style={{ width: "170px" }}>Shop Now</button>
                    </div>
                </div>
            </div>

            <div className="features d-grid">
                <img src='/images/features/1.png' />

                <img src='/images/features/2.png' />

                <img src='/images/features/3.png' />

                <img src='/images/features/4.png' />
            </div>

            <NewsLetter />
        </div>

        <hr />

    </div>
}

export default Section;