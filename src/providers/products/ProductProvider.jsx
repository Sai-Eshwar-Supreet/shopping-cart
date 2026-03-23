import { useEffect, useState } from 'react';
import { ProductsContext } from './ProductsContext';

function ProductsProvider({children}){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);

    return <ProductsContext.Provider value={products}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsProvider;