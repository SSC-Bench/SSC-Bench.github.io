# Quick Reference - SSC-Bench Project Page

## 🚀 Common Commands

```bash
# Development
cd react-app && npm run dev

# Build
cd react-app && npm run build

# Preview built site
cd react-app && npm run preview
```

## 📝 Quick Edits

### Update Authors
File: `react-app/src/components/Hero.jsx` (lines 6-17)

### Update Paper Links
File: `react-app/src/components/Hero.jsx` (lines 56-82)
- arXiv link (line 58)
- GitHub link (line 68)
- HuggingFace link (line 78)

### Update Results Table
File: `react-app/src/components/Results.jsx` (lines 9-54)

Add more rows to the `resultsData` array.

### Update BibTeX
File: `react-app/src/components/Citation.jsx` (lines 6-11)

## 🎨 Styling Quick Tweaks

### Change Primary Color
File: `react-app/tailwind.config.js` (lines 9-19)

Replace the blue palette with your preferred color.

### Change Font
File: `react-app/tailwind.config.js` (lines 21-24)

Update font families and also modify the import in:
File: `react-app/src/index.css` (line 1)

## 📁 File Locations

| Item | Location |
|------|----------|
| Teaser Image | `react-app/public/assets/teaser.png` |
| All Components | `react-app/src/components/` |
| Global Styles | `react-app/src/index.css` |
| Config | `react-app/tailwind.config.js` |

## 🔄 Git Workflow

```bash
# Check status
git status

# Stage all changes
git add .

# Commit
git commit -m "Update project page content"

# Push (triggers auto-deployment)
git push origin main
```

## 🌐 URLs

- **Local Dev**: http://localhost:5173
- **Production**: https://[username].github.io/SSC-Bench.github.io/

## 🐛 Quick Fixes

### Tailwind classes not working
```bash
cd react-app
rm -rf node_modules .cache dist
npm install
npm run dev
```

### Build issues
```bash
cd react-app
npm run build -- --mode production --debug
```

### Clear everything and start fresh
```bash
cd react-app
rm -rf node_modules package-lock.json dist
npm install
npm run build
```
