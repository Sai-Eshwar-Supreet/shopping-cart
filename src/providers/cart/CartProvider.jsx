import { useState } from 'react';
import { CartContext } from './CartContext';

function CartProvider({children}){

    const [cart, setCart] = useState({});

    function updateCart(id, count){
        if(!Number.isInteger(count)){
            return;
        }

        count = Math.max(1, Math.min(100, count));

        setCart(prev => ({...prev, [id]: count}));
    }

    function removeFromCart(id){
        if(cart[id] === undefined) return;

        setCart(prev => {
            const next = {...prev};

            delete next[id];

            return next;
        });
    }

    function getCartItems(){
        return {...cart};
    }

    function getCount(id){
        return cart[id] ?? 0;
    }
    function getTotalCount(){
        return Object.values(cart).reduce((prev, current) => prev + current, 0)
    }

    function isInCart(id){
        return Number.isInteger(cart[id]);
    }

    return <CartContext.Provider value={{updateCart, removeFromCart, getCartItems, getTotalCount, getCount, isInCart}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;