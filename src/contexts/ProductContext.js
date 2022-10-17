import React from "react";

export const ProductContext = React.createContext({items: [0, ()=>{}], list:[[], ()=>{}]});

const ProductContextProvider = (props) => {
  const [cartItems, setCartItems] = React.useState(0);
  const [cartList, setCartList] = React.useState([]);

  return (
    <ProductContext.Provider
    value={{items: [cartItems, setCartItems], list: [cartList, setCartList]}}>
        {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;