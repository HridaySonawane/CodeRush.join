# 🚀 CodeRush

A modern, sleek web application built with Next.js and Supabase that brings together coding enthusiasts. CodeRush is a platform designed to create a vibrant community of developers and tech lovers.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38b2ac?logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-2.93.3-3ecf8e?logo=supabase)

## 🌐 Live Demo

**[Visit CodeRush Live](https://code-rush-join.vercel.app/)**

## ✨ Features

- **Beautiful UI/UX**: Modern, responsive design with smooth animations powered by Framer Motion
- **User Registration**: Easy signup process with email validation
- **Real-time Database**: Integration with Supabase for reliable data management
- **Smooth Animations**: Elegant transitions and motion effects for enhanced user experience
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Sleek dark theme optimized for the eyes

## 🛠️ Tech Stack

| Technology        | Version | Purpose                        |
| ----------------- | ------- | ------------------------------ |
| **Next.js**       | 16.1.6  | React framework for production |
| **React**         | 19.2.3  | UI library                     |
| **TypeScript**    | 5       | Type-safe JavaScript           |
| **Tailwind CSS**  | 4       | Utility-first CSS framework    |
| **Framer Motion** | 12.29.2 | Animation library              |
| **Supabase**      | 2.93.3  | Backend and database           |
| **ESLint**        | 9       | Code quality                   |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Supabase account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/HridaySonawane/CodeRush.join.git
   cd coderush
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
coderush/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home/landing page
│   └── api/
│       └── signup/
│           └── route.ts     # Signup API endpoint
├── lib/
│   └── supabase.ts          # Supabase client configuration
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🎨 Key Components

### Home Page (`app/page.tsx`)

The main landing page featuring:

- Eye-catching hero section with animated background effects
- Smooth staggered animations for content
- User signup form with email validation
- Real-time feedback messages
- Loading states for better UX

### Signup API (`app/api/signup/route.ts`)

Handles user registration with:

- Form validation (name and email required)
- Email format validation using regex
- Duplicate email detection
- Supabase database integration
- Error handling with meaningful messages

## 🔄 How It Works

1. **User visits the site** → Sees the beautiful hero section
2. **User fills signup form** → Enters name and email
3. **Form is validated** → Client-side validation ensures all fields are filled
4. **Data sent to API** → POST request to `/api/signup`
5. **Server validation** → Email format and uniqueness checked
6. **Database insertion** → User data stored in Supabase
7. **Feedback to user** → Success or error message displayed

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🗄️ Database Schema

The application uses a `members` table in Supabase with the following structure:

| Column     | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| id         | UUID      | Primary key (auto-generated) |
| name       | TEXT      | User's name                  |
| email      | TEXT      | User's email (unique)        |
| created_at | TIMESTAMP | Signup timestamp             |

## 🎯 Future Enhancements

- [ ] User authentication and login
- [ ] Member profile pages
- [ ] Social features (follow, messaging)
- [ ] Community challenges and competitions
- [ ] Blog/Articles section
- [ ] Leaderboards
- [ ] Integration with GitHub

## 📧 Contact & Support

For questions, suggestions, or bug reports, please reach out through:

- GitHub Issues: [CodeRush Issues](https://github.com/HridaySonawane/CodeRush.join/issues)
- Author: Hriday Sonawane

## 📄 License

This project is open source and available under the MIT License.

---

<div align="center">

**Made with ❤️ for the coding community**

[⬆ back to top](#-coderush)

</div>
