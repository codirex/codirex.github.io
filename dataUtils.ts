import React, { useState, useEffect } from 'react';

// واجهة لبيانات المشروع
interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  link: string;
}

// دالة لتحميل بيانات المشاريع من مجلد portfolio
export const usePortfolioData = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // في التطبيق الفعلي، سيتم استبدال هذا بتحميل البيانات من ملفات JSON
        // محاكاة تحميل البيانات من مجلد portfolio
        setTimeout(() => {
          // بيانات تجريبية للمشاريع
          const mockProjects: ProjectData[] = [
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

          setProjects(mockProjects);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('حدث خطأ أثناء تحميل بيانات المشاريع');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

// واجهة لبيانات التدوينة
interface BlogPostData {
  id: string;
  title: string;
  description: string;
  content?: string;
  image: string;
  tags: string[];
  date: string;
  readTime: string;
}

// دالة لتحميل بيانات المدونة من مجلد blog
export const useBlogData = () => {
  const [posts, setPosts] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // في التطبيق الفعلي، سيتم استبدال هذا بتحميل البيانات من ملفات المدونة
        setTimeout(() => {
          // بيانات تجريبية للمدونة
          const mockPosts: BlogPostData[] = [
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

          setPosts(mockPosts);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('حدث خطأ أثناء تحميل بيانات المدونة');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

// دالة لتحميل تدوينة محددة بواسطة المعرف
export const useBlogPost = (id: string | undefined) => {
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('معرف التدوينة غير محدد');
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        // في التطبيق الفعلي، سيتم استبدال هذا بتحميل البيانات من ملفات المدونة
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

  return { post, loading, error };
};

// دالة للبحث في المشاريع والتدوينات
export const useSearch = (searchTerm: string) => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchTerm.trim().length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);

    // محاكاة البحث في البيانات
    const timer = setTimeout(() => {
      try {
        // بيانات تجريبية للبحث
        const mockResults = [
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
            result.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        setResults(filtered);
        setLoading(false);
      } catch (err) {
        setError('حدث خطأ أثناء البحث');
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return { results, loading, error };
};
