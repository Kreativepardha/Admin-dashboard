# ✨ Admin Dashboard – React + Firebase + Tailwind + ShadCN

A full-featured Admin Dashboard application built using **React**, **Firebase Auth**, **Tailwind CSS**, **ShadCN UI**, and **React Router DOM**.

> ✅ Includes Login, Dashboard, and Form pages  
> 🔐 Auth with Firebase + Google OAuth  
> 📊 CRUD on User data (mock JSON)  
> 🎨 Styled with Tailwind + modern UI components  
> 🚀 Deployed live on Vercel

---

## 🔗 Live Demo

👉 [Click here to view the deployed app](https://your-vercel-link.vercel.app)

---

## 📸 Screenshots

| Login Page | Dashboard | Add/Edit Modal |
|------------|-----------|----------------|
| ![login](./screenshots/login.png) | ![dashboard](./screenshots/dashboard.png) | ![form](./screenshots/form.png) |

---

## 🛠️ Features

### ✅ Login Page
- Firebase Email/Password Login
- Google OAuth with Firebase
- Basic form validation with Zod
- Toast notifications with `sonner`

### ✅ Dashboard Page
- Displays user data in a styled table
- Supports `Edit` / `Delete` operations
- Uses mock JSON as sample DB (can be extended to Firebase/Supabase)
- Modal for editing/adding users
- Fully responsive and styled with Tailwind & ShadCN components

### ✅ Form Page
- Standalone route to add new entries
- Clean form structure with input validations
- Zod for schema-based validation

### ✅ Routing & Structure
- Uses `react-router-dom` for navigation
- `PrivateRoute` component protects dashboard
- Componentized layout for maintainability

---

## 🧠 Bonus Highlights

- ✅ **Firebase Authentication** (email + Google)
- ✅ **Open source UI kit (ShadCN + Tabler Icons)**
- ✅ Deployed on **Vercel**
- ✅ Floating Dock UI for quick nav (bonus UI feature)
- ✅ Glassmorphism & animated elements
- ✅ AI-Powered suggestions for validation & enhancements (used ChatGPT for test cases/design)

---

## 🏗️ Tech Stack

- React + Vite
- Firebase Auth
- Tailwind CSS v4 + ShadCN
- React Router DOM
- Sonner (toast)
- Zod (form validation)
- TypeScript

---

## 📁 Folder Structure

```bash
src/
├── components/
│   ├── AuthButtons.tsx
│   ├── ErrorBoundary.tsx
│   ├── LoginForm.tsx
│   └── ui/
├── constants/
│   └── worldMapdots.ts
├── pages/
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   └── Form.tsx
├── routes/
│   ├── AppRoutes.tsx
│   └── PrivateRoutes.tsx
├── services/
│   ├── authService.ts
│   └── firebase.ts
├── hooks/
│   └── useAuth.ts
├── utils/
│   ├── validation.ts
│   └── ...
└── App.tsx
