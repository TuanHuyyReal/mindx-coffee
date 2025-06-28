// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEjWSRhqz3bWA4iNSrn2xEpwd1-86j1-w",
  authDomain: "lytuanhuy-test.firebaseapp.com",
  projectId: "lytuanhuy-test",
  storageBucket: "lytuanhuy-test.firebasestorage.app",
  messagingSenderId: "883199350700",
  appId: "1:883199350700:web:e107e0ee140f58560c8c09",
  measurementId: "G-S2CT854YP5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { auth, db };
