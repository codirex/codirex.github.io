import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#4d662a",
            contrastText: "#ffffff"
        },
        secondary:{
            main: "#586249",
            contrastText: "#ffffff"
        },
        error: {
            main: "#ba1a1a",
            contrastText: "#ffffff"
        },
        warning: {
            main: "#dce7c7",
            contrastText: "#414a33"
        },
        info: {
            main: "#bcece6",
            contrastText: "#1f4e4a"
        },
        success: {
            main: "#cfeda2",
            contrastText: "#364e14"
        }
    }
});

export default theme;