import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadProductsAsync } from "../redux/reducers/products/thunk";

const ProductsPage = () => {
    const {isLoading, products, errorMessage} = useSelector(state => state.products)

    useEffect(() => {
        dispatchEvent(loadProductsAsync());
    }, []);
    

    return(
        <div>
            <h1>List Product</h1>
            {isLoading && <h3>Loading ... </h3>}
            {errorMessage && <h3>{errorMessage}</h3>}
            {products && products.map((product) => 
                <h5 key={product.id}>
                    {product.title},
                    {product.price},
                    {product.category},
                    {product.description},
                    {product.image}</h5>)}
        </div>
    );
};

export default ProductsPage;