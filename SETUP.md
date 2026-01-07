# Setup Guide for SSC-Bench Project Page

This guide will help you set up and customize your SSC-Bench project page.

## 📋 Prerequisites

- Node.js 18+ installed
- Git installed
- A GitHub account

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd react-app
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Add Your Teaser Image

**IMPORTANT**: The teaser image from the PDF needs to be added manually.

1. Save the teaser image (Figure 1 from page 2 of your PDF) as `teaser.png`
2. Place it in: `react-app/public/assets/teaser.png`

Alternatively, create a symbolic link if you have the image elsewhere:
```bash
ln -s /path/to/your/image.png react-app/public/assets/teaser.png
```

## 🎨 Customization Checklist

### Content Updates

- [ ] **Authors** - Update in [Hero.jsx](react-app/src/components/Hero.jsx:11-17)
- [ ] **Institutions** - Update in [Hero.jsx](react-app/src/components/Hero.jsx:19-22)
- [ ] **Paper Links** - Update arXiv, GitHub, HuggingFace URLs in [Hero.jsx](react-app/src/components/Hero.jsx:56-82)
- [ ] **Teaser Image** - Add to `react-app/public/assets/teaser.png`
- [ ] **Abstract** - Already populated from your paper (check [Abstract.jsx](react-app/src/components/Abstract.jsx))
- [ ] **Results Data** - Update with full results in [Results.jsx](react-app/src/components/Results.jsx:9-54)
- [ ] **BibTeX** - Update with actual arXiv ID in [Citation.jsx](react-app/src/components/Citation.jsx:6-11)

### Visual Customization (Optional)

- [ ] **Colors** - Modify color scheme in [tailwind.config.js](react-app/tailwind.config.js:9-19)
- [ ] **Fonts** - Change fonts in [tailwind.config.js](react-app/tailwind.config.js:21-24)

## 📦 Building for Production

```bash
cd react-app
npm run build
```

The built files will be in `dist/` folder in the parent directory.

## 🌐 Deploying to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

The repository is already configured with GitHub Actions. Simply:

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update SSC-Bench project page"
   git push origin main
   ```

2. Go to your repository on GitHub
3. Navigate to: **Settings** → **Pages**
4. Under **Source**, select **GitHub Actions**
5. The site will automatically build and deploy

Your site will be available at: `https://[username].github.io/SSC-Bench.github.io/`

### Method 2: Manual Build

If you prefer manual deployment:

```bash
cd react-app
npm run build
# Then commit and push the dist/ folder
```

## 🔧 Troubleshooting

### Images Not Loading

- Ensure images are in `react-app/public/assets/`
- Reference them as `/assets/filename.png` (not `./assets/...`)
- Check the browser console for 404 errors

### Build Fails

```bash
# Clear cache and reinstall
cd react-app
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Animations Not Working

- Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Check browser console for errors

## 📂 File Structure Reference

```
SSC-Bench.github.io/
├── react-app/                    # Main React application
│   ├── public/
│   │   └── assets/
│   │       └── teaser.png       # ← ADD YOUR IMAGE HERE
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx         # Title, authors, buttons
│   │   │   ├── Teaser.jsx       # Main teaser image
│   │   │   ├── Abstract.jsx     # Paper abstract
│   │   │   ├── Methodology.jsx  # SSU & SSR paths
│   │   │   ├── Results.jsx      # Results table
│   │   │   ├── Citation.jsx     # BibTeX
│   │   │   └── Footer.jsx       # Footer
│   │   ├── lib/
│   │   │   └── utils.js
│   │   ├── App.jsx              # Main component
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── tailwind.config.js       # Tailwind configuration
│   ├── postcss.config.js        # PostCSS configuration
│   └── package.json             # Dependencies
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow
├── dist/                        # Built files (auto-generated)
└── README.md                    # This file

```

## 🎯 Next Steps

1. **Add your teaser image** to `react-app/public/assets/teaser.png`
2. **Update author information** and links
3. **Test locally** with `npm run dev`
4. **Build** with `npm run build` to verify everything works
5. **Deploy** by pushing to GitHub

## 💡 Tips

- Use the PDF you provided as reference for content
- All animations use Framer Motion and trigger on scroll
- The design is fully responsive (mobile, tablet, desktop)
- Colors use a blue theme matching academic style

## 📧 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all files are in the correct locations
3. Ensure Node.js version is 18 or higher
4. Try clearing the cache and rebuilding

---

**Enjoy your new project page! 🎉**
