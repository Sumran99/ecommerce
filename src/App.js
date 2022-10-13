import * as React from "react";
import { Grid } from "@mui/material";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import axios from "axios";
import Cart from "./components/Cart";
import { Link } from "react-router-dom";

function App() {

  /**********************************************************/

  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const [cartItems, setCartItems] = React.useState(0);

  /**********************************************************/


  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/`)
      .then((res) => {
        setProducts(res.data.product);
        setFilteredProducts(res.data.product);
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  }, []);

  React.useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput]);

  /**********************************************************/

  return (
    <>
      <Link to="/cart">{Cart}</Link>
      <Grid>
        <Grid item>
          <Navbar setSearchInput={setSearchInput} cartItems={cartItems} />
        </Grid>
        <Grid item>
          <ProductList
            filteredProducts={filteredProducts}
            setCartItems={setCartItems}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
