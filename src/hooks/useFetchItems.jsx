import { useState, useEffect } from "react";

export function useFetchItems(fetchFunction) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const data = await fetchFunction();
                setItems(data);
            } catch (e) {
                setError(true);
                console.log(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { items, isLoading, Error };
}
