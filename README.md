# Party Room & Catering Platform 🎭🍽️

A premium, dual-brand web application for booking interactive party rooms and fine catering services. This platform hosts two distinct experiences: **VibeInParty Theater** and **Neerala's Kitchen**.

## 🚀 Overview

This project is a high-performance React application built with **React 19** and **Vite**. It features a modern, immersive UI with video backgrounds, tilt-based interactive cards, and smooth scroll animations.

### 1. VibeInParty Theater 🎉
India's most vibrant party room booking platform, located near Medipally, Hyderabad.
- **Themed Rooms:** Neon Lounge, Royal Ballroom, Midnight Club, and Garden Suite.
- **Features:** Programmable LED shows, DJ-grade sound systems, and Insta-worthy décor.
- **Packages:** Tiered pricing (Basic, Deluxe, VIP) with integrated booking.
- **Booking System:** Real-time slot selection and automated request handling via Netlify Forms.

### 2. Neerala's Kitchen 🍽️
A premium catering service bringing home-style warmth to every table.
- **Extensive Menu:** From gourmet burgers and thick shakes to massive "Monster" chicken buckets.
- **Services:** Full-course catering, corporate events, and home-style meal prep.
- **Visuals:** Immersive "Kitchen Vibes" video showcase.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, React Router 7
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (Custom properties, Flexbox/Grid, Keyframe animations)
- **Integrations:** 
  - **Netlify Forms:** For handling booking inquiries without a dedicated backend.
  - **Google Maps API:** For location services.
  - **Intersection Observer API:** For scroll-triggered animations.

---

## 📁 Project Structure

```text
├── public/                 # Static assets (Videos, Logos, Icons)
├── src/
│   ├── assets/            # Project-specific images/svgs
│   ├── BrandSelection.jsx # Multi-brand landing page (The "Entry" point)
│   ├── VibeInParty.jsx    # Party room booking application
│   ├── NeeralasKitchen.jsx# Catering service showcase
│   ├── VideoCard.jsx      # Reusable interactive video component
│   ├── App.jsx            # Routing configuration
│   └── main.jsx           # Application entry point
├── sync-infinityfree.js   # Custom deployment script for FTP/Web hosting
└── vite.config.js         # Vite configuration
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the local development server:
```bash
npm run dev
```

### Build
Generate a production-ready build in the `dist/` folder:
```bash
npm run build
```

---

## 🚢 Deployment

The project includes a custom deployment script `sync-infinityfree.js` designed for FTP-based hosting (like InfinityFree or Hostinger).

To deploy:
1. Ensure your `.htaccess` and FTP credentials are configured.
2. Run the deployment command:
   ```bash
   npm run deploy
   ```

---

## ✨ Features & UI

- **Tilt Effect:** Interactive 3D tilt on brand selection cards.
- **Glassmorphism:** Modern UI elements with blurred backgrounds and neon accents.
- **Mobile First:** Fully responsive design across all devices.
- **Lead Capture:** Robust booking forms with validation and automated email alerts.

© 2026 Party Room India. Built with 🎉 for every celebration.
