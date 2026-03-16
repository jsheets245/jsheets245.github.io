# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with plugins for forms and typography
- **Build Tool**: Vite (Lightning-fast build tool)
- **Development**: Hot Module Replacement (HMR) for instant feedback
- **Deployment**: GitHub Pages ready

## 📋 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.tsx       # Navigation header with mobile menu
│   ├── Hero.tsx         # Hero section with call-to-action
│   ├── Projects.tsx     # Featured projects showcase
│   ├── Skills.tsx       # Skills and expertise grid
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer with links
├── App.tsx              # Main app component
├── main.tsx             # React entry point
└── index.css            # Tailwind and global styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📝 Customization

### Update Your Information

- **Header**: Edit `src/components/Header.tsx` to update navigation links
- **Hero Section**: Modify `src/components/Hero.tsx` with your intro text and social links
- **Projects**: Add your projects in `src/components/Projects.tsx`
- **Skills**: Update `src/components/Skills.tsx` with your expertise
- **Contact**: Update email and social links in `src/components/Contact.tsx`
- **Footer**: Customize footer text in `src/components/Footer.tsx`

### Styling

- **Colors**: Customize theme colors in `tailwind.config.js`
- **Fonts**: Update font family in `tailwind.config.js`
- **Global Styles**: Modify CSS utilities in `src/index.css`

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Update `vite.config.ts`** if using a subdomain:
   ```typescript
   base: '/repository-name/',  // For https://username.github.io/repository-name/
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

   This builds the project and pushes the `dist` folder to the `gh-pages` branch.

3. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Select `gh-pages` branch as source
   - Your site will be live at `https://username.github.io`

### Manual Deployment

```bash
npm run build
# Push dist/ contents to gh-pages branch manually
```

## 📱 Features

- ✅ Fully responsive design (mobile-first)
- ✅ Mobile navigation with hamburger menu
- ✅ Smooth scrolling and transitions
- ✅ Contact form (ready for backend integration)
- ✅ SEO-friendly meta tags
- ✅ Fast performance with Vite
- ✅ Production-optimized build
- ✅ TypeScript for type safety

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

## 💡 Tips

- Replace placeholder project images with your own
- Update social media links (GitHub, LinkedIn, Twitter)
- Customize the color scheme in `tailwind.config.js`
- Add more sections by creating new components
- Consider adding a blog or case studies section

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

## 📄 License

This project is open source and available under the MIT License.
Personal website
