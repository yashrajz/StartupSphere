# StartupSphere — Global Startup & Tech Events Platform

A modern, interactive platform for discovering premium startup events, tech conferences, and networking opportunities worldwide.

## Features

- ✨ Interactive fluid cursor effects with WebGL
- 🎨 Stunning gradient backgrounds with particle systems
- 🧲 Magnetic card effects for enhanced UX
- 📱 Fully responsive design with dark mode
- 🔍 Advanced event search and filtering
- 📅 Curated editor's picks
- 🎯 Event categories and tags

## Getting Started

### Prerequisites
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yashrajz/StartupSphere.git

# Navigate to the project directory
cd StartupSphere

# Install dependencies
npm install

# Start the development server
npm run dev
```

**Development server will be available at:** `http://localhost:8080/`

## Tech Stack

This project is built with modern web technologies:

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **3D Graphics**: WebGL with OGL library
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Hero.tsx       # Hero section with effects
│   ├── EventCard.tsx  # Event display cards
│   ├── Particles.tsx  # 3D particle system
│   ├── SplashCursor.tsx # Fluid cursor effects
│   └── Magnet.tsx     # Magnetic interaction effects
├── pages/             # Route components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── assets/            # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

Build the project and deploy to any static hosting service:

```bash
npm run build
```

The built files will be in the `dist/` directory and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
