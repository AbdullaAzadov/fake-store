import style from "./ProductItem.module.css";
import { truncateText } from "../../utils/textTransfrom";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export default function ProductItem({ product }) {
    const { price, image } = product;
    const width = useWindowWidth();
    const title = truncateText(product.title, width >= 768 ? 4 : 10);
    const desc = truncateText(product.description, width >= 768 ? 10 : 24);

    return (
        <li className={style.product}>
            <div className="img-container">
                <img src={image} alt={title} />
            </div>
            <div className="text-container">
                <p className="text-header">
                    <span className="title">{title}</span>
                    <span className="price">{price}$</span>
                </p>
                <p className="text-body">{desc}</p>
            </div>
        </li>
    );
}
