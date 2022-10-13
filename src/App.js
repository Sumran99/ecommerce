import * as React from "react";
import Product from "../src/components/Product";
import { Box, Grid } from "@mui/material";
import axios from "axios";

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/`)
      .then((res) => {
        setProducts(res.data.product);
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, sm: 4, md: 3, lg: 5 }}
        columns={{ xs: 4, sm: 12, md: 12 , lg: 12}}
        justifyContent="center"
      >
        {products?.map((product) => (
          <Grid item xs={2} sm={4} md={3} lg={2} key={product.name}>
            <Product
              name={product.name}
              category={product.category}
              price={product.price}
              desc={product.description}
              stock={product.stock}
              image_url={product.image_url}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
