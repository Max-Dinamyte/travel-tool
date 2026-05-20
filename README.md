# Max Dinamyte Travel — World Map Tracker

A client-facing travel map app for your travel business. Clients sign in, track countries they've visited (with status, time spent, and notes), and you see all their maps in an admin dashboard.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Client travel map (requires sign-in) |
| `auth.html` | Sign-in / sign-up page |
| `admin.html` | Your admin dashboard (your email only) |
| `style.css` | Shared styles |
| `firebase-config.js` | Your Firebase credentials ← **edit this first** |

---

## Setup (one-time, ~10 minutes)

### Step 1 — Create a Firebase project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Add project"** → give it a name (e.g. `max-dinamyte-travel`) → Continue
3. Disable Google Analytics if you don't need it → **Create project**

### Step 2 — Add a Web app

1. On your project dashboard, click the **`</>`** (Web) icon
2. Give it a nickname (e.g. `travel-map`) → click **Register app**
3. Copy the `firebaseConfig` object shown on screen
4. Open `firebase-config.js` and paste your values in place of the placeholders
5. Also set `ADMIN_EMAIL` to your own email address

### Step 3 — Enable Authentication

1. In Firebase console: **Build → Authentication → Get started**
2. Click **Sign-in method** tab
3. Enable **Email/Password** → Save
4. Enable **Google** → set your support email → Save

### Step 4 — Enable Firestore Database

1. In Firebase console: **Build → Firestore Database → Create database**
2. Choose **"Start in production mode"** → Next
3. Select your region → **Enable**

### Step 5 — Set Firestore security rules

In Firestore → **Rules** tab, replace the default rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Clients can only read/write their own map data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    // Anyone signed in can read destinations; only admin can write
    match /destinations/{destId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.token.email == "max@maxdinamyte.com";
    }
  }
}
```

Replace `max@maxdinamyte.com` with your actual email. Click **Publish**.

---

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `travel-map`)
2. Upload all files to the repository root
3. Go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch** → choose `main` → `/ (root)` → Save
5. Your app will be live at `https://yourusername.github.io/travel-map/auth.html`

**Tip:** Set `auth.html` as your home page link so clients land on sign-in first.

### Add your domain (optional)

In GitHub Pages settings, add a custom domain (e.g. `map.maxdinamyte.com`). You'll also need to add the domain to Firebase:

1. Firebase Console → **Authentication → Settings → Authorized domains**
2. Click **Add domain** → enter your custom domain

---

## How it works for clients

1. Client visits the site and creates an account (or signs in with Google)
2. They see a world map — every country starts blue (not visited)
3. Clicking a country opens a panel to set status:
   - 🔵 **Blue** — not visited
   - 🟢 **Green** — visited, want to return
   - 🟡 **Yellow** — visited, undecided
   - 🔴 **Red** — visited, won't return
4. For green/yellow countries, they can add: time spent, whether they explored beyond the capital, and personal notes
5. Their map saves automatically to the cloud

## Admin dashboard

When you sign in with your admin email, you're redirected to `admin.html` where you can:
- See all registered clients and their stats at a glance
- Click any client to view their full map and country breakdown
- See how many countries each client wants to return to (useful for planning!)

---

## Customisation

- **Logo/branding**: Edit the nav bar in each HTML file — replace "Max Dinamyte" with your preferred name
- **Colours**: All colour tokens are in `style.css` under `:root`
- **Add more detail fields**: Extend the modal in `index.html` and the Firestore save logic in the `saveCountry` function
