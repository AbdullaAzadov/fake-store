import { Link } from "react-router-dom";
import style from "./Logo.module.css";

export default function Logo() {
    return (
        <span className={style.logo}>
            <Link to={"/"}>fake store</Link>
        </span>
    );
}
