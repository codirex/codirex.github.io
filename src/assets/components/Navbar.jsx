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
import React from "react";

export default function Navbar({ title }) {
  const isMobile = useMediaQuery("(max-width:768px)");

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => setOpen(!open);

  const navItems = ["Home", "Projects", "Blog", "Courses", "Contact", "About"];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          {isMobile ? (
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          ) : (
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
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250, height: "100%" }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item}
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
