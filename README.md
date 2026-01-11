# SSC-Bench Project Page

🌐 **Live Site**: [https://ssc-bench.github.io](https://ssc-bench.github.io)

A modern, academic project page for the paper "Lost in Space: Evaluating Spatial Structural Competence via Code-as-Reasoning in SSC-Bench".

## ✨ Features

- 🎨 Modern, minimal design inspired by Nerfies
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth scroll animations with Framer Motion
- 🎯 Dual-path methodology visualization
- 📊 Interactive results leaderboard
- 📋 One-click BibTeX citation copy

## Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Development

```bash
cd react-app
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

### Building

```bash
cd react-app
npm run build
```

This will generate the production build in the `dist/` folder.

### Deployment

The site is automatically deployed to GitHub Pages when you push to the `main` branch using GitHub Actions.

## Project Structure

```
react-app/
├── src/
│   ├── components/       # React components
│   │   ├── Hero.jsx      # Hero section with title and buttons
│   │   ├── Stats.jsx     # Statistics section
│   │   ├── Benchmark.jsx # Benchmark details
│   │   ├── KeyFindings.jsx # Key findings section
│   │   ├── Download.jsx  # Download section
│   │   └── Footer.jsx    # Footer
│   ├── lib/
│   │   └── utils.js      # Utility functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/
│   └── assets/           # Static assets (images, etc.)
└── ...
```

## Customization

### Adding Images

Place images in `public/assets/` and reference them as `/assets/filename.png`.

### Updating Content

- **Authors & Affiliations**: Edit `react-app/src/components/Hero.jsx` (lines 6-22)
- **Paper Links**: Update arXiv, GitHub, HuggingFace URLs in `react-app/src/components/Hero.jsx` (lines 56-82)
- **Abstract**: Edit `react-app/src/components/Abstract.jsx`
- **Results Data**: Add more models to the table in `react-app/src/components/Results.jsx` (lines 9-54)
- **BibTeX**: Update with actual arXiv ID in `react-app/src/components/Citation.jsx` (lines 6-11)

### Changing Colors

Edit `react-app/tailwind.config.js` to customize the color scheme (currently uses blue theme).

## 🚀 Deployment

This site is automatically deployed to GitHub Pages when you push to the `main` branch.

**Deployment URL**: https://ssc-bench.github.io/

## License

This template is inspired by Nerfies and academic project pages. Feel free to use and modify for your own projects.