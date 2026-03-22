import { useContext } from "react";
import { CartContext } from "./CartContext";

function useCart(){
    const cart = useContext(CartContext);

    if(!cart){
        throw new Error('useCart should be called inside CartContext');
    }

    return cart;
}

export {useCart};