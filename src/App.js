import * as React from "react";
import { Grid } from "@mui/material";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import axios from "axios";
import Cart from "./components/Cart";
import { Link } from "react-router-dom";

function App() {
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const [cartItems, setCartItems] = React.useState(0);
  const [cartList, setCartList] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/`)
      .then((res) => {
        setProducts(res.data.product);
        setFilteredProducts(res.data.product);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  React.useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput]);

  return (
      <Grid container>
        <Grid item>
          <Navbar
            setSearchInput={setSearchInput}
            cartItems={cartItems}
            cartList={cartList}
          />
        </Grid>
        <Grid item>
          <ProductList
            filteredProducts={filteredProducts}
            setCartItems={setCartItems}
            setCartList={setCartList}
            cartList={cartList}
          />
        </Grid>
      </Grid>
  );
}

export default App;
