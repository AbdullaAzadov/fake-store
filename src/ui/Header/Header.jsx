import style from "./Header.module.css";

import Logo from "../Logo/Logo";

export default function Header() {
    return (
        <header className={style["header-wrapper"]}>
            <div className={style.header}>
                <Logo />
            </div>
        </header>
    );
}
