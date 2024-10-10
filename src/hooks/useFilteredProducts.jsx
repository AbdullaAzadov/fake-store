import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function useFilteredProducts(products) {
    const [params] = useSearchParams();
    const query = params.get("search")?.trim();
    const category = params.get("category");
    const sort = params.get("sort");
    const order = params.get("order");

    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        function filterCategory(items) {
            if (category === "all") return items;
            if (!items.map((item) => item.category).includes(category))
                return items;
            return items.filter((item) => item.category === category);
        }

        function filterQuery(items) {
            if (!query) return items;
            return items.filter(
                (item) =>
                    item.title.toLowerCase().includes(query.toLowerCase()) ||
                    item.description.toLowerCase().includes(query.toLowerCase())
            );
        }

        function filterSort(items) {
            const isAsc = order === "asc";
            const compareNum = (a, b) => (isAsc ? a - b : b - a);
            const compareStr = (a, b) => {
                if (isAsc) return a > b ? -1 : a === b ? 0 : 1;
                else return a > b ? 1 : a === b ? 0 : -1;
            };

            switch (sort) {
                case "name":
                    return items.sort((p, n) =>
                        compareStr(p.title.toLowerCase(), n.title.toLowerCase())
                    );
                case "price":
                    return items.sort((p, n) => compareNum(p.price, n.price));

                default:
                    return items;
            }
        }

        let filtered = products;
        filtered = filterCategory(filtered);
        filtered = filterQuery(filtered);
        filtered = filterSort(filtered);
        setFilteredProducts(filtered);
    }, [query, category, sort, order, products]);

    return filteredProducts;
}
