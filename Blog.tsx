import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, TextField, InputAdornment, CircularProgress, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link as RouterLink } from 'react-router-dom';

// نموذج لبيانات المدونة
interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  readTime: string;
}

// مكون لعرض بطاقة تدوينة
const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
      <CardMedia
        component="div"
        sx={{
          pt: '56.25%', // نسبة 16:9
          bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
        }}
        image={post.image || ''}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="caption" color="text.secondary">
            {post.date}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {post.readTime} للقراءة
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" paragraph>
          {post.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
          {post.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={RouterLink} to={`/blog/${post.id}`}>
          قراءة المزيد
        </Button>
      </CardActions>
    </Card>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // محاكاة تحميل البيانات من ملفات المدونة
  useEffect(() => {
    // في التطبيق الفعلي، سيتم استبدال هذا بتحميل البيانات من ملفات المدونة
    const mockPosts: BlogPost[] = [
      {
        id: 'post-1',
        title: 'كيفية بناء مكتبات JavaScript قابلة للتوسع',
        description: 'دليل شامل لبناء مكتبات JavaScript قابلة للتوسع والصيانة باستخدام أفضل الممارسات والتقنيات الحديثة.',
        image: '',
        tags: ['JavaScript', 'البرمجة', 'تطوير المكتبات'],
        date: '15 مارس 2025',
        readTime: '7 دقائق',
      },
      {
        id: 'post-2',
        title: 'استخدام TypeScript لتحسين جودة الكود',
        description: 'كيف يمكن استخدام TypeScript لتحسين جودة الكود وتقليل الأخطاء في مشاريع JavaScript الكبيرة.',
        image: '',
        tags: ['TypeScript', 'JavaScript', 'جودة الكود'],
        date: '2 فبراير 2025',
        readTime: '5 دقائق',
      },
      {
        id: 'post-3',
        title: 'مقدمة في تطوير تطبيقات React Native',
        description: 'دليل للمبتدئين في تطوير تطبيقات الموبايل باستخدام React Native مع أمثلة عملية.',
        image: '',
        tags: ['React Native', 'تطوير الموبايل', 'JavaScript'],
        date: '10 يناير 2025',
        readTime: '8 دقائق',
      },
      {
        id: 'post-4',
        title: 'استراتيجيات تحسين أداء تطبيقات الويب',
        description: 'نصائح وتقنيات لتحسين أداء تطبيقات الويب وتقليل وقت التحميل وتحسين تجربة المستخدم.',
        image: '',
        tags: ['أداء الويب', 'تحسين', 'تجربة المستخدم'],
        date: '5 ديسمبر 2024',
        readTime: '6 دقائق',
      },
      {
        id: 'post-5',
        title: 'مقارنة بين أطر عمل إدارة الحالة في React',
        description: 'مقارنة شاملة بين Redux وMobX وContext API وRecoil لإدارة حالة تطبيقات React.',
        image: '',
        tags: ['React', 'إدارة الحالة', 'Redux', 'MobX'],
        date: '20 نوفمبر 2024',
        readTime: '9 دقائق',
      },
      {
        id: 'post-6',
        title: 'كيفية بناء واجهات برمجة التطبيقات RESTful',
        description: 'دليل خطوة بخطوة لتصميم وبناء واجهات برمجة تطبيقات RESTful قابلة للتوسع وآمنة.',
        image: '',
        tags: ['API', 'REST', 'تطوير الخلفيات'],
        date: '8 أكتوبر 2024',
        readTime: '7 دقائق',
      },
    ];

    // محاكاة تأخير الشبكة
    setTimeout(() => {
      setPosts(mockPosts);
      setFilteredPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  // تصفية المنشورات بناءً على مصطلح البحث
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          المدونة
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          أحدث المقالات والأفكار في مجال تطوير المكتبات والتطبيقات
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <TextField
            label="بحث في المدونة"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: { xs: '100%', sm: '60%', md: '50%' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : filteredPosts.length > 0 ? (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {filteredPosts.map((post) => (
              <Box key={post.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.333% - 24px)' } }}>
                <BlogCard post={post} />
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', my: 4 }}>
            <Typography variant="h6" color="text.secondary">
              لم يتم العثور على تدوينات مطابقة
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Blog;
