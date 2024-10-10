import { useSearchParams } from "react-router-dom";
import styles from "./Sort.module.css";

import { BsSortUp } from "react-icons/bs";
import { FaSort, FaSortUp } from "react-icons/fa6";

const sortList = [
    { name: "По названию", type: "name" },
    { name: "По цене", type: "price" },
];

export default function Sort() {
    const [params, setParams] = useSearchParams();
    const sort = { type: params.get("sort"), order: params.get("order") };

    function toggleOrder() {
        params.set("order", sort.order === "asc" ? "desc" : "asc");
        setParams(params);
    }

    function handleOnClick(value) {
        if (value === sort.type) {
            toggleOrder();
            return;
        }
        params.set("sort", value);
        params.set("order", "asc");
        setParams(params);
    }

    return (
        <ul className={styles.sortList}>
            <BsSortUp />

            {sortList.map((item, i) => (
                <li
                    onClick={() => handleOnClick(item.type)}
                    className={sort.type === item.type ? "active" : ""}
                    key={i}
                >
                    {item.name}
                    {sort.type !== item.type && (
                        <span>{<FaSort size={10} />}</span>
                    )}

                    {sort.type === item.type && (
                        <span className="active">
                            <FaSortUp
                                size={10}
                                className={sort.order === "desc" ? "down" : ""}
                            />
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
}
