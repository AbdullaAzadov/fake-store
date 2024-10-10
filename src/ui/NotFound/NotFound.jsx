import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { TbError404 } from "react-icons/tb";

import style from "./NotFound.module.css";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";

export default function NotFound({ causer = "404" }) {
    switch (causer) {
        case "404":
            return (
                <main className={style.wrapper}>
                    <TbError404 />
                    <h1>Страница не найдена</h1>
                </main>
            );

        case "search":
            return (
                <main className={style.wrapper}>
                    <LuSearchX />
                    <h1>По такому запросу ничего не найдено</h1>
                </main>
            );

        case "filter":
            return (
                <main className={style.wrapper}>
                    <FaFilterCircleXmark />
                    <h1>По вашему запросу ничего не найдено</h1>
                </main>
            );

        default:
            return (
                <main className={style.wrapper}>
                    <MdOutlineReportGmailerrorred />
                    <h1>Что то пошло не так</h1>
                </main>
            );
    }
}
