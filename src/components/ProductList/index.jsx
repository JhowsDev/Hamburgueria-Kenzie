import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss";

export const ProductList = ({ productList, cartList, addCart }) => {
   return (
      <ul className={styles.container}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} cartList={cartList} addCart={addCart}/>
         ))}
      </ul>
   );
};
