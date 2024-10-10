import style from "./Categories.module.css";
import { fetchCategories } from "../../services/apiProducts";
import { useFetchItems } from "../../hooks/useFetchItems";

export default function Categories() {
    const {
        items: categories,
        isLoading,
        isError,
    } = useFetchItems(fetchCategories);

    if (isLoading || isError) return null;

    return (
        <select className={style.select}>
            <option value="all">Все категории</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
}
