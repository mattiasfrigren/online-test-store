import { createContext, useState } from "react";

export const CartContext = createContext();

export default({children}) =>{
    const [cart, setCart] =useState([]);

    function addToCart(item){
        setCart([...cart, item]);
        
    }
    function getCart(){
        return cart;
    }

    return(
    <>
    <CartContext.Provider
    value={{
        cart,
        setCart,
        addToCart,
        getCart,
    }
    }
    >
        {children}
    </CartContext.Provider>
    </>
    );

}