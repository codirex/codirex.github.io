import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Box, Chip, Divider, Button, CircularProgress, Paper, Breadcrumbs, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// نموذج لبيانات التدوينة
interface BlogPostData {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  tags: string[];
  date: string;
  readTime: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // في التطبيق الفعلي، سيتم استبدال هذا بتحميل البيانات من ملفات المدونة
    const fetchPost = async () => {
      try {
        // محاكاة تحميل البيانات
        setTimeout(() => {
          // بيانات تجريبية للتدوينة
          if (id === 'post-1') {
            setPost({
              id: 'post-1',
              title: 'كيفية بناء مكتبات JavaScript قابلة للتوسع',
              description: 'دليل شامل لبناء مكتبات JavaScript قابلة للتوسع والصيانة باستخدام أفضل الممارسات والتقنيات الحديثة.',
              content: `
# كيفية بناء مكتبات JavaScript قابلة للتوسع

## مقدمة

تعد مكتبات JavaScript أحد أهم أدوات المطورين في بناء تطبيقات الويب الحديثة. ومع تزايد تعقيد المشاريع، أصبحت الحاجة إلى مكتبات قابلة للتوسع والصيانة أكثر أهمية من أي وقت مضى.

## لماذا نحتاج إلى مكتبات قابلة للتوسع؟

المكتبات القابلة للتوسع تتيح:

- إضافة ميزات جديدة بسهولة دون كسر الوظائف الحالية
- تحسين الأداء مع نمو المشروع
- تسهيل الصيانة على المدى الطويل
- تمكين المطورين الآخرين من المساهمة بفعالية

## أفضل الممارسات

### 1. التصميم المعياري

قسّم المكتبة إلى وحدات مستقلة ذات مسؤوليات محددة. هذا يسمح بتطوير واختبار كل جزء بشكل منفصل.

\`\`\`javascript
// مثال على الهيكل المعياري
/src
  /core      // وظائف أساسية
  /utils     // أدوات مساعدة
  /modules   // وحدات قابلة للتوسيع
  index.js   // نقطة الدخول الرئيسية
\`\`\`

### 2. واجهات برمجة مستقرة

حافظ على استقرار واجهات البرمجة (APIs) العامة. استخدم التوثيق الجيد والإصدارات الدلالية (Semantic Versioning).

\`\`\`javascript
/**
 * دالة لمعالجة البيانات
 * @param {Object} data - البيانات المراد معالجتها
 * @param {Object} options - خيارات المعالجة
 * @returns {Object} البيانات المعالجة
 */
export function processData(data, options = {}) {
  // التنفيذ
}
\`\`\`

### 3. قابلية التكوين

اسمح للمستخدمين بتخصيص سلوك المكتبة من خلال خيارات التكوين.

\`\`\`javascript
class MyLibrary {
  constructor(options = {}) {
    this.options = {
      ...this.defaultOptions,
      ...options
    };
  }
  
  get defaultOptions() {
    return {
      debug: false,
      timeout: 1000,
      retries: 3
    };
  }
}
\`\`\`

### 4. نمط التصميم القابل للتوسيع

استخدم أنماط التصميم التي تسهل التوسع، مثل نمط المراقب (Observer) أو نمط الاستراتيجية (Strategy).

\`\`\`javascript
// نمط المراقب
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }
  
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
    return this;
  }
}
\`\`\`

## الخلاصة

بناء مكتبات JavaScript قابلة للتوسع يتطلب تخطيطًا دقيقًا وتصميمًا جيدًا. من خلال اتباع المبادئ المذكورة أعلاه، يمكنك إنشاء مكتبات تدوم طويلاً وتتكيف مع المتطلبات المتغيرة.
              `,
              image: '',
              tags: ['JavaScript', 'البرمجة', 'تطوير المكتبات'],
              date: '15 مارس 2025',
              readTime: '7 دقائق',
            });
          } else if (id === 'post-2') {
            setPost({
              id: 'post-2',
              title: 'استخدام TypeScript لتحسين جودة الكود',
              description: 'كيف يمكن استخدام TypeScript لتحسين جودة الكود وتقليل الأخطاء في مشاريع JavaScript الكبيرة.',
              content: `
# استخدام TypeScript لتحسين جودة الكود

## مقدمة

TypeScript هي لغة برمجة مفتوحة المصدر طورتها Microsoft، وهي امتداد لـ JavaScript تضيف الأنواع الثابتة والميزات الأخرى لتحسين جودة الكود وتسهيل تطوير المشاريع الكبيرة.

## فوائد استخدام TypeScript

### 1. اكتشاف الأخطاء مبكرًا

يساعد نظام الأنواع في TypeScript على اكتشاف الأخطاء أثناء التطوير بدلاً من وقت التشغيل.

\`\`\`typescript
// مثال على خطأ يمكن اكتشافه في وقت الترجمة
function calculateTotal(items: { price: number }[]) {
  return items.reduce((total, item) => total + item.price, 0);
}

// هذا سيؤدي إلى خطأ في TypeScript
calculateTotal([{ cost: 10 }]); // خطأ: الكائن لا يحتوي على خاصية 'price'
\`\`\`

### 2. توثيق أفضل للكود

تعمل الأنواع كشكل من أشكال التوثيق، مما يساعد المطورين على فهم كيفية استخدام الدوال والكائنات.

\`\`\`typescript
// واجهة توضح بنية البيانات
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  settings?: UserSettings;
}

// الدالة توضح بوضوح ما تتوقعه وما تعيده
function getUserDisplayName(user: User): string {
  return user.name || user.email;
}
\`\`\`

### 3. تحسين تجربة التطوير

توفر TypeScript اقتراحات أفضل للإكمال التلقائي والتنقل في الكود.

## كيفية التحويل من JavaScript إلى TypeScript

### 1. إعداد المشروع

\`\`\`bash
npm install --save-dev typescript @types/node
npx tsc --init
\`\`\`

### 2. تكوين TypeScript

إنشاء ملف \`tsconfig.json\` مناسب:

\`\`\`json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
\`\`\`

### 3. التحويل التدريجي

يمكنك تحويل ملفات JavaScript إلى TypeScript تدريجيًا:

1. تغيير امتداد الملف من \`.js\` إلى \`.ts\`
2. إضافة الأنواع تدريجيًا، بدءًا من الواجهات الرئيسية
3. استخدام \`any\` مؤقتًا للأجزاء التي يصعب تحديد نوعها

## الخلاصة

يمكن أن يؤدي استخدام TypeScript إلى تحسين كبير في جودة الكود وإنتاجية المطورين، خاصة في المشاريع الكبيرة. من خلال اكتشاف الأخطاء مبكرًا وتوفير توثيق أفضل، يمكن أن تساعد TypeScript في بناء برامج أكثر موثوقية وقابلية للصيانة.
              `,
              image: '',
              tags: ['TypeScript', 'JavaScript', 'جودة الكود'],
              date: '2 فبراير 2025',
              readTime: '5 دقائق',
            });
          } else {
            // إذا لم يتم العثور على التدوينة
            setError('لم يتم العثور على التدوينة المطلوبة');
          }
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('حدث خطأ أثناء تحميل التدوينة');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error || !post) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" color="error" gutterBottom>
            {error || 'لم يتم العثور على التدوينة'}
          </Typography>
          <Button
            component={RouterLink}
            to="/blog"
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            sx={{ mt: 2 }}
          >
            العودة إلى المدونة
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link component={RouterLink} to="/" color="inherit">
          الرئيسية
        </Link>
        <Link component={RouterLink} to="/blog" color="inherit">
          المدونة
        </Link>
        <Typography color="text.primary">{post.title}</Typography>
      </Breadcrumbs>

      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CalendarTodayIcon fontSize="small" sx={{ mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {post.date}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {post.readTime} للقراءة
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          {post.description}
        </Typography>
      </Box>

      {post.image && (
        <Box
          component="img"
          sx={{
            width: '100%',
            borderRadius: 1,
            mb: 3,
            maxHeight: 400,
            objectFit: 'cover',
          }}
          src={post.image}
          alt={post.title}
        />
      )}

      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" component="div" sx={{ lineHeight: 1.7 }}>
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocalOfferIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="subtitle2">الوسوم:</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {post.tags.map((tag) => (
            <Chip key={tag} label={tag} component={RouterLink} to={`/blog?tag=${tag}`} clickable />
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          component={RouterLink}
          to="/blog"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          العودة إلى المدونة
        </Button>
      </Box>
    </Container>
  );
};

export default BlogPost;
