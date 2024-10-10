import { fetchProducts } from "../../services/apiProducts";
import { useFetchItems } from "../../hooks/useFetchItems";

import style from "./ProductList.module.css";
import ProductItem from "../../ui/ProductItem/ProductItem";
import Loader from "../../ui/Loader/Loader";
import NotFound from "../../ui/NotFound/NotFound";
import Search from "../../ui/Search/Search";
import Categories from "../../ui/Categories/Categories";
import Sort from "../../ui/Sort/Sort";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";

export default function ProductList() {
    const { items, isLoading, Error } = useFetchItems(fetchProducts);
    const products = useFilteredProducts(items);

    if (isLoading && !Error) return <Loader type="products" />;
    if (Error) return <NotFound causer="network" />;
    return (
        <main className={style.wrapper}>
            <nav className={style.filters}>
                <Search placeholder="Найти..." />
                <Categories />
            </nav>
            <Sort />

            <ul className={style.products}>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </main>
    );
}
