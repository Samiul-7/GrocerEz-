import { createContext, useEffect, useState } from "react";
import {All_products, food_list} from "../assets/image";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const[cartItems,setCartItems]= useState({});
    const addToCart= async(itemId)=>{
        if(!cartItems[itemId]){
          setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
          }
    }
    const removeFromCart = async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    useEffect(()=>{
        console.log(cartItems);

    },[cartItems]

    )


    const contextValue = {
       All_products,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart

    }

    return(
        <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )

    }


export default StoreContextProvider;