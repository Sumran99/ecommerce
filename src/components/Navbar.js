import * as React from "react";
import { ProductContext } from "../contexts/ProductContext";
import {
  styled,
  alpha,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
} from "@mui/material";

import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar(props) {
  const navigate = useNavigate();
  const {items} = React.useContext(ProductContext);
  const {list} = React.useContext(ProductContext);
  console.log(items);
  if (props.page === "home") {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              // component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              E-Commerce
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search by name"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => props.setSearchInput(e.target.value)}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "flex", md: "flex" } }}>
              <IconButton size="large" aria-label="show cart" color="inherit">
                <Badge badgeContent={items.cartItems} color="error">
                  <ShoppingCartIcon
                    onClick={() =>
                      navigate("/cart", { state: { items: list.cartList } })
                    }
                  />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              // component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              Cart
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Navbar;
