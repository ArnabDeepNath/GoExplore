// Placeholder Firebase configuration and initialization
// Replace the values with your actual Firebase project credentials.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5Zo-CbYfNJ2gSN2yXbifY-fkkeli7CJg",
  authDomain: "goexplore-8ec29.firebaseapp.com",
  projectId: "goexplore-8ec29",
  storageBucket: "goexplore-8ec29.firebasestorage.app",
  messagingSenderId: "153388327349",
  appId: "1:153388327349:web:335158ce23faddd0e7f9fc",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export Firebase services for use throughout the app
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
