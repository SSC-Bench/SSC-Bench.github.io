# SSC-Bench Project Page

A modern, academic project page for the paper "Lost in Space: Evaluating Spatial Structural Competence via Code-as-Reasoning in SSC-Bench".

## Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
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
│   │   ├── Teaser.jsx    # Main teaser image and caption
│   │   ├── Abstract.jsx  # Paper abstract
│   │   ├── Methodology.jsx # Dual-path methodology
│   │   ├── Results.jsx   # Results table/leaderboard
│   │   ├── Citation.jsx  # BibTeX citation
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

Place your images in `public/assets/` and reference them as `/assets/filename.png`.

**IMPORTANT**: Add your teaser image as `react-app/public/assets/teaser.png`.

### Updating Content

- **Authors & Affiliations**: Edit the arrays in `react-app/src/components/Hero.jsx`
- **Abstract**: Edit the text in `react-app/src/components/Abstract.jsx`
- **Results Data**: Edit the `resultsData` array in `react-app/src/components/Results.jsx`
- **Citation**: Edit the `bibtex` string in `react-app/src/components/Citation.jsx`

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme.

## GitHub Pages Setup

1. Go to your repository settings
2. Navigate to **Pages** section
3. Under **Source**, select **GitHub Actions**
4. Push to main branch to trigger deployment

## License

This template is inspired by Nerfies and academic project pages. Feel free to use and modify for your own projects.