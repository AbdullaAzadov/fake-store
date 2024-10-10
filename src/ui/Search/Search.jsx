import { useState } from "react";
import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export default function Search({ placeholder }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("search") ?? "");

    function handleOnChangeSearch(e) {
        e.preventDefault();
        searchParams.set("search", query);
        setSearchParams(searchParams);
    }

    return (
        <form className={style.searchbar} onSubmit={handleOnChangeSearch}>
            <input
                type="text"
                className={style.search}
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <FaSearch onClick={handleOnChangeSearch} />
        </form>
    );
}
