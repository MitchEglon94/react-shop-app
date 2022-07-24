import React from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { useSelector, useDispatch } from "react-redux";
import { selectMenuState, close } from "./../features/ui/uiSlice";

const OCMenu = (props) => {
  const isOpen = useSelector(selectMenuState);
  //   const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  return (
    <Drawer open={isOpen} onClose={() => dispatch(close())}>
      <Box
        role="presentation"
        onClick={() => dispatch(close())}
        onKeyDown={() => dispatch(close())}
      >
        <List>
          <ListItem key={1} disablePadding>
            <ListItemButton component={NavLink} to="/">
              Home
            </ListItemButton>
          </ListItem>
          <ListItem key={2} disablePadding>
            <ListItemButton component={NavLink} to="basket">
              Basket
            </ListItemButton>
          </ListItem>

          <Divider />
        </List>
      </Box>
    </Drawer>
  );
};

export default OCMenu;
