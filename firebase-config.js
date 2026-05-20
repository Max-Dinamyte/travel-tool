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
  apiKey:            "PASTE_YOUR_API_KEY_HERE",
  authDomain:        "PASTE_YOUR_AUTH_DOMAIN_HERE",
  projectId:         "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket:     "PASTE_YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID_HERE",
  appId:             "PASTE_YOUR_APP_ID_HERE"
};

// Admin email — only this account sees the admin dashboard
const ADMIN_EMAIL = "max@maxdinamyte.com"; // ← change to your email

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
