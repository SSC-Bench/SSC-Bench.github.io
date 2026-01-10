# SSC-Bench Anonymous Website - Deployment Guide

## 🚀 Quick Deploy to GitHub Pages

### Method 1: Deploy from Root (Recommended)

1. **Ensure files are in repository root:**
   ```
   your-repo/
   ├── index.html
   ├── style.css
   ├── script.js
   └── assets/
       └── fig_overview.png  (add your overview figure)
   ```

2. **Configure GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: **main**
   - Select folder: **/ (root)**
   - Click **Save**

3. **Wait 2-3 minutes** for deployment to complete

4. **Access your site:**
   - URL will be: `https://[username].github.io/[repo-name]/`
   - Or: `https://ssc-bench.github.io/` (if repo name is `ssc-bench.github.io`)

---

### Method 2: Deploy from /docs Folder (Alternative)

1. **Move files to docs/ directory:**
   ```bash
   mkdir -p docs
   mv index.html style.css script.js docs/
   mv assets docs/
   ```

2. **Configure GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Select folder: **/docs**
   - Click **Save**

---

## 🔗 Update Links Before Deployment

**IMPORTANT:** Replace placeholder URLs in `index.html`:

### Find and Replace (3 locations):

1. **Paper PDF Link** (appears 2 times):
   ```html
   YOUR_PAPER_PDF_URL
   ```
   Replace with: Your actual PDF URL (can be hosted on arXiv, Google Drive, or GitHub releases)

2. **GitHub Repository Link** (appears 4 times):
   ```html
   YOUR_GITHUB_DATA_REPO_URL
   ```
   Replace with: Your GitHub repository URL (e.g., `https://github.com/SSC-Bench/dataset`)

### Quick Replace Command (Optional):
```bash
# On macOS/Linux:
sed -i '' 's|YOUR_PAPER_PDF_URL|https://arxiv.org/pdf/xxxx.xxxxx.pdf|g' index.html
sed -i '' 's|YOUR_GITHUB_DATA_REPO_URL|https://github.com/SSC-Bench/dataset|g' index.html

# On Windows (Git Bash):
sed -i 's|YOUR_PAPER_PDF_URL|https://arxiv.org/pdf/xxxx.xxxxx.pdf|g' index.html
sed -i 's|YOUR_GITHUB_DATA_REPO_URL|https://github.com/SSC-Bench/dataset|g' index.html
```

---

## 🖼️ Add Your Overview Figure

1. **Prepare your image:**
   - Recommended format: PNG or JPG
   - Recommended dimensions: 1200×600px to 1600×800px
   - File size: < 500KB (optimize if needed)

2. **Place the image:**
   ```bash
   # Copy your overview figure to:
   assets/fig_overview.png
   ```

3. **Alternative:** If you don't have the figure yet, the page will show a placeholder automatically

---

## ✅ Verification Checklist

Before committing and deploying:

- [ ] Replaced `YOUR_PAPER_PDF_URL` with actual PDF link
- [ ] Replaced `YOUR_GITHUB_DATA_REPO_URL` with actual repo link
- [ ] Added overview figure to `assets/fig_overview.png` (or will show placeholder)
- [ ] All files (`index.html`, `style.css`, `script.js`) are in correct location
- [ ] No author/affiliation information present (double-check!)
- [ ] Tested locally by opening `index.html` in browser

---

## 🧪 Local Testing

Before deploying, test locally:

```bash
# Simple Python server (Python 3):
python3 -m http.server 8000

# Or Python 2:
python -m SimpleHTTPServer 8000

# Or Node.js (if you have http-server):
npx http-server

# Then visit: http://localhost:8000
```

---

## 📝 Git Workflow

```bash
# 1. Add files
git add index.html style.css script.js assets/

# 2. Commit
git commit -m "Deploy SSC-Bench anonymous website"

# 3. Push
git push origin main

# 4. Wait for GitHub Pages to build (2-3 minutes)
```

---

## 🔧 Troubleshooting

### Issue: Page shows 404
**Solution:**
- Ensure GitHub Pages is enabled in Settings → Pages
- Check that branch and folder are correctly selected
- Wait 5 minutes and hard-refresh (Ctrl+F5)

### Issue: Styles not loading
**Solution:**
- Ensure `style.css` and `script.js` are in the same directory as `index.html`
- Check browser console for 404 errors
- Verify file names match exactly (case-sensitive)

### Issue: Links don't work
**Solution:**
- Ensure you replaced `YOUR_PAPER_PDF_URL` and `YOUR_GITHUB_DATA_REPO_URL`
- Check that URLs are valid and publicly accessible

### Issue: Image not showing
**Solution:**
- Ensure `assets/fig_overview.png` exists
- Check file path is correct (case-sensitive)
- The page will auto-show a placeholder if image is missing

---

## 🎯 Performance Tips

1. **Optimize your overview image:**
   ```bash
   # Using ImageMagick:
   convert fig_overview.png -quality 85 -resize 1400x -strip assets/fig_overview.png
   ```

2. **Enable caching** (optional - add to repository root):
   Create `.htaccess` (if using Apache):
   ```apache
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType text/javascript "access plus 1 month"
     ExpiresByType image/png "access plus 1 year"
   </IfModule>
   ```

---

## 📊 File Structure Summary

```
Repository Root/
├── index.html          ← Main page (REQUIRED)
├── style.css           ← Styles (REQUIRED)
├── script.js           ← Interactions (REQUIRED)
├── assets/
│   ├── fig_overview.png ← Your overview figure (RECOMMENDED)
│   └── README.txt
└── DEPLOY.md          ← This file
```

---

## ✨ You're Done!

Your anonymous academic website is now ready for deployment. The site is:

- ✅ Fully anonymous (no author info)
- ✅ Clean, professional design
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Fast loading (no external dependencies)
- ✅ SEO-friendly
- ✅ Conference review-compliant

**Live Site:** Will be at `https://ssc-bench.github.io/` after deployment completes.

---

**Need help?** Check the GitHub Pages documentation: https://docs.github.com/en/pages