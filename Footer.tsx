import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ mb: 3 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            {'جميع الحقوق محفوظة © '}
            <Link color="inherit" href="/">
              مطور المكتبات والتطبيقات
            </Link>{' '}
            {currentYear}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 2, sm: 0 },
            }}
          >
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              تويتر
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              جيثب
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              لينكد إن
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
