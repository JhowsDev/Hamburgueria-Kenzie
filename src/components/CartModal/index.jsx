import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./styles.module.scss";

export const CartModal = ({ cartList, setOpen, removeCart, removeAllCart }) => {

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={styles.container} onClick={(e) => {
         if(e.target.className === styles.container) {
            setOpen(false)
         }
      }}>
         <div role="dialog" className={styles.modal}>
            <div className={styles.title__container}>
               <h2>Carrinho de compras</h2>
               <button aria-label="close" title="Fechar">
                  <MdClose size={21}  onClick={() => setOpen(false)}/>
               </button>
            </div>
            <div className={styles.favorite__container}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product}  removeCart={removeCart}/>
                     ))}
               </ul>
            </div>
            <div className={styles.footer__container}>
               <div>
                  <h3>Total</h3>
                  <span>{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={() => removeAllCart()}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
