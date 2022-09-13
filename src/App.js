import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout } from './components';

const App = function() {
    // const current_cart = commerce.cart;
    // console.log(current_cart);

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
        console.log('this works')
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);



    function defined(thing) {
        if (Object.keys(thing).length === 0) {
            return "empty"
            // console.log(thing)
        }
        else return thing
    }
  

    let numba = defined(cart);
    // console.log(defined(cart.total_items))
    console.log(numba)
    // console.log(cart)

    function notFalse(thingy) {

    }

    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            <Products products={products} onAddToCart={handleAddToCart} />
        </div>
    );
};

export default App
