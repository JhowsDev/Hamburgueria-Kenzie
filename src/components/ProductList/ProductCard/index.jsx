import styles from "./styles.module.scss";

export const ProductCard = ({ product, addCart }) => {
    return(
        <li className={styles.container}>
            <div className={styles.img}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.card__menu}>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span className={styles.price}>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addCart(product)}>Adicionar</button>
            </div>
        </li>
    );
};