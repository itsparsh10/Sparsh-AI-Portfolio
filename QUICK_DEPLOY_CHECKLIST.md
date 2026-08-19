# ⚡ Quick Deploy Checklist - Print This!

Use this checklist while deploying to Vercel. Check off each step as you complete it.

---

## 🔑 Step 1: Get API Key (5 minutes)

- [ ] Go to https://makersuite.google.com/app/apikey
- [ ] Sign in with Google account
- [ ] Click "Create API Key"
- [ ] Copy the API key (starts with `AIzaSy...`)
- [ ] Paste it somewhere safe temporarily

**API Key:** `_____________________________` (write it here temporarily)

---

## 🚀 Step 2: Vercel Setup (5 minutes)

- [ ] Go to https://vercel.com
- [ ] Sign up with GitHub (click "Continue with GitHub")
- [ ] Authorize Vercel to access GitHub
- [ ] Complete signup

---

## 📦 Step 3: Import Repository (3 minutes)

- [ ] Click "Add New..." → "New Project"
- [ ] Find "Sparsh-AI-Portfolio" repository
- [ ] Click on it
- [ ] Verify settings:
  - [ ] Framework: Next.js (auto-detected)
  - [ ] Build Command: `npm run build`
  - [ ] Output Directory: (leave empty)
- [ ] Click "Deploy" (don't add env vars yet)
- [ ] Wait for build to complete (1-3 minutes)

**Your Live URL:** `https://________________.vercel.app`

---

## 🔐 Step 4: Add API Key (2 minutes)

- [ ] Go to Project → Settings → Environment Variables
- [ ] Click "Add New"
- [ ] Fill in:
  - [ ] Name: `GOOGLE_GEMINI_API_KEY` (exact, case-sensitive)
  - [ ] Value: (paste your API key)
  - [ ] Environment: ✅ Production ✅ Preview ✅ Development
- [ ] Click "Save"

---

## 🔄 Step 5: Redeploy (1 minute)

- [ ] Go to Deployments tab
- [ ] Click "⋯" on latest deployment
- [ ] Click "Redeploy"
- [ ] Wait for build (1-2 minutes)

---

## ✅ Step 6: Test (2 minutes)

- [ ] Visit your live site
- [ ] Test AI search: Type "Hello" → Should get response
- [ ] Test: "Tell me about your projects"
- [ ] Test: "What skills do you have?"
- [ ] Verify all pages load
- [ ] Verify images display

---

## 🎉 Success!

- [ ] Portfolio is live
- [ ] AI search working
- [ ] Everything looks good

**Your Portfolio URL:** `https://________________.vercel.app`

---

## 🆘 If Something Goes Wrong

**AI Search Not Working?**
- [ ] Check environment variable name is exact: `GOOGLE_GEMINI_API_KEY`
- [ ] Check it's set for Production environment
- [ ] Redeploy after adding variable
- [ ] Check API key is valid in Google AI Studio

**Build Failed?**
- [ ] Check build logs in Vercel
- [ ] Make sure code is pushed to GitHub
- [ ] Verify `npm run build` works locally

**Need Help?**
- [ ] Read full guide: `VERCEL_DEPLOYMENT_GUIDE.md`
- [ ] Check troubleshooting section
- [ ] Visit Vercel docs: https://vercel.com/docs

---

**Time Estimate:** 15-20 minutes total  
**Difficulty:** Beginner-friendly  
**Result:** Live portfolio with AI search! 🚀

