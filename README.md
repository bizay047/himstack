# Himstack Pvt Ltd - Premium SaaS Website

A modern, premium SaaS website built with Next.js, React, Tailwind CSS, and Framer Motion for a leading EdTech company specializing in SAP solutions for educational institutions.

## Features

✨ **Modern UI/UX**
- Glassmorphism design with backdrop blur effects
- Smooth Framer Motion animations
- Responsive design (mobile-first approach)
- Dark theme with premium gradient accents
- Glowing effects and hover interactions

🚀 **Performance**
- Next.js 14+ with optimized builds
- Server-side rendering
- Image optimization
- Fast page transitions
- SEO-friendly structure

📱 **Fully Responsive**
- Mobile-first design
- Tablet and desktop layouts
- Touch-friendly interactions
- Adaptive typography

🎨 **Design System**
- Consistent color palette
- Reusable components
- Animation library
- Typography system
- Spacing utilities

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **3D Graphics**: Three.js (ready for integration)
- **Animation Framework**: GSAP (ready for integration)
- **Language**: TypeScript

## Project Structure

```
app/                    # Next.js app directory
├── layout.tsx          # Root layout
├── page.tsx            # Homepage
├── about/              # About page
├── services/           # Services page
├── projects/           # Projects showcase
├── team/               # Team page
└── contact/            # Contact page

components/             # React components
├── navbar.tsx          # Navigation bar
├── hero.tsx            # Hero section
├── card-grid.tsx       # Card grid component
├── project-grid.tsx    # Project showcase
├── team-grid.tsx       # Team members grid
├── stats.tsx           # Statistics section
├── footer.tsx          # Footer
├── scroll-progress.tsx # Scroll indicator
├── floating-shapes.tsx # Floating animations
└── mouse-follow.tsx    # Mouse follow gradient

lib/                    # Utilities
├── data.ts             # Static data and config
├── animations.ts       # Framer Motion animations
└── utils.ts            # Helper functions

styles/                 # Global styles
└── globals.css         # Tailwind + custom CSS

public/                 # Static assets
└── images/             # Image folder
    └── projects/       # Project images
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and install dependencies**
```bash
npm install
```

2. **Create environment file**
```bash
cp .env.local.example .env.local
```

3. **Update configuration**
Edit `.env.local` with your actual values:
- Logo URL
- Email service credentials
- Analytics ID
- API endpoints

4. **Run development server**
```bash
npm run dev
```

5. **Open in browser**
Navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Update Logo
- Edit `NEXT_PUBLIC_LOGO_URL` in `.env.local`
- Or update the RT logo in navbar.tsx line 25

### 2. Update Company Info
- Edit `lib/data.ts` for:
  - Navigation links
  - Services
  - Projects
  - Team members
  - Statistics

### 3. Update Colors
- Edit `tailwind.config.js` color palette
- Update CSS variables in `styles/globals.css`
- Primary: `#0284c7` (Sky Blue)
- Accent: `#f97316` (Orange)
- Dark: `#0f172a` (Navy)

### 4. Update Content
- Edit individual page files in `app/`
- Update component props
- Modify descriptions and titles

### 5. Add Images
- Place images in `public/images/`
- Update image URLs in data.ts
- Use Next.js Image component for optimization

### 6. Update Social Links
- Edit `components/footer.tsx`
- Add LinkedIn, GitHub, Twitter links
- Update in `components/floating-shapes.tsx`

## Image Placeholders

The website uses placeholder images from Unsplash. Replace with your own:

```tsx
// Example: Update team member images
image: 'https://images.unsplash.com/photo-xxxxx?w=400&h=400&fit=crop'
```

Create `public/images/` folders:
- `public/images/projects/` - Project screenshots
- `public/images/team/` - Team member photos
- `public/images/features/` - Feature images

## Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress before uploading
   - Use Next.js Image component

2. **Lazy Loading**
   - Images load on scroll
   - Components animate into view
   - Smooth transitions reduce jank

3. **SEO**
   - Update meta tags in layout.tsx
   - Add structured data
   - Optimize for keywords

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy with zero config

### Other Platforms

- **Netlify**: Works with Next.js
- **AWS Amplify**: Full support
- **Docker**: Include Dockerfile
- **Self-hosted**: Use `npm start` after build

## Email Integration

To enable contact form emails:

1. **EmailJS Setup**
   - Create account at emailjs.com
   - Get Service ID, Template ID, Public Key
   - Add to `.env.local`

2. **Update Contact Form**
   - Uncomment email code in `app/contact/page.tsx`
   - Test with form submission

## Analytics

Add Google Analytics:

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

<Analytics />
```

## Maintenance

### Regular Updates
- Update Next.js and dependencies
- Monitor for security patches
- Test responsive design monthly
- Update content as needed

### Monitoring
- Track page performance
- Monitor error logs
- Check analytics
- User feedback

## Support & Issues

- Create issues on GitHub
- Check documentation
- Review component props
- Test in different browsers

## License

This project is proprietary to Himstack Pvt Ltd. All rights reserved.

## Credits

- Design inspired by modern SaaS companies
- Icons from Lucide React
- Animations powered by Framer Motion
- Images from Unsplash

---

**Built with ❤️ for educational excellence**
