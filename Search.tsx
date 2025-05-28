import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, TextField, InputAdornment, Grid, Card, CardContent, Button, CircularProgress, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link as RouterLink } from 'react-router-dom';

// واجهات البيانات
interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'portfolio' | 'blog';
  tags: string[];
  link: string;
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);

  // محاكاة البحث في البيانات
  useEffect(() => {
    if (searchTerm.trim().length < 2) {
      setResults([]);
      setFilteredResults([]);
      return;
    }

    setLoading(true);

    // محاكاة تأخير البحث
    const timer = setTimeout(() => {
      // بيانات تجريبية للبحث
      const mockResults: SearchResult[] = [
        {
          id: '12345',
          title: 'مكتبة إدارة الحالة',
          description: 'مكتبة JavaScript خفيفة لإدارة حالة التطبيقات بكفاءة عالية وأداء متميز.',
          type: 'portfolio',
          tags: ['JavaScript', 'TypeScript', 'State Management'],
          link: '/portfolio/12345',
        },
        {
          id: '12346',
          title: 'تطبيق إدارة المهام',
          description: 'تطبيق ويب متكامل لإدارة المهام والمشاريع مع دعم للفرق والتعاون.',
          type: 'portfolio',
          tags: ['React', 'Node.js', 'MongoDB'],
          link: '/portfolio/12346',
        },
        {
          id: 'post-1',
          title: 'كيفية بناء مكتبات JavaScript قابلة للتوسع',
          description: 'دليل شامل لبناء مكتبات JavaScript قابلة للتوسع والصيانة باستخدام أفضل الممارسات والتقنيات الحديثة.',
          type: 'blog',
          tags: ['JavaScript', 'البرمجة', 'تطوير المكتبات'],
          link: '/blog/post-1',
        },
        {
          id: 'post-2',
          title: 'استخدام TypeScript لتحسين جودة الكود',
          description: 'كيف يمكن استخدام TypeScript لتحسين جودة الكود وتقليل الأخطاء في مشاريع JavaScript الكبيرة.',
          type: 'blog',
          tags: ['TypeScript', 'JavaScript', 'جودة الكود'],
          link: '/blog/post-2',
        },
      ];

      // تصفية النتائج بناءً على مصطلح البحث
      const filtered = mockResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          result.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          result.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );

      setResults(filtered);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // تصفية النتائج بناءً على التبويب المحدد
  useEffect(() => {
    if (tabValue === 0) {
      // الكل
      setFilteredResults(results);
    } else if (tabValue === 1) {
      // معرض الأعمال
      setFilteredResults(results.filter((result) => result.type === 'portfolio'));
    } else if (tabValue === 2) {
      // المدونة
      setFilteredResults(results.filter((result) => result.type === 'blog'));
    }
  }, [tabValue, results]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          البحث
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          ابحث في معرض الأعمال والمدونة
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <TextField
            label="ابحث عن..."
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ maxWidth: 600 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {searchTerm.trim().length >= 2 && (
          <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="fullWidth"
                aria-label="تصنيفات البحث"
              >
                <Tab label={`الكل (${results.length})`} />
                <Tab label={`معرض الأعمال (${results.filter((r) => r.type === 'portfolio').length})`} />
                <Tab label={`المدونة (${results.filter((r) => r.type === 'blog').length})`} />
              </Tabs>
            </Box>

            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <CircularProgress />
              </Box>
            ) : filteredResults.length > 0 ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {filteredResults.map((result) => (
                  <Box key={`${result.type}-${result.id}`}>
                    <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                      <CardContent>
                        <Typography variant="caption" color="text.secondary" gutterBottom>
                          {result.type === 'portfolio' ? 'معرض الأعمال' : 'المدونة'}
                        </Typography>
                        <Typography variant="h5" component="div" gutterBottom>
                          {result.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {result.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                          {result.tags.map((tag) => (
                            <Typography
                              key={tag}
                              variant="caption"
                              sx={{
                                bgcolor: 'action.selected',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                              }}
                            >
                              {tag}
                            </Typography>
                          ))}
                        </Box>
                        <Button
                          component={RouterLink}
                          to={result.link}
                          variant="outlined"
                          size="small"
                        >
                          {result.type === 'portfolio' ? 'عرض المشروع' : 'قراءة المقال'}
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box sx={{ textAlign: 'center', my: 4 }}>
                <Typography variant="h6" color="text.secondary">
                  لم يتم العثور على نتائج مطابقة
                </Typography>
              </Box>
            )}
          </>
        )}

        {searchTerm.trim().length < 2 && (
          <Box sx={{ textAlign: 'center', my: 8 }}>
            <Typography variant="h6" color="text.secondary">
              أدخل كلمة بحث من حرفين على الأقل للبدء
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Search;
