import { useEffect, useState } from "react";
import style from "./ProductList.module.css";

import useFetchProducts from "../../hooks/useFetchProducts";
import ProductItem from "../../ui/ProductItem/ProductItem";
import Loader from "../../ui/Loader/Loader";

export default function ProductList() {
    const { products, isLoading, isError } = useFetchProducts();

    if (isLoading && !isError) return <Loader type="products" />;

    return (
        <main className={style.wrapper}>
            <ul className={style.products}>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </main>
    );
}
