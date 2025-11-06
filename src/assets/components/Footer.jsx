import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ textAlign: "center", py: 3, borderTop: "1px solid #333" }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Codirex — Crafted with code, curiosity, and caffeine
      </Typography>
    </Box>
  );
}
