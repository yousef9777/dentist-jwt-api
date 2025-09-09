# Dentist JWT Server - Free Vercel Deployment

This server provides JWT authentication for Appwrite integration with zero cost.

## 🚀 Quick Deploy Steps

### 1. Create GitHub Repository
1. Go to GitHub.com → New Repository
2. Name: `dentist-jwt-api` (or any name you like)
3. ✅ Public repository
4. ✅ Add README.md

### 2. Upload Files
Upload these exact files to your GitHub repository:

```
dentist-jwt-api/
├── api/
│   └── create-jwt.js    <- Upload this file
├── package.json         <- Upload this file
└── README.md           <- This file
```

### 3. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your `dentist-jwt-api` repository
4. Configure:
   - **Framework**: `Other` (or `Node.js`)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm install` (leave default)
5. Click **"Deploy"** ✨

### 4. Get Your URL
After deployment, Vercel gives you a URL like:
```
https://dentist-jwt-api-your-random-name.vercel.app
```

## 📱 Update Android App

In `app/src/main/java/com/example/dentistmanager/MainActivity.kt` replace line ~116:

```kotlin
.url("https://your-free-host.com/create-appwrite-jwt")
```

With your Vercel URL:
```kotlin
.url("https://your-vercel-url.vercel.app/api/create-jwt")
```

## ✅ Test Your App
1. Run Android app
2. Login with Google
3. Upload X-ray → Should work with JWT authentication!

## 🔒 Security Notes
- This uses your API key server-side only (safe)
- JWT tokens are validated automatically by Appwrite
- Your API key is never exposed to mobile apps

## 💰 Costs
- **GitHub**: ✅ Free
- **Vercel**: ✅ Free tier (100GB bandwidth/month)
- **Appwrite**: ✅ Already paid for

---
**Ready to deploy?** Upload these files and get your free JWT server running! 🚀