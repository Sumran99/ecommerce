import React, {useState, useContext, useEffect} from "react";
import {
  styled,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";

import {
  ExpandMore as ExpandMoreIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@mui/icons-material";

import {ProductContext} from "../contexts/ProductContext";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Product(props) {
  const [expanded, setExpanded] = React.useState(false);
  const {items} = useContext(ProductContext);
  const {list} = React.useContext(ProductContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCart = () => {
    // props.setCartItems((prev) => prev + 1);
    items.setCartItems((prev) => prev + 1);
    // props.setCartList(props.name);
    list.setCartList(props.name);
  };
  // const {cartItems, setCartItems} = items;
  console.log(items[1](()=> 1));
  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto", padding: "0.1rem" }} raised>
      <CardHeader title={props.name} subheader={props.category} />
      <CardMedia
        component="img"
        height="250"
        image={props.image_url}
        alt="Product"
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          Price: {props.price}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Available stock: {props.stock}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={handleCart}>
          <AddShoppingCartIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Product Description:</Typography>
          <Typography paragraph>{props.desc}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Product;
