# Atlas ERA - Web Application

## What This Repository Is

This repository contains the web application for the **Atlas Education Research Association (Atlas ERA)**, a modern, single-page React application that showcases the organization's research pillars and mission. The application features a dark, atmospheric design with a focus on presenting five core research areas through an interactive card-based interface.

## Purpose

The Atlas ERA web application serves as a digital showcase for the organization's research initiatives, providing visitors with an overview of the five key research pillars:

1. **Research & Inquiry** - Cultivating critical thinking and investigation
2. **Learning Ecosystems** - Designing holistic educational environments
3. **Knowledge Mobilization** - Translating research into practice
4. **Global Collaborations** - Forging partnerships across borders
5. **Applied Innovation** - Bridging ideas and technology for impact

The application is designed to be:
- **Informative**: Clearly presents the organization's research focus areas
- **Professional**: Features a sophisticated dark theme with elegant typography
- **Responsive**: Adapts to different screen sizes with a horizontal scrolling card layout
- **Modern**: Built with current web technologies for optimal performance

## Technology Stack

This project is built using:

- **React 18.2.0** - Modern UI library for building interactive user interfaces
- **Vite 4.5.0** - Fast build tool and development server
- **JavaScript (JSX)** - Component-based development with JSX syntax
- **CSS3** - Custom styling with CSS variables for theming

### Development Dependencies

- **@vitejs/plugin-react** - Vite plugin for React support with Fast Refresh
- **Vite** - Next-generation frontend build tool

## Project Structure

```
atlasera/
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── LICENSE                 # MIT License
├── README.md               # This file
└── src/
    ├── main.jsx            # React application entry point
    ├── App.jsx             # Main application component
    ├── index.css           # Global styles and theme
    └── assets/             # Image assets
        ├── research.png
        ├── learning.png
        ├── knowledge.png
        ├── global.png
        └── innovation.png
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher recommended)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd atlasera
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install all required dependencies listed in `package.json`, including React, React DOM, Vite, and the React plugin.

### Running the Development Server

To start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use). Vite will automatically open your default browser, or you can navigate to the URL manually.

**Features of the development server:**
- **Hot Module Replacement (HMR)**: Changes to your code are instantly reflected in the browser
- **Fast Refresh**: React components update without losing their state
- **Fast builds**: Vite's optimized build process provides near-instant server startup

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This command will:
- Bundle and minify your code
- Optimize assets
- Generate static files in the `dist/` directory

The production build is optimized for:
- Smaller file sizes
- Better performance
- Browser compatibility

### Previewing the Production Build

To preview the production build locally before deploying:

```bash
 npm run preview
```

This serves the built application from the `dist/` directory, simulating how it will behave in production.

## How to Use

### For Developers

#### Customizing Research Pillars

The research pillars are defined in the `App.jsx` file. To modify them:

1. Open `src/App.jsx`
2. Locate the `pillars` array (lines 18-49)
3. Modify the `title`, `description`, or `image` properties
4. Add or remove pillars by adding/removing objects from the array

Example:
```jsx
const pillars = [
  {
    key: 'research',
    title: 'Your Title Here',
    description: 'Your description here',
    image: researchImg, // Import the image at the top of the file
  },
  // Add more pillars...
];
```

#### Customizing Styles

The application uses CSS variables for easy theming. To change colors:

1. Open `src/index.css`
2. Modify the CSS variables in the `:root` selector (lines 10-19):

```css
:root {
  --bg-colour: #010a1a;        /* Background color */
  --primary: #f1e4c4;          /* Primary text color */
  --secondary: #98b9b5;        /* Secondary/accent text */
  --accent: #c8463c;           /* Accent color (buttons, highlights) */
  --button-bg: #00545d;        /* Button background */
  --button-hover: #0e7d87;     /* Button hover state */
  --card-bg: rgba(4, 16, 32, 0.75); /* Card background */
  --text-muted: #9eaac1;       /* Muted text color */
}
```

#### Adding New Images

To add new images:

1. Place image files in the `src/assets/` directory
2. Import them in `App.jsx`:
   ```jsx
   import newImage from './assets/new-image.png';
   ```
3. Use them in your pillar configuration

#### Modifying Navigation

The navigation bar is defined in `App.jsx` (lines 54-62). To modify:

- Change the logo text in the `.logo` div
- Add/remove navigation items in the `<ul>` list
- Modify the CTA (Call-to-Action) button text or styling

### For End Users

The application is straightforward to use:

1. **Navigation**: Use the top navigation bar to access different sections (currently placeholder links)
2. **Research Pillars**: Scroll horizontally through the research pillar cards
3. **Learn More**: Click the "Learn More" button on any pillar card (currently a placeholder)
4. **Join**: Click the "Join" button in the navigation bar (currently a placeholder)

## Development Workflow

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Style

- The project uses **JSX** for component structure
- **Functional components** with React hooks (when needed)
- **CSS modules** approach with global styles in `index.css`
- **Component-based architecture** - main logic in `App.jsx`

### Best Practices

1. **Component Organization**: Keep components modular and reusable
2. **Asset Management**: Store all images in the `src/assets/` directory
3. **Styling**: Use CSS variables for consistent theming
4. **Performance**: Images are statically imported to ensure proper bundling

## Features

### Current Features

- ✅ Responsive navigation bar with logo and menu items
- ✅ Header section with title and description
- ✅ Five research pillar cards with images, titles, and descriptions
- ✅ Horizontal scrolling card layout
- ✅ Dark theme with elegant color palette
- ✅ Hover effects on interactive elements
- ✅ Fast development experience with Vite

### Future Enhancement Opportunities

- [ ] Add routing for different pages (Programs, Membership, Join)
- [ ] Implement "Learn More" functionality for each pillar
- [ ] Add animations and transitions
- [ ] Create individual pages for each research pillar
- [ ] Add contact forms or membership registration
- [ ] Implement responsive mobile menu
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Integrate with a backend API
- [ ] Add content management capabilities

## Browser Support

The application is built with modern web standards and supports:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

For older browser support, you may need to add polyfills or transpilation configurations.

## Deployment

### Static Hosting

Since this is a static React application, it can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket
- **Any web server**: Upload the contents of `dist` to your web server

### Deployment Steps

1. Build the application: `npm run build`
2. Upload the contents of the `dist/` directory to your hosting service
3. Configure your hosting service to serve `index.html` for all routes (for SPA routing)

## Troubleshooting

### Common Issues

**Port already in use:**
- Vite will automatically try the next available port
- Or specify a port: `npm run dev -- --port 3000`

**Dependencies not installing:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**Build errors:**
- Ensure all image imports are correct
- Check that all assets exist in the `src/assets/` directory
- Verify React component syntax is correct

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

When contributing to this project:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## Contact & Support

For questions or support regarding this application, please refer to the repository maintainers or create an issue in the repository.

---

**Built with ❤️ for Atlas Education Research Association**
