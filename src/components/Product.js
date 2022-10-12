import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        <IconButton aria-label="add to favorites">
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
