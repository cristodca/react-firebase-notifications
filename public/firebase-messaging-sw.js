importScripts("https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js")

const firebaseConfig = {
  apiKey: "AIzaSyBQfdyEn1L4H-yib6Ok9r_2CeH8oJqd4OI",
  authDomain: "fir-push-notifications-27f06.firebaseapp.com",
  projectId: "fir-push-notifications-27f06",
  storageBucket: "fir-push-notifications-27f06.appspot.com",
  messagingSenderId: "573117136597",
  appId: "1:573117136597:web:c802fd7a14a35315e4ac5c",
  measurementId: "G-CF392PTRKC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app)

messaging.onBackgroundMessage(payload => {
    console.log("Recibiste un mensaje mientras estabas ausente")
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo192.png'
    }

    return self.registration.showNotification(notificationTitle, notificationOptions)
})