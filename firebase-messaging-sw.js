// اسم الملف: firebase-messaging-sw.js

// استيراد مكتبات Firebase اللازمة
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// وضع إعدادات Firebase مباشرة هنا
const firebaseConfig = {
    apiKey: "AIzaSyBLU4bXcokmr_0GSD3U56Z28Df99nV4kx8",
    authDomain: "stp-1b861.firebaseapp.com",
    databaseURL: "https://stp-1b861-default-rtdb.firebaseio.com",
    projectId: "stp-1b861",
    storageBucket: "stp-1b861.appspot.com",
    messagingSenderId: "59912591993",
    appId: "1:59912591993:web:4e6a02dd60bd1368bf92a8"
};

// تهيئة تطبيق Firebase
firebase.initializeApp(firebaseConfig);

// الحصول على خدمة المراسلة
const messaging = firebase.messaging();

// معالجة الإشعارات التي تصل عندما يكون الموقع في الخلفية أو مغلق
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.ico' // يمكنك وضع رابط أيقونة موقعك هنا
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
