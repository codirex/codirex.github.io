import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar, Chip, LinearProgress, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';

const ProfileSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const SkillBar = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ExperienceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const About = () => {
  const skills = [
    { name: 'تطوير الواجهات الأمامية', level: 90 },
    { name: 'تطوير الخلفيات', level: 85 },
    { name: 'تطوير المكتبات', level: 95 },
    { name: 'تطوير تطبيقات الموبايل', level: 80 },
    { name: 'قواعد البيانات', level: 85 },
    { name: 'DevOps', level: 75 },
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 
    'Django', 'Flask', 'SQL', 'MongoDB', 'Docker', 
    'AWS', 'Git', 'CI/CD', 'Material UI', 'Redux'
  ];

  return (
    <Container maxWidth="lg">
      <ProfileSection>
        <Avatar
          sx={{
            width: 150,
            height: 150,
            margin: '0 auto',
            bgcolor: 'primary.main',
            mb: 3,
          }}
        >
          <CodeIcon sx={{ fontSize: 80 }} />
        </Avatar>
        <Typography variant="h3" gutterBottom>
          عني
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          مطور مكتبات وتطبيقات متخصص في إيجاد حلول مبتكرة وفعالة
        </Typography>
      </ProfileSection>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          نبذة شخصية
        </Typography>
        <Typography variant="body1" paragraph>
          أنا مطور مكتبات وتطبيقات ذو خبرة واسعة في مجال تطوير البرمجيات. أتميز بالابتكار والسعي دائمًا لإيجاد الحلول المناسبة للمشكلات المعقدة. أعمل على تطوير مكتبات وتطبيقات عالية الجودة تلبي احتياجات المستخدمين وتحقق أهداف العمل.
        </Typography>
        <Typography variant="body1" paragraph>
          أؤمن بأهمية التعلم المستمر ومواكبة أحدث التقنيات والممارسات في مجال تطوير البرمجيات. أسعى دائمًا لتحسين مهاراتي وتوسيع معرفتي لتقديم أفضل الحلول الممكنة.
        </Typography>
        <Typography variant="body1" paragraph>
          أتمتع بالعمل ضمن فريق وأقدر قيمة التعاون والتواصل الفعال. كما أمتلك القدرة على العمل بشكل مستقل وإدارة المشاريع من البداية إلى النهاية.
        </Typography>
      </Box>

      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          المهارات
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            {skills.slice(0, 3).map((skill) => (
              <SkillBar key={skill.name}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">{skill.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{ height: 8, borderRadius: 5 }}
                />
              </SkillBar>
            ))}
          </Box>
          <Box sx={{ flex: 1 }}>
            {skills.slice(3).map((skill) => (
              <SkillBar key={skill.name}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">{skill.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{ height: 8, borderRadius: 5 }}
                />
              </SkillBar>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          التقنيات
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 2 }}>
          {technologies.map((tech) => (
            <Chip key={tech} label={tech} color="primary" variant="outlined" />
          ))}
        </Box>
      </Box>

      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          الخبرات
        </Typography>
        <ExperienceCard>
          <Typography variant="h6">كبير مطوري المكتبات</Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            شركة التقنيات المتقدمة | 2020 - الحالي
          </Typography>
          <Typography variant="body2">
            • تطوير وصيانة مكتبات برمجية متقدمة تستخدم في العديد من المشاريع
            <br />
            • قيادة فريق من المطورين وتوجيههم لتحقيق أهداف المشاريع
            <br />
            • تحسين أداء وكفاءة المكتبات الحالية
            <br />
            • تطبيق أفضل الممارسات وأنماط التصميم
          </Typography>
        </ExperienceCard>

        <ExperienceCard>
          <Typography variant="h6">مطور تطبيقات</Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            شركة البرمجيات المبتكرة | 2017 - 2020
          </Typography>
          <Typography variant="body2">
            • تطوير تطبيقات ويب وموبايل متكاملة
            <br />
            • العمل مع فرق متعددة التخصصات لتحقيق متطلبات العملاء
            <br />
            • تحسين تجربة المستخدم وواجهات التطبيقات
            <br />
            • المشاركة في تصميم وتنفيذ قواعد البيانات
          </Typography>
        </ExperienceCard>
      </Box>

      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          التعليم
        </Typography>
        <ExperienceCard>
          <Typography variant="h6">ماجستير في علوم الحاسب</Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            جامعة التكنولوجيا | 2015 - 2017
          </Typography>
          <Typography variant="body2">
            تخصص في هندسة البرمجيات وتطوير التطبيقات المتقدمة
          </Typography>
        </ExperienceCard>

        <ExperienceCard>
          <Typography variant="h6">بكالوريوس في علوم الحاسب</Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            جامعة العلوم والتكنولوجيا | 2011 - 2015
          </Typography>
          <Typography variant="body2">
            تخصص في برمجة الحاسب وتطوير البرمجيات
          </Typography>
        </ExperienceCard>
      </Box>
    </Container>
  );
};

export default About;
