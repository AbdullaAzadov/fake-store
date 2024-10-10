import { useState, useEffect } from "react";

export function useFetchItems(fetchFunction) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const data = await fetchFunction();
                setItems(data);
            } catch (e) {
                setIsError(true);
                console.log(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { items, isLoading, isError };
}
