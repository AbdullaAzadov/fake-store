import { useState, useEffect } from "react";
import { fetchAllProducts } from "../services/apiProducts";

function useFetchProducts() {
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

    return { products, isLoading, isError };
}

export default useFetchProducts;
