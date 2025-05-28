import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, TextField, InputAdornment, CircularProgress, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Link as RouterLink } from 'react-router-dom';

// نموذج لبيانات المشاريع
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  link: string;
}

// مكون لعرض بطاقة مشروع
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
      <CardMedia
        component="div"
        sx={{
          pt: '56.25%', // نسبة 16:9
          bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
        }}
        image={project.image || ''}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
          {project.date}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
          {project.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={RouterLink} to={`/portfolio/${project.id}`}>
          عرض التفاصيل
        </Button>
        {project.link && (
          <Button size="small" color="primary" href={project.link} target="_blank" rel="noopener noreferrer">
            زيارة المشروع
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTab, setCurrentTab] = useState(0);

  // محاكاة تحميل البيانات من ملفات JSON
  useEffect(() => {
    // في التطبيق الفعلي، سيتم استبدال هذا بتحميل البيانات من ملفات JSON
    const mockProjects: Project[] = [
      {
        id: '12345',
        title: 'مكتبة إدارة الحالة',
        description: 'مكتبة JavaScript خفيفة لإدارة حالة التطبيقات بكفاءة عالية وأداء متميز.',
        image: '',
        tags: ['JavaScript', 'TypeScript', 'State Management'],
        date: '2025-03-15',
        link: 'https://github.com/example/state-library',
      },
      {
        id: '12346',
        title: 'تطبيق إدارة المهام',
        description: 'تطبيق ويب متكامل لإدارة المهام والمشاريع مع دعم للفرق والتعاون.',
        image: '',
        tags: ['React', 'Node.js', 'MongoDB'],
        date: '2024-11-20',
        link: 'https://github.com/example/task-app',
      },
      {
        id: '12347',
        title: 'مكتبة واجهة المستخدم',
        description: 'مجموعة من مكونات واجهة المستخدم القابلة لإعادة الاستخدام مع دعم للتخصيص.',
        image: '',
        tags: ['React', 'CSS', 'UI Components'],
        date: '2024-08-05',
        link: 'https://github.com/example/ui-library',
      },
      {
        id: '12348',
        title: 'خدمة API للبيانات',
        description: 'خدمة RESTful API لإدارة البيانات مع دعم للمصادقة والتخزين المؤقت.',
        image: '',
        tags: ['Node.js', 'Express', 'MongoDB', 'API'],
        date: '2024-06-10',
        link: 'https://github.com/example/data-api',
      },
      {
        id: '12349',
        title: 'تطبيق موبايل للتذكير',
        description: 'تطبيق موبايل للتذكير بالمهام والمواعيد مع إشعارات وتزامن سحابي.',
        image: '',
        tags: ['React Native', 'Firebase', 'Mobile App'],
        date: '2024-04-22',
        link: 'https://github.com/example/reminder-app',
      },
      {
        id: '12350',
        title: 'أداة تحليل البيانات',
        description: 'أداة لتحليل وتصور البيانات مع دعم لمصادر بيانات متعددة وتصدير التقارير.',
        image: '',
        tags: ['Python', 'Data Analysis', 'Visualization'],
        date: '2024-02-15',
        link: 'https://github.com/example/data-analyzer',
      },
    ];

    // محاكاة تأخير الشبكة
    setTimeout(() => {
      setProjects(mockProjects);
      setFilteredProjects(mockProjects);
      setLoading(false);
    }, 1000);
  }, []);

  // تصفية المشاريع بناءً على مصطلح البحث
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredProjects(filtered);
    }
  }, [searchTerm, projects]);

  // تصفية المشاريع بناءً على التبويب المحدد
  useEffect(() => {
    if (currentTab === 0) {
      // جميع المشاريع
      setFilteredProjects(projects.filter((project) => searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      ));
    } else if (currentTab === 1) {
      // المكتبات
      setFilteredProjects(projects.filter((project) => 
        (project.tags.includes('Library') || project.title.includes('مكتبة')) &&
        (searchTerm === '' || 
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      ));
    } else if (currentTab === 2) {
      // التطبيقات
      setFilteredProjects(projects.filter((project) => 
        (project.tags.includes('App') || project.title.includes('تطبيق')) &&
        (searchTerm === '' || 
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      ));
    }
  }, [currentTab, projects, searchTerm]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          معرض الأعمال
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          مجموعة من المكتبات والتطبيقات التي قمت بتطويرها
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <TextField
            label="بحث في المشاريع"
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

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="تصنيفات المشاريع"
            centered
          >
            <Tab label="الكل" icon={<FilterListIcon />} iconPosition="start" />
            <Tab label="المكتبات" />
            <Tab label="التطبيقات" />
          </Tabs>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : filteredProjects.length > 0 ? (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {filteredProjects.map((project) => (
              <Box key={project.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.333% - 24px)' } }}>
                <ProjectCard project={project} />
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', my: 4 }}>
            <Typography variant="h6" color="text.secondary">
              لم يتم العثور على مشاريع مطابقة
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Portfolio;
