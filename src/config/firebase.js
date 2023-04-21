// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// We need to populate this object with the config in the Firebase console
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase inside our app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference that we can use to handle authentication and export this so we can use the refeence in our React components
export const auth = getAuth(app);

// Export the Firebase app by default so we can use it with other Firebase services in our app if we need to
export default app;
