import { useEffect, useState } from "react";
import icon from "../../assets/hamburguer-icon.svg"
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsAPI } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

export const HomePage = () => {

   const cartSaves = JSON.parse(localStorage.getItem("@hamburgueria-Kenzie:cart-List"))

   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(cartSaves ? cartSaves : []);
   const [cartLength, setCartLength] = useState(0)
   const [open, setOpen] = useState(false)

   useEffect( () => {
         const productListReturn = async () => {
            const { data } = await productsAPI.get("/products")
            setProductList(data)
         }
         productListReturn()
      }, []
   )

   useEffect( () => {
         setCartLength(cartList.length)
         localStorage.setItem("@hamburgueria-Kenzie:cart-List",JSON.stringify(cartList))
      }, [cartList]
   )

   const notifySecess = () => {
      toast.success("Produto Adicionado no carrinho !!", {
         position:"top-right",
         autoClose: 3000,
      })
   }

   const notifyError = () => {
      toast.warning("Produto Produto já existe no carrinho !!", {
         position: "top-right",
         autoClose: 3000,
      })
   }
   
   const addCart = (currProduct) => {
      const RepeatedProduct = cartList.find( prod => prod === currProduct)

      if(!RepeatedProduct) {
         setCartList([...cartList, currProduct])
         notifySecess()
      } else {
         notifyError()
      }
   }

   const removeCart = (currProduct) => {
      const newList = cartList.filter(product => product !== currProduct)

      setCartList(newList)
   }

   const removeAllCart = () => {
      setCartList([])
   }

   return (
      <>
         <Helmet>
            <title>Hamburgueria Kenzie</title>
            <link rel="shortcut icon" href={icon} />
         </Helmet>
         <Header setOpen={setOpen} cartLength={cartLength}/>
         <main>
            <ProductList productList={productList} cartList={cartList} addCart={addCart}/>
            {open ? <CartModal cartList={cartList} setOpen={setOpen} removeCart={removeCart} removeAllCart= {removeAllCart}/> : null}
            <ToastContainer />
         </main>
      </>
   );
};
