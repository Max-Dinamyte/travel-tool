// ─────────────────────────────────────────────────────────────
//  STEP 1: Paste your Firebase project credentials here.
//
//  How to get these:
//  1. Go to https://console.firebase.google.com
//  2. Create a new project (or open an existing one)
//  3. Click "Add app" → Web (</>)
//  4. Copy the firebaseConfig object and paste it below
//  5. In Firebase console: enable Authentication → Email/Password & Google
//  6. Enable Firestore Database (start in production mode)
//  7. Set Firestore rules (see README.md for the exact rules to paste)
// ─────────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey:            "AIzaSyB9giaDmfO2lo3auvxt_YK1pJ0l9JVh3-o",
  authDomain:        "mdt-travel-app.firebaseapp.com",
  projectId:         "mdt-travel-app",
  storageBucket:     "mdt-travel-app.firebasestorage.app",
  messagingSenderId: "24864988014",
  appId:             "1:24864988014:web:8875b4fba27985f46b7f7f",
  measurementId:     "G-7Z847B8R0E"
};

const ADMIN_EMAIL = "maxdinamytetravel@gmail.com";

const ANTHROPIC_API_KEY = "";

// ─────────────────────────────────────────────────────────────
//  STEP 2: Add your Anthropic API key for the Trip Recommender.
//
//  How to get one:
//  1. Go to https://console.anthropic.com
//  2. Create an account → API Keys → Create Key → paste below
//
//  ⚠️  Keep this key private. Set an HTTP referrer restriction
//  in the Anthropic console so it only works on your domain.
// ─────────────────────────────────────────────────────────────
const ANTHROPIC_API_KEY = "PASTE_YOUR_ANTHROPIC_API_KEY_HERE";
