import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call or data loading
    setTimeout(() => {
      const newProducts = [
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
        // Add more products as needed...
      ];
      setProducts(newProducts);
      setLoading(false);
    }, 2000); // Simulated loading time
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newProducts = [
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
            ];

            if (products.length < 10) {
              setProducts((prevProducts) => [...prevProducts, ...newProducts]);
            }

          }
        });
      },
      { threshold: 1 }
    );

    // Start observing the last product card element
    const lastProductCard = document.querySelector('.product-card:last-child');
    if (lastProductCard) {
      observer.observe(lastProductCard);
    }

    return () => {
      if (lastProductCard) {
        observer.unobserve(lastProductCard);
      }
    };
  }, [products]);

  return (
    <div className='products d-grid'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ProductListingPage;
