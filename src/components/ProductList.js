import * as React from "react";
import Product from "./Product";
import { Box, Grid } from "@mui/material";

function ProductList(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        spacing={{ xs: 2, sm: 4, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {props.filteredProducts?.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product.name}>
            <Product
              name={product.name}
              category={product.category}
              price={product.price}
              desc={product.description}
              stock={product.stock}
              image_url={product.image_url}
              setCartItems={props.setCartItems}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
