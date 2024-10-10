import style from "./Loader.module.css";

export default function Loader({ type = "products" }) {
    return (
        <main className={style.loader}>
            {type === "products" && (
                <ul className={style[type]}>
                    {[...Array(10).keys()].map((item) => (
                        <li key={item} className={style.product}></li>
                    ))}
                </ul>
            )}
        </main>
    );
}
