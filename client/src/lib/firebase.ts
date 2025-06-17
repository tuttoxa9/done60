// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQupIv5k8i53KI-CyaENNkWEyXA9k4cIA",
  authDomain: "globalcrm-db5f8.firebaseapp.com",
  projectId: "globalcrm-db5f8",
  storageBucket: "globalcrm-db5f8.firebasestorage.app",
  messagingSenderId: "905787181763",
  appId: "1:905787181763:web:88ae2482f9760fd5903076",
  measurementId: "G-E31VB2MQZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in production and if supported
let analytics;
if (typeof window !== 'undefined' && import.meta.env.PROD) {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.warn('Analytics not available:', error);
  }
}

// Initialize Firestore
export const db = getFirestore(app);

// Helper function to submit application to Firebase
export const submitApplication = async (data: {
  fullName: string;
  birthDate: string;
  phone: string;
  source: string;
}) => {
  try {
    // Get referrer and user agent
    const referrer = document.referrer || window.location.href;
    const userAgent = navigator.userAgent;

    // Prepare the document data
    const applicationData = {
      fullName: data.fullName,
      birthDate: data.birthDate,
      phone: data.phone,
      source: data.source,
      createdAt: serverTimestamp(),
      referrer,
      userAgent,
      status: "new"
    };

    // Add to 'unic' collection
    const docRef = await addDoc(collection(db, "unic"), applicationData);

    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export { analytics };
export default app;
