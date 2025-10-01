import React, { useEffect, useContext } from "react";

import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductsCard/ProductsCard";
import Loading from "../Loading/Loading";
import AppContext from "../../Context/AppContext";

function Products(){

    const { products, setProducts, loading, setLoading } = useContext(AppContext);

    useEffect(() => {

        fetchProducts("iphone").then((reponse) => {
            setProducts(reponse);
            setLoading(false);
        });
    }, []);


    return(

        (loading && <Loading /> ) ||(
            <section className="products container"> 
                {products.map((product) => <ProductCard key={product.id} data={product} />)}
            </section>
        )
    );
}

export default Products;
