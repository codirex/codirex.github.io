import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            height: 40,
            width: "auto",
            marginX: 2,
            objectFit: "contain",
          }}
        />

        {["Home", "Projects", "Blog", "Courses", "Contact", "About"].map(
          (page) => (
            <Button
              key={page}
              color="inherit"
              component={Link}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}>
              {page}
            </Button>
          )
        )}
      </Toolbar>
    </AppBar>
  );
}
