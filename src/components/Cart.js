import * as React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import {
  AddCircleOutline as AddCircleOutlineIcon,
  RemoveCircleOutline as RemoveCircleOutlineIcon,
} from "@mui/icons-material";

import { useLocation } from "react-router-dom";

function Cart(props) {
  const [price, setPrice] = React.useState(200);
  const [quantity, setQuantity] = React.useState(1);
  const location = useLocation();

  const handleRmoveQuantity = () => {
    if (quantity > 0) {
      setQuantity((pre) => pre - 1);
      setPrice((pre) => pre - 200);
    }
  };
  const handleAddQuantity = () => {
    if (quantity < 20) {
      setQuantity((pre) => pre + 1);
      setPrice((pre) => pre + 200);
    }
  };
  console.log(location.state);
  return (
    <Grid>
      <Card sx={{ maxWidth: 380, display: "flex" }}>
        <Grid>
          <CardHeader title="Product" />
          <CardMedia
            component="img"
            height="100"
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
            alt="product"
            sx={{ width: "200px", objectFit: "fill" }}
          />
        </Grid>
        <Grid sx={{ pl: "2rem" }}>
          <Typography variant="h5" sx={{ pt: "2rem" }}>
            price: 200$
          </Typography>
          <Typography>Quantity:</Typography>
          <Grid sx={{ display: "flex" }}>
            <IconButton onClick={handleRmoveQuantity}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <Typography variant="h4">{quantity}</Typography>
            <IconButton onClick={handleAddQuantity} >
              <AddCircleOutlineIcon />
            </IconButton>
          </Grid>
          <Typography>Total Price: {price}$</Typography>
        </Grid>
      </Card>
      <Card sx={{ maxWidth: 380, display: "flex", mt: "0.5rem" }}>
        <CardHeader title="Total" subheader={price + "$"} />
      </Card>
    </Grid>
  );
}
export default Cart;
