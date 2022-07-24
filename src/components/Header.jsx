import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { toggle } from "../features/ui/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => dispatch(toggle())}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            One stop shop
          </Typography>
          <Button color="inherit" component={NavLink} to="basket">
            Basket
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
