import { Box, Typography } from "@mui/material";

export default function Home(){
    return (
    <Box>
        <Typography>
            {process.env.REACT_APP_SUPABASE_URL}
        </Typography>
    </Box>
    );
}