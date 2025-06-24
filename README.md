![](https://github.com/volodymyrshkimba/learn-lingo/blob/main/public/favicon.png?raw=true)

# Learn Lingo

A web application for a company that offers online language learning services with professional tutors. Users can browse the list of available teachers, filter them by language, student level, and price, save favorites, and book trial lessons.

## 🔗 Live Demo

➡️ <a href="https://learn-lingo-sooty.vercel.app/" target="_blank" rel="noopener noreferrer">View App</a>

---

## 📌 About the Project

This application is designed for a company that connects users with online language tutors. It provides an intuitive interface for discovering, filtering, and booking trial lessons with tutors.  
🖥️ The app is fully responsive and adapts to different screen sizes with well-designed breakpoints for mobile, tablet, and desktop views.  
🌈 Click on the logo to change the theme.

---

## ⚙️ Features

- **Home Page**:
  - Brief overview of the platform and its advantages.
  - Call-to-action button linking to the teachers page.

- **Teachers Page**:
  - List of tutors with:
    - Filtering by language, student level, and price per hour.
    - Displaying 4 tutors initially; more can be loaded on demand.
    - Expandable cards with detailed tutor info and reviews.
    - Button to book a trial lesson via a modal form.

- **Favorites Page** (private):
  - Available only to authenticated users.
  - Displays a list of saved (favorite) tutors.

- **Authentication**:
  - Register, login, logout via **Firebase Auth**.
  - Form validation using **react-hook-form** and **Yup**.
  - Auth windows close on ✖️ click.

- **Favorites Handling**:
  - Saved to **LocalStorage**.
  - Persistent after page reload.
  - Toggle heart button to add/remove favorites.
  - Tooltip prompts non-authenticated users to log in.

---

## 🛠️ Technologies

- **React**
- **React Router**
- **React Hook Form** + **Yup**
- **Firebase Authentication**
- **Firebase Realtime Database**
- **Vite** — as bundler
- **CSS Modules** or custom styling

---

## 🚀 Installation

```bash
git clone https://github.com/volodymyrshkimba/learn-lingo.git
cd learn-lingo
npm install
npm run dev
