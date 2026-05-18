# 🗺️ Site Map & Feature Overview

## 📍 URL Structure

```
party-room-app.com/
│
├── / (Landing Page)
│   ├── VibeInParty Card → /vibeinparty
│   └── Neerala's Kitchen Card → /neeralaSkitchen
│
├── /vibeinparty (VibeInParty Main Site)
│   ├── Navigation Bar (Fixed)
│   │   ├── Logo (← Back)
│   │   ├── #menu
│   │   ├── #services
│   │   ├── #ratings
│   │   └── #contact
│   │
│   ├── Hero Section
│   │   ├── Video background
│   │   ├── Main title & subtitle
│   │   ├── CTA button
│   │   └── Scroll indicator
│   │
│   ├── #menu - Menu Section
│   │   ├── 6 Party Packages
│   │   │   ├── Premium Party Pack ($299)
│   │   │   ├── VIP Experience ($599)
│   │   │   ├── Standard Celebration ($199)
│   │   │   ├── Ultimate Bash ($999)
│   │   │   ├── Corporate Event ($1299)
│   │   │   └── Birthday Bliss ($449)
│   │   └── Filters: Popular, Best Value, Luxury, etc.
│   │
│   ├── #services - Services Section
│   │   ├── 🎉 Event Planning
│   │   │   ├── Custom themes
│   │   │   ├── Timeline management
│   │   │   └── 24/7 support
│   │   ├── 🍽️ Catering
│   │   ├── 🎵 Entertainment
│   │   ├── 🎈 Decorations
│   │   ├── 📸 Photography
│   │   └── 🏢 Venue Setup
│   │
│   ├── #ratings - Reviews Section
│   │   └── 6 Customer Reviews
│   │       ├── 5-star ratings
│   │       ├── Customer testimonials
│   │       ├── Author names & dates
│   │       └── Avatar initials
│   │
│   └── Footer
│       ├── Company info
│       ├── Quick links
│       ├── Contact info
│       └── Back to brands button
│
└── /neeralaSkitchen (Neerala's Kitchen)
    ├── Navigation Bar (Fixed)
    │   ├── Logo (← Back)
    │   ├── #menu
    │   ├── #services
    │   ├── #ratings
    │   └── #contact
    │
    ├── Hero Section
    │   ├── Video background
    │   ├── Main title & subtitle
    │   ├── CTA button (Order Now)
    │   └── Scroll indicator
    │
    ├── #menu - Signature Menu
    │   ├── 📌 Starters (3 items)
    │   │   ├── Samosa Trio ($8)
    │   │   ├── Tandoori Chicken Bites ($12)
    │   │   └── Paneer Tikka ($10)
    │   │
    │   ├── 🍛 Main Courses (3 items)
    │   │   ├── Butter Chicken ($16)
    │   │   ├── Palak Paneer ($14)
    │   │   └── Biryani ($18)
    │   │
    │   ├── 🍞 Breads & Sides (3 items)
    │   │   ├── Naan ($4)
    │   │   ├── Garlic Naan ($5)
    │   │   └── Dal Makhani ($9)
    │   │
    │   └── 🍮 Desserts (3 items)
    │       ├── Gulab Jamun ($6)
    │       ├── Kheer ($5)
    │       └── Mango Lassi ($6)
    │
    ├── #services - Our Services
    │   ├── 🍴 Dine-In Service
    │   ├── 🥡 Takeaway
    │   ├── 🎂 Catering
    │   ├── 🚗 Home Delivery
    │   ├── 🎉 Special Events
    │   └── 👨‍🍳 Cooking Classes
    │
    ├── #ratings - Customer Reviews
    │   └── 6 Customer Reviews
    │       ├── 5-star ratings
    │       ├── Food testimonials
    │       ├── Customer names & dates
    │       └── Avatar initials
    │
    └── Footer
        ├── Company info
        ├── Quick links
        ├── Contact info
        └── Back to brands button
```

---

## 🎨 Design System

### Color Themes

**VibeInParty (Purple)**
```
Primary Color:    #667eea
Secondary Color:  #764ba2
Light BG:         #f5f5f5
Text:            #1a1a1a
```

**Neerala's Kitchen (Orange)**
```
Primary Color:    #f7931e
Secondary Color:  #d4a574
Light BG:         #fef8f3
Text:            #3d2817
```

### Typography Stack
- **Headers**: Playfair Display (serif, 400/700/900)
- **Body**: Poppins (sans-serif, 300/400/500/600/700)

---

## 📱 Responsive Grid Layouts

### Desktop (>1024px)
```
Menu Cards:     3 columns
Service Cards:  3 columns
Rating Cards:   3 columns
```

### Tablet (768px-1024px)
```
Menu Cards:     2 columns
Service Cards:  2 columns
Rating Cards:   2 columns
```

### Mobile (<768px)
```
All Sections:   1 column
Nav Links:      Smaller spacing
Hero Text:      Reduced font sizes
Cards:          Full width with padding
```

---

## 🎬 Video Specifications

### Hero Section Video
- **Format**: MP4 (H.264 codec)
- **Duration**: 10-30 seconds (looped)
- **Aspect Ratio**: 16:9
- **Resolution**: 1080p recommended, 720p minimum
- **File Size**: 2-5MB (optimized)
- **Attributes**: autoPlay, muted, loop, playsInline

### Recommended Video Settings
```bash
# Encoding command
ffmpeg -i input.MOV \
  -c:v libx264 \
  -preset medium \
  -crf 28 \
  -s 1920x1080 \
  -c:a aac \
  -b:a 128k \
  output.mp4
```

---

## 🎯 Interactive Elements

### Hover Effects
| Element | Effect |
|---------|--------|
| Nav Links | Gradient underline appears |
| Menu Cards | Lift up, shadow enhances |
| Service Cards | Lift up, border color appears |
| Rating Cards | Slight lift, shadow change |
| CTA Buttons | Scale up, shadow increases |

### Scroll Effects
| Section | Effect |
|---------|--------|
| Hero Content | Parallax (slower than scroll) |
| Menu Cards | Fade-in on view |
| Service Cards | Fade-in with delay |
| Rating Cards | Fade-in staggered |

### Animations
- **Page Load**: Fade-in from top (hero), bottom (cards)
- **Scroll**: Parallax hero, staggered card reveals
- **Hover**: 0.3s smooth transitions
- **Float**: Continuous floating motion on icons

---

## 📊 Content Strategy

### VibeInParty Content Model
```
Landing Page
├── Hero: Brand introduction
├── Menu: 6 service packages
│   └── Each with price, description, tags
├── Services: 6 service categories
│   └── Each with icon, features list
├── Ratings: 6 customer reviews
│   └── Each with stars, quote, author info
└── Footer: Contact & navigation
```

### Neerala's Kitchen Content Model
```
Landing Page
├── Hero: Brand introduction
├── Menu: 4 categories × 3 items each
│   └── Each with price, description, dietary tags
├── Services: 6 service types
│   └── Each with icon, features list
├── Ratings: 6 customer reviews
│   └── Each with stars, quote, author info
└── Footer: Contact & navigation
```

---

## 🔗 Navigation Flow

### From Landing Page
```
Landing Page (/)
├── Click "VibeInParty Card" → /vibeinparty
└── Click "Neerala's Kitchen Card" → /neeralaSkitchen
```

### From Brand Sites
```
/vibeinparty
├── Click Navigation Links → Smooth scroll to section
├── Click "Back" Logo → / (Landing Page)
└── Click "Back to Brands" → / (Landing Page)

/neeralaSkitchen
├── Click Navigation Links → Smooth scroll to section
├── Click "Back" Logo → / (Landing Page)
└── Click "Back to Brands" → / (Landing Page)
```

---

## 📋 Feature Checklist

### Core Features ✅
- [x] Multi-page routing (React Router)
- [x] Hero section with video background
- [x] Parallax scroll effect
- [x] Smooth anchor scrolling
- [x] Fixed navigation bar
- [x] Menu with items and pricing
- [x] Services showcase
- [x] Customer ratings & reviews
- [x] Professional footer
- [x] Responsive mobile design

### Animations ✅
- [x] Page load animations
- [x] Scroll-based reveals
- [x] Hover effects on cards
- [x] Smooth transitions
- [x] Floating elements
- [x] Staggered card animations
- [x] Parallax scroll parallax

### Responsive Design ✅
- [x] Mobile layout (<768px)
- [x] Tablet layout (768px-1024px)
- [x] Desktop layout (>1024px)
- [x] Touch-friendly buttons
- [x] Optimized images
- [x] Readable typography
- [x] Accessible navigation

### Performance ✅
- [x] No external dependencies (except React)
- [x] CSS-only animations (no JavaScript)
- [x] Optimized images & videos
- [x] Clean, minified CSS
- [x] Fast load times
- [x] Smooth 60fps animations

---

## 🚀 Deployment Paths

### Domain Structure (Recommended)
```
vibeinparty.com        → /vibeinparty
neeralaakitchen.com    → /neeralaSkitchen
partyroom.com          → / (Landing)

OR

partyroom.com/vibeinparty
partyroom.com/neerala
partyroom.com/
```

### Subdomain Structure (Alternative)
```
vibeinparty.partyroom.com
neerala.partyroom.com
partyroom.com
```

---

## 📈 Scaling Opportunities

### Current (V1)
- 2 brands
- 1 landing page
- Per-brand: hero, menu, 6 services, 6 reviews

### V1.5 (Easy Additions)
- [ ] Contact forms (Netlify Forms)
- [ ] Image galleries
- [ ] Testimonial videos
- [ ] Google Maps integration
- [ ] Social media links

### V2 (Medium Effort)
- [ ] Blog section
- [ ] Booking system
- [ ] Member accounts
- [ ] Admin dashboard
- [ ] CMS integration

### V3 (Advanced)
- [ ] E-commerce (Stripe)
- [ ] Reservation system
- [ ] User authentication
- [ ] Analytics dashboard
- [ ] Mobile app version

---

## 📞 Support Resources

### Official Docs
- [React](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite](https://vitejs.dev)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

### Tools Used
- **Font**: Google Fonts (Playfair Display, Poppins)
- **Icons**: Unicode/Emoji (🎉, 🍽️, etc.)
- **Videos**: MP4 format, any CDN
- **Hosting**: Vercel, Netlify, GitHub Pages

---

**Site Map Version**: 1.0
**Last Updated**: May 2024
**Status**: Ready for Deployment ✅
