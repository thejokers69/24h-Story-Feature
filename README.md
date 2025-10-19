# 24-Hour Story Feature

A client-side Instagram Stories clone built with Next.js, TypeScript, and Tailwind CSS, featuring swipe gestures and theme support.

> **Project Challenge:** [roadmap.sh - 24hr Story Feature](https://roadmap.sh/projects/stories-feature)

## 🎯 Project Overview

This project is a solution to the [roadmap.sh 24hr Story Feature challenge](https://roadmap.sh/projects/stories-feature). It implements an Instagram/WhatsApp-like stories feature that allows users to post ephemeral content that disappears after 24 hours - all client-side with no backend required!

## ✨ Requirements Checklist

All requirements from the [roadmap.sh challenge](https://roadmap.sh/projects/stories-feature) are implemented:

- ✅ **Story list at the top** with plus button
- ✅ **Upload images** via plus button
- ✅ **Base64 conversion** and localStorage storage
- ✅ **Display stories** in the list
- ✅ **Auto-removal after 24 hours**
- ✅ **Swipe through stories** (optional feature - fully implemented!)
- ✅ **Client-side only** (no backend)
- ✅ **Responsive design**
- ✅ **Image dimension constraints** (max 1080×1920px)

## 🎁 Bonus Features

Beyond the requirements, this implementation includes:

- 🌓 **Dark/Light/System theme** toggle
- 👆 **Touch & mouse drag** support for navigation
- 💫 **Smooth animations** and visual feedback
- 🎨 **Modern UI** with Shadcn/UI components
- 📱 **Instagram-like gradient** story rings
- 🏗️ **SOLID principles** architecture
- 📚 **Comprehensive documentation**

## Quick Links

- 📖 [Full Documentation](./docs/README.md)
- 🚀 [Quick Start](./docs/setup/quick-start.md)
- ✨ [Features Overview](./docs/features/)
- 🏗️ [Architecture](./docs/architecture/)

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

Visit `http://localhost:3000` to see the app in action!

## Features

- ✅ **Story Management**: Upload images with automatic base64 conversion
- ✅ **Auto-Expiration**: Stories automatically disappear after 24 hours
- ✅ **Swipe Navigation**: Native touch gestures like Instagram/TikTok
- ✅ **Click Navigation**: Traditional click/tap navigation for desktop
- ✅ **Theme Support**: Light/Dark/System theme toggle
- ✅ **Responsive Design**: Works on desktop and mobile
- ✅ **Image Validation**: Max dimensions 1080×1920px
- ✅ **SOLID Architecture**: Clean, maintainable component structure

## How to Use

### Adding Stories

1. Click the **"+"** button
2. Select an image from your device
3. Image is automatically converted and stored

### Viewing Stories

1. Click any story thumbnail to open full-screen viewer
2. **Swipe left/right** or **click left/right** to navigate
3. Stories automatically expire after 24 hours

### Theme Toggle

- Click the theme button in the top-right corner
- Choose between Light, Dark, or System theme

## Technical Stack

- **Framework**: Next.js 15 with TypeScript
- **UI Components**: Shadcn/UI with Tailwind CSS
- **State Management**: React hooks + localStorage
- **Validation**: Zod schemas
- **Theme**: next-themes for dark mode
- **Architecture**: SOLID principles with folder-based components

## Documentation

For comprehensive documentation, see the [docs folder](./docs/README.md).

## Deployment

### GitHub Pages

This app is automatically deployed to GitHub Pages using GitHub Actions.

**Live Demo**: [https://thejokers69.github.io/24h-Story-Feature](https://thejokers69.github.io/24h-Story-Feature)

#### How it Works

1. **Automatic Deployment**: Every push to `master` branch triggers a GitHub Actions workflow
2. **Static Export**: Next.js builds a static version of the app (no server needed)
3. **GitHub Actions**: Builds and deploys to GitHub Pages automatically

#### Setup GitHub Pages (First Time)

After pushing your code to GitHub:

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will run automatically on the next push

#### Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

#### Local Testing

To test the production build locally:

```bash
# Build for production
pnpm build

# The static files will be in apps/web/out/
# You can serve them with any static file server
```

## Development

```bash
# Run linting
pnpm lint

# Run type checking
pnpm typecheck

# Run build
pnpm build
```

## Browser Support

| Feature | Desktop | Mobile iOS | Mobile Android |
|---------|---------|------------|----------------|
| Click Navigation | ✅ | ✅ | ✅ |
| Swipe Gestures | ⚠️ (mouse drag) | ✅ | ✅ |
| Theme Toggle | ✅ | ✅ | ✅ |
| Image Upload | ✅ | ✅ | ✅ |

## Contributing

This project follows SOLID principles and uses a clean folder-based component structure. When adding new features:

1. Create components in their own folders with `index.tsx`
2. Separate UI logic from business logic using custom hooks
3. Follow the established patterns in existing components
4. Update documentation for new features

## 📤 Submission

This project is created as part of the [roadmap.sh 24hr Story Feature challenge](https://roadmap.sh/projects/stories-feature).

### GitHub Repository

Create a new public repository and push this code:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "feat: Complete 24hr Story Feature challenge with swipe gestures and theme support"

# Add your GitHub repository as remote
git remote add origin https://github.com/thejokers69/24h-Story-Feature.git

# Push to GitHub
git push -u origin master
```

### Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The app will automatically deploy to: `https://thejokers69.github.io/24h-Story-Feature`

### Submit to roadmap.sh

Once deployed, submit your solution at [roadmap.sh](https://roadmap.sh/projects/stories-feature) to:

- Share with the community
- Get feedback from other developers
- Help others learn from your implementation

## 📊 Project Stats

- **Language**: TypeScript
- **Framework**: Next.js 15
- **UI Library**: Shadcn/UI + Tailwind CSS
- **Architecture**: SOLID principles with folder-based components
- **Testing**: ESLint + TypeScript strict mode
- **Deployment**: GitHub Pages with GitHub Actions

## 🙏 Acknowledgments

- Challenge provided by [roadmap.sh](https://roadmap.sh)
- UI components from [Shadcn/UI](https://ui.shadcn.com)
- Icons from [Lucide React](https://lucide.dev)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Mohamed Lakssir

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
