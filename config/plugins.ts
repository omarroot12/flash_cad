module.exports = ({ env }) => ({
    // تفعيل إضافة المستخدمين والأذونات (users-permissions)
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET'), // تأكد من أنك قد قمت بتعيين JWT_SECRET في متغيرات البيئة
      },
    },
  
    // تفعيل إضافة الوثائق (documentation)
    documentation: {
      enabled: true,
      config: {
        // يمكنك تخصيص إعدادات الوثائق هنا إذا لزم الأمر
      },
    },
  });
