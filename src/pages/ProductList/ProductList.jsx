import { useEffect, useState } from "react";

import { fetchProducts } from "../../services/apiProducts";
import { useFetchItems } from "../../hooks/useFetchItems";

import style from "./ProductList.module.css";
import ProductItem from "../../ui/ProductItem/ProductItem";
import Loader from "../../ui/Loader/Loader";
import NotFound from "../../ui/NotFound/NotFound";
import Search from "../../ui/Search/Search";
import Categories from "../../ui/Categories/Categories";

export default function ProductList() {
    const {
        items: products,
        isLoading,
        isError,
    } = useFetchItems(fetchProducts);

    if (isLoading && !isError) return <Loader type="products" />;
    if (isError) return <NotFound causer="network" />;
    return (
        <main className={style.wrapper}>
            <nav className={style.filters}>
                <Search placeholder="Найти..." />
                <Categories />
            </nav>

            <ul className={style.products}>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </main>
    );
}
