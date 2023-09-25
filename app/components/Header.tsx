import * as React from "react";
import { useRecoilState } from "recoil";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { userState } from "../state"; // import the userState atom

const Header: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUserSwitch = (userId: number) => {
    console.log("Switching to User:", userId);
    // Update the user state here
    setUser({ id: userId, name: `User ${userId}` });
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Purchase History
        </Typography>
        <IconButton color="inherit" onClick={handleClick}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleUserSwitch(1)}>User 1</MenuItem>
          <MenuItem onClick={() => handleUserSwitch(2)}>User 2</MenuItem>
          {/* 他のユーザーを追加 */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
