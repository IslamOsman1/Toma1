# Toma & Partners Law Firm Website

مشروع React + Vite + Tailwind CSS منظم بشكل احترافي.

## التشغيل

```bash
npm install
npm run dev
```

## إعداد EmailJS

انسخ `.env.example` إلى `.env` وضع قيم EmailJS الحقيقية:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

## تغيير الصور

كل الصور موجودة في:

```txt
src/data/siteData.js
```

ابحث عن `image:` وغيّر الرابط.

لو تريد صور محلية:
1. أنشئ فولدر `src/assets`
2. ضع الصور داخله
3. استورد الصورة في الملف المطلوب
4. استخدمها بدل رابط الإنترنت
