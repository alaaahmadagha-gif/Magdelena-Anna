# Magdelena Anna — Portfolio

لاندنج بيج شخصية مبنية بـ Vite + Tailwind CSS v4، جاهزة للنشر على Vercel.

## التشغيل محليًا

```bash
npm install
npm run dev
```

الموقع هيفتح على `http://localhost:5173`. أي تعديل في الملفات بيظهر فورًا من غير ما تعمل refresh.

للبناء النهائي:

```bash
npm run build
```

الناتج بيتحط في مجلد `dist/`. تقدر تعاينه بـ `npm run preview`.

## النشر على Vercel

### الطريقة الأولى — من التيرمينال

```bash
npx vercel --prod
```

### الطريقة التانية — عن طريق GitHub

1. ارفع المشروع على repository في GitHub.
2. في [vercel.com](https://vercel.com) اضغط **Add New → Project** واختار الـ repo.
3. Vercel هتتعرّف على Vite لوحدها — اضغط **Deploy** من غير ما تغيّر أي إعداد.

بعد كده كل `git push` هينشر تلقائيًا.

## حاجات لازم تعملها قبل النشر

### 1. تفعيل فورم التواصل

الفورم دلوقتي **مش موصّل** — لو حد بعت رسالة هيشوف رسالة خطأ واضحة بدل ما الرسالة تضيع.

للتفعيل:

1. روح [web3forms.com](https://web3forms.com) واعمل حساب مجاني (250 رسالة شهريًا).
2. هيوصلك access key على الإيميل.
3. في [index.html](index.html) دوّر على السطر ده وحط المفتاح مكان الـ placeholder:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
```

### 2. تغيير الصور

كل الصور دلوقتي من Unsplash كـ placeholder. عشان تحط صورك:

1. حط الصور في `public/images/`.
2. غيّر الـ `src` في [index.html](index.html) من رابط Unsplash لـ `/images/اسم-الصورة.jpg`.

### 3. روابط السوشيال ميديا

روابط X و Instagram و Dribbble و LinkedIn دلوقتي بتوديك للصفحات الرئيسية للمواقع. غيّرها لحساباتك في [index.html](index.html).

### 4. صورة المشاركة (Open Graph)

في `<head>` غيّر `og:image` لصورة مقاس 1200×630 من موقعك، وضيف `og:url` بالدومين بتاعك بعد النشر. دي الصورة اللي بتظهر لما حد يشارك اللينك على واتساب أو لينكدإن.

## هيكل المشروع

```
├── index.html        الصفحة كاملة + الـ SVG sprite للأيقونات
├── src/
│   ├── main.js       أنيميشن الظهور عند التمرير + إرسال الفورم
│   └── style.css     Tailwind + الأنيميشن المخصص
├── public/images/    صورك (فاضي دلوقتي)
└── vite.config.js
```

## ملاحظات تقنية

- **الأيقونات** متعرّفة كـ SVG sprite جوه `index.html` بدل مكتبة خارجية — مفيش طلب شبكة زيادة ولا JavaScript بيشتغل عشانها.
- **الأنيميشن** بيتوقف تلقائيًا لو المستخدم مفعّل `prefers-reduced-motion` في جهازه.
- **لو الـ JavaScript وقع** الصفحة بتفضل ظاهرة بالكامل — الإخفاء بيحصل بس لما JS يأكد إنه شغال.
