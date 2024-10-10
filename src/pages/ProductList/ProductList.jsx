import style from "./ProductList.module.css";
import { useEffect, useState } from "react";

import { fetchAllProducts } from "../../services/apiProducts";
import ProductItem from "../../ui/ProductItem/ProductItem";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const data = await fetchAllProducts();
                setProducts(data);
            } catch (e) {
                setIsError(true);
                console.log(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

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
