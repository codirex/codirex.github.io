import React from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          textAlign: 'center',
          py: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 600,
            width: '100%',
          }}
        >
          <Typography variant="h1" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
            404
          </Typography>
          <Typography variant="h4" gutterBottom>
            الصفحة غير موجودة
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.
          </Typography>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<HomeIcon />}
            sx={{ mt: 2 }}
          >
            العودة إلى الصفحة الرئيسية
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default NotFound;
