import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Box } from "@mui/material";
import NotFoundLottie from "../assets/lottie/404NotFound.json";
import {NavTitleContext} from "../context/NavTitleContext";
import { useContext, useEffect } from "react";
export default function NotFound() {

  const {setTitle} = useContext(NavTitleContext)
  useEffect(()=>{
    setTitle("Page Not Found");
    document.title = "Page Not Found";
  }, [setTitle]);
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <DotLottieReact
        src={NotFoundLottie}
        height={{xs: 300, sm: 400, md: 500}}
        width={{xs: 300, sm: 400, md: 500}}
        loop
        autoplay
      />
    </Box>
  );
}
