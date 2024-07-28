import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss";

export const CartItemCard = ({ product, removeCart }) => {
   return (
      <li className={styles.container}>
         <div>
            <img src={product.img} alt={product.name} />
            <div className={styles.disc}>
            <h3>{product.name}</h3>
            <span>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
            </div>
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => removeCart(product)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};