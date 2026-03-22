import products from '../../data/products.json';
import { ProductsContext } from './ProductsContext';

function ProductsProvider({children}){
    return <ProductsContext.Provider value={products}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsProvider;