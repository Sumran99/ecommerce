import * as React from "react";
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

/**********************************************************/

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

/**********************************************************/

function Product(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={props.name} subheader={props.category} />
      <CardMedia
        component="img"
        height="320"
        image={props.image_url}
        alt="Product"
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
        <IconButton
          aria-label="add to cart"
          onClick={(e) => props.setCartItems((prev) => prev + 1)}
        >
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
