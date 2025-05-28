import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0, 6),
  textAlign: 'center',
  backgroundImage: 'linear-gradient(135deg, #6750A4 0%, #958DA5 100%)',
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(4),
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const Home = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <HeroSection>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="inherit"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          مرحبًا بك في موقعي الشخصي
        </Typography>
        <Typography variant="h5" align="center" color="inherit" paragraph>
          مطور مكتبات وتطبيقات متخصص في إيجاد حلول مبتكرة وفعالة
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                component={RouterLink}
                to="/portfolio"
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                استعرض أعمالي
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={RouterLink}
                to="/about"
                variant="outlined"
                size="large"
                sx={{ color: 'white', borderColor: 'white' }}
              >
                تعرف علي أكثر
              </Button>
            </Grid>
          </Grid>
        </Box>
      </HeroSection>

      <Box sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          آخر الأعمال
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          نظرة على بعض المشاريع الحديثة التي عملت عليها
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {[1, 2, 3].map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <FeatureCard>
                <Box
                  sx={{
                    height: 200,
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                    mb: 2,
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    صورة المشروع
                  </Typography>
                </Box>
                <Typography variant="h6" gutterBottom>
                  مشروع {item}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                  وصف مختصر للمشروع. سيتم تحميل هذه البيانات ديناميكيًا من ملفات JSON.
                </Typography>
                <Button
                  component={RouterLink}
                  to={`/portfolio#project-${item}`}
                  size="small"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                >
                  عرض التفاصيل
                </Button>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            component={RouterLink}
            to="/portfolio"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            عرض جميع الأعمال
          </Button>
        </Box>
      </Box>

      <Box sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          آخر التدوينات
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          أحدث المقالات والأفكار في مدونتي
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {[1, 2, 3].map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <FeatureCard>
                <Typography variant="overline" color="primary">
                  {new Date().toLocaleDateString('ar-EG')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  عنوان التدوينة {item}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                  ملخص مختصر للتدوينة. سيتم تحميل هذه البيانات ديناميكيًا من ملفات المدونة.
                </Typography>
                <Button
                  component={RouterLink}
                  to={`/blog/${item}`}
                  size="small"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                >
                  قراءة المزيد
                </Button>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            component={RouterLink}
            to="/blog"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            عرض جميع التدوينات
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
