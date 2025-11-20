# 🚀 Sparsh Sharma - Portfolio

<div align="center">

![Portfolio](https://img.shields.io/badge/Portfolio-Next.js%2014-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**A modern, interactive portfolio showcasing projects, skills, and experience with AI-powered search capabilities**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Deployment](#-deployment) • [Project Structure](#-project-structure)

</div>

---

## ✨ Features

### 🎯 Core Features
- **Interactive AI Assistant**: Powered by Google Gemini AI for natural language queries about projects, skills, and experience
- **Modern UI/UX**: Beautiful, responsive design with smooth animations and transitions
- **Project Showcase**: Detailed project cards with live links, GitHub repositories, and comprehensive descriptions
- **Skills & Experience**: Comprehensive display of technical skills, work experience, and certifications
- **Real-time Search**: Intelligent search functionality with contextual responses
- **SEO Optimized**: Built-in sitemap, robots.txt, and metadata optimization
- **Performance Optimized**: Static page generation, code splitting, and image optimization

### 🎨 Design Highlights
- Clean, minimalist design with gradient backgrounds
- Smooth animations using Framer Motion
- Responsive layout for all device sizes
- Accessible UI components with proper ARIA labels
- Dark/light mode ready architecture

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + Custom components
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend & AI
- **AI Integration**: [Google Gemini 2.0 Flash](https://ai.google.dev/)
- **API Routes**: Next.js API Routes
- **Vector Search**: FAISS (for AI projects)

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Version Control**: Git

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** 9.0 or higher (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/itsparsh10/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here
```

**Getting your Gemini API Key:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy and paste it into your `.env.local` file

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets (images, PDFs, etc.)
│   ├── *.png              # Project images
│   └── *.pdf              # Resume and documents
│
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/           # API routes
│   │   │   └── search/    # AI search endpoint
│   │   ├── projects/      # Projects page
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   ├── robots.ts      # SEO robots.txt
│   │   └── sitemap.ts     # SEO sitemap
│   │
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── hero.tsx       # Hero section
│   │   ├── chat-messages.tsx
│   │   ├── project-card.tsx
│   │   └── ...
│   │
│   ├── contexts/          # React contexts
│   │   └── chat-context.tsx
│   │
│   └── lib/               # Utility functions
│       ├── data.ts        # Static data
│       ├── profile.ts     # Profile information
│       ├── projects.ts    # Projects data
│       ├── query-analyzer.ts
│       └── utils.ts
│
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

---

## 🚢 Deployment

### Option 1: Deploy to Vercel (Recommended) ⭐

Vercel is the recommended platform for Next.js applications:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable: `GOOGLE_GEMINI_API_KEY`
   - Click "Deploy"

3. **That's it!** Your portfolio will be live in minutes.

### Option 2: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variable: `GOOGLE_GEMINI_API_KEY`
   - Click "Deploy site"

### Option 3: Self-Hosted Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

3. **The app will run on** `http://localhost:3000`

   For production, use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   ```

---

## 📊 Build Status

| Check | Status |
|-------|--------|
| TypeScript Compilation | ✅ Success |
| ESLint | ✅ No Errors |
| Next.js Build | ✅ Success |
| Static Page Generation | ✅ Success |
| Production Ready | ✅ Yes |

---

## 🔧 Configuration

### Next.js Configuration (`next.config.mjs`)

- Image optimization enabled
- Remote image patterns configured
- Package imports optimized

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GOOGLE_GEMINI_API_KEY` | Yes | Google Gemini API key for AI search functionality |

---

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on `http://localhost:3000` |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server (requires build first) |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎯 Key Features Explained

### AI-Powered Search
The portfolio includes an intelligent AI assistant powered by Google Gemini that can answer questions about:
- Projects and their details
- Skills and technologies
- Work experience
- Education and certifications
- Contact information

### Project Showcase
Each project includes:
- Category and description
- Live demo links (where available)
- GitHub repository links
- Detailed technical information
- Visual project cards

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Fast loading times

---

## 🐛 Troubleshooting

### Build Issues

**Issue**: Build fails with TypeScript errors
```bash
# Solution: Clear cache and rebuild
rm -rf .next
npm run build
```

**Issue**: Module not found errors
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Environment variables not working
- Ensure `.env.local` is in the root directory
- Restart the development server after adding variables
- For production, add variables in your hosting platform's dashboard

### Runtime Issues

**Issue**: AI search not working
- Verify `GOOGLE_GEMINI_API_KEY` is set correctly
- Check API key permissions in Google AI Studio
- Ensure API key has not expired

**Issue**: Images not loading
- Check image paths in `public/` directory
- Verify Next.js image configuration
- Check browser console for 404 errors

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Google Gemini API](https://ai.google.dev/docs)

---

## 🤝 Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report issues, please feel free to open an issue or submit a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Sparsh Sharma**

- Portfolio: [Live Site](https://your-portfolio-url.vercel.app)
- LinkedIn: [sparshs10](https://www.linkedin.com/in/sparshs10/)
- GitHub: [@itsparsh10](https://github.com/itsparsh10)
- Email: sparshvishan@gmail.com

---

## 🌟 Show Your Support

If you like this portfolio, give it a ⭐ on GitHub!

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

[⬆ Back to Top](#-sparsh-sharma---portfolio)

</div>
