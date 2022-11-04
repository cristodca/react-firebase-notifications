import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging"

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app)