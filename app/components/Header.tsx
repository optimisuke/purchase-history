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
import { GetCustomersDocument } from "@/gql/graphql";
import { useQuery } from "@apollo/client";

const Header: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { data, loading, error } = useQuery(GetCustomersDocument);

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
          {data?.customerList!.map((user: any) => (
            <MenuItem key={user.id} onClick={() => handleUserSwitch(user.id)}>
              {user.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
