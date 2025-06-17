# NextJS Blog - Modern Blog Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

</div>

## 📖 Overview

NextJS Blog is a modern blog platform built with Next.js and TypeScript support. The application demonstrates best practices using Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimal performance and SEO.

### ✨ Key Features

- ⚡ **SSR/SSG** - Server-side rendering and static generation for maximum performance
- 🔍 **SEO Optimization** - Built-in meta tags and Open Graph support
- 📱 **Responsive Design** - Full mobile device support
- 🎨 **Modern UI** - Clean and minimalist design
- 📝 **Markdown Support** - Write articles in Markdown format
- 🏷️ **Tagging System** - Article categorization and filtering
- 🔎 **Search** - Fast article search functionality
- 📊 **Analytics** - Google Analytics integration

## 🛠 Technology Stack

### Core Technologies
- **Next.js 12+** - React framework with SSR/SSG
- **TypeScript** - Typed JavaScript for reliability
- **React 18** - Library for building user interfaces
- **SCSS** - CSS preprocessor for advanced styling

### Additional Tools
- **Gray-matter** - Frontmatter parsing in Markdown files
- **Remark/Rehype** - Markdown processing and rendering
- **Date-fns** - Date manipulation
- **Prism.js** - Code syntax highlighting

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0 or higher
- npm, yarn, or pnpm

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Proffett/nextJsBlog.git
   cd nextJsBlog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run in development mode**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open browser**
   
   Application will be available at [http://localhost:3000](http://localhost:3000)

### Build Commands

```bash
# Production build
npm run build

# Start production version
npm run start

# Static export
npm run export

# Linting
npm run lint
```

## 📁 Project Structure

```
nextJsBlog/
├── components/           # React components
│   ├── Layout/          # Layout components
│   ├── Post/            # Post components
│   └── UI/              # UI components
├── pages/               # Next.js pages
│   ├── api/             # API routes
│   ├── posts/           # Post pages
│   ├── _app.tsx         # Main App component
│   └── index.tsx        # Home page
├── posts/               # Markdown post files
├── public/              # Static files
├── styles/              # SCSS styles
├── types/               # TypeScript types
├── utils/               # Utilities and helpers
├── next.config.js       # Next.js configuration
└── tsconfig.json        # TypeScript configuration
```

## 📝 Content Creation

### Adding New Posts

1. Create new `.md` file in `posts/` folder
2. Add frontmatter at the beginning:

```markdown
---
title: 'Post Title'
date: '2023-12-01'
excerpt: 'Brief post description'
tags: ['react', 'nextjs', 'typescript']
author: 'Evgeny Sterkhov'
coverImage: '/images/cover.jpg'
---

# Post Content

Your Markdown content here...
```

### Supported Frontmatter Fields

- `title` - Post title
- `date` - Publication date (YYYY-MM-DD)
- `excerpt` - Brief description for preview
- `tags` - Array of tags
- `author` - Post author
- `coverImage` - Cover image path
- `published` - Publication status (true/false)

## 🎨 Customization

### Themes & Styles

Styles are organized in modular SCSS structure:

```scss
// styles/globals.scss
@import 'variables';
@import 'mixins';
@import 'components';
```

### Configuration

Main settings in `next.config.js`:

```javascript
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  experimental: {
    appDir: false,
  },
}
```

## 🔧 Functionality

### Static Generation

Blog uses `getStaticProps` and `getStaticPaths` for static page generation:

```typescript
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ]);

  return {
    props: {
      post,
    },
  };
}
```

### SEO Optimization

Each page includes optimized meta tags:

```typescript
<Head>
  <title>{post.title} | NextJS Blog</title>
  <meta name="description" content={post.excerpt} />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.excerpt} />
</Head>
```

## 📊 Performance

### Lighthouse Score
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimizations
- Automatic image compression
- Component lazy loading
- CSS and JavaScript minification
- Static resource caching

## 🚀 Deployment

### Vercel (Recommended)

1. Connect repository to Vercel
2. Deploy settings will be applied automatically
3. Each push to main branch triggers new deployment

### Other Platforms

```bash
# Build static site
npm run build && npm run export

# Upload 'out' folder contents to your hosting
```

## 🔮 Development Roadmap

### Upcoming Updates
- [ ] Comment system
- [ ] Newsletter subscription
- [ ] Dark theme
- [ ] Full-text search

### Long-term Plans
- [ ] Admin panel for content management
- [ ] Multi-language support (i18n)
- [ ] PWA functionality
- [ ] CMS integration (Strapi, Contentful)

## 🤝 Contributing

Welcome any suggestions for project improvement!

### Contribution Process:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 👨‍💻 Author

- GitHub: [@Proffett](https://github.com/Proffett)
- Email: montana-work@yandex.ru
- Telegram: @proffett

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the excellent framework
- [Vercel](https://vercel.com/) for free hosting
- React community for inspiration

---

<div align="center">

**⭐ Star this repo if you liked it!**

</div>

