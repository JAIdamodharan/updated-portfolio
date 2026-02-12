# My Professional AI & Software Engineering Portfolio

A premium, high-performance portfolio website built with **React 19**, **Vite**, and **Tailwind CSS**. This project features a modern "Cyber-Premium" aesthetic with smooth framer-motion animations, glassmorphism UI, and real-time data integration via Supabase.

## ✨ Features

- **🛡️ Modern Tech Stack**: Built with React 19, Vite, and Tailwind CSS for lightning-fast performance.
- **🎨 Premium UI/UX**: Custom glassmorphic design system with interactive background blobs and smooth scroll animations.
- **📱 Fully Responsive**: Optimized for every device, from mobile phones to ultra-wide monitors.
- **⚡ Dynamic Content**: Projects, skills, and experience sections powered by Supabase for easy updates.
- **📧 Integrated Contact Form**: Professional contact system with global residency status indicators.
- **🛡️ Hardened Security**: Industry-standard security headers (CSP, HSTS, XSS protection) and Supabase Row Level Security (RLS) implementation.
- **🚀 Production Ready**: Fully optimized for Vercel deployment with SPA routing support.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database**: [Supabase](https://supabase.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JAIdamodharan/updated-portfolio.git
   cd updated-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```text
├── public/               # Static assets (logo, project images)
├── src/
│   ├── components/       # Reusable UI components (Hero, Navbar, etc.)
│   ├── lib/              # Library configurations (Supabase client)
│   ├── App.jsx           # Main application entry
│   ├── index.css         # Global styles & Tailwind config
│   └── main.jsx          # React DOM mounting
├── vercel.json           # Vercel deployment configuration
└── vite.config.js        # Vite build configuration
```

## 🌐 Deployment

This project is configured for one-click deployment on **Vercel**. 

1. Push your code to GitHub.
2. Import project in Vercel.
3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to Vercel Environment Variables.
4. Deploy!

## 🛡️ Security

This application follows modern security best practices:

- **Security Headers**: Configured in `vercel.json` to include Content Security Policy (CSP), X-Frame-Options, and more.
- **Database Security**: Powered by Supabase **Row Level Security (RLS)**. Public access is restricted to `INSERT` only, with `SELECT`, `UPDATE`, and `DELETE` protected.
- **Input Sanitization**: Client-side input trimming and validation before database submission.
- **Zero Vulnerabilities**: Regular dependency audits to ensure a clean supply chain.

For more detailed information, see [SECURITY.md](SECURITY.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with 💜 by [Jaishree Damodharan](https://updated-portfolio-jaishree.vercel.app/)
