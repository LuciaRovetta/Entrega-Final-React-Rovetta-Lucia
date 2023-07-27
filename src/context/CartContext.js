import React, { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => { return useContext(CartContext) };

export const CartProvider = ({ children }) => {

  const [ cartListProducts, setCartListProducts ] = useState([])

  const addProductToCart = (product, count) => {
    
    if(isInCart(product.id)) {

      const productInCart = findProductById(product.id)

      productInCart.count = productInCart.count + count
      const arrayUpdate = [...cartListProducts]
      setCartListProducts(arrayUpdate)
    } else {
      product['count'] = count
      setCartListProducts([...cartListProducts, product])
    }

  }

  const findProductById = (id) => {
    const productInCart = cartListProducts.find(product => product.id === id)
    console.log(productInCart)
    return productInCart
  }

  const deleteProductById = (id) => {
    setCartListProducts(cartListProducts.filter(product => product.id !== id))
  }

  const clearCart = () => {
    setCartListProducts([])
  }

  const isInCart = (id) => {
    return cartListProducts.some(product => product.id === id)
  }

  const totalCartAmount = () => {
    const total = cartListProducts.reduce((acc, product) => acc + product.count * product.precio, 0)
    return total
  }

  const totalItemsInCart = () => {
    return cartListProducts.reduce((acc, product) => acc += product.count, 0 )
  }


  return (
    <CartContext.Provider
      value={{
        cartListProducts,
        addProductToCart,
        deleteProductById,
        clearCart,
        totalItemsInCart,
        totalCartAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
