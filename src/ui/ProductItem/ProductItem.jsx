import style from "./ProductItem.module.css";
import { truncateText } from "../../utils/textTransfrom";

export default function ProductItem({ product }) {
    const { price, image } = product;
    const title = truncateText(product.title, 4);
    const description = truncateText(product.description, 11);

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
            </div>
            <p className="text-body">{description}</p>
        </li>
    );
}
