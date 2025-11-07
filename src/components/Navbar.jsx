import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useMediaQuery,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext } from "react";
import NavTitleContext from "../context/NavTitleContext";
import Logo from "../assets/images/logo.png";

export default function Navbar() {
  const { title } = useContext(NavTitleContext);
  const isMobile = useMediaQuery("(max-width:768px)");

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => setOpen(!open);

  const navItems = ["Home", "Projects", "Blog", "Courses", "Contact", "About"];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          if (isMobile)
          {
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          }
          <Box
            sx={{ width: 48, height: 48, marginX: 2 }}
            component="img"
            src={Logo}
            alt="logo"
            loading="lazy"
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          if (!isMobile){" "}
          {
            <Box>
              {navItems.map((page) => (
                <Button
                  key={page}
                  color="inherit"
                  component={Link}
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                >
                  {page}
                </Button>
              ))}
            </Box>
          }
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250, height: "100%" }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item}
                color="inherit"
                component={Link}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
