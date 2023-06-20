import * as React from "react"

const CartContext=React.createContext()

const CartState=({children})=>{
    const [Products,setProducts]=React.useState()
    return (
        <CartContext.Provider value={{Products,setProducts}} >
            {children}
        </CartContext.Provider>
    )

}

export {CartContext,CartState}