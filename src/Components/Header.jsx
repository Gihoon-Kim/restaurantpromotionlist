import React from "react";
import classes from "./Header.module.css";
import {
  Box,
  Button,
  Container,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const _openDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const _closeDropdown = () => {
    setAnchorEl(null);
  };

  const _clickAboutUs = () => {
    navigate("about-us");
    setAnchorEl(null);
  };

  const _clickAboutMe = () => {
    navigate("about-me");
    setAnchorEl(null);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "aliceblue",
      }}
    >
      <Box className={classes.logo}>
        <NavLink style={{ textDecoration: "none" }} to="/">
          Smart EO
        </NavLink>
      </Box>
      <Box className={classes.dropdownContainer}>
        <Button className={classes.dropdownButton} onClick={_openDropdown}>
          About
          <KeyboardArrowDownIcon />
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={_closeDropdown}>
          <MenuItem onClick={_clickAboutUs}>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            About Us
          </MenuItem>
          <MenuItem onClick={_clickAboutMe}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            About Me
          </MenuItem>
        </Menu>

        <Button>LogIn</Button>
      </Box>
    </Container>
  );
};

export default Header;
