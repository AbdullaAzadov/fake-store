import { useSearchParams } from "react-router-dom";
import style from "./Categories.module.css";

import { fetchCategories } from "../../services/apiProducts";
import { useFetchItems } from "../../hooks/useFetchItems";
import NotFound from "../NotFound/NotFound";
import { useEffect } from "react";

export default function Categories() {
    const [params, setParams] = useSearchParams();
    const {
        items: categories,
        isLoading,
        Error,
    } = useFetchItems(fetchCategories);

    useEffect(() => {
        params.set("category", "all");
        setParams(params);
    }, []);

    function handleOnChangeCategory(value) {
        params.set("category", value);
        setParams(params);
    }

    if (isLoading && !Error) return null;
    if (Error) return <NotFound causer="network" />;

    return (
        <select
            className={style.select}
            onChange={(e) => handleOnChangeCategory(e.target.value)}
        >
            <option value="all">Все категории</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
}
