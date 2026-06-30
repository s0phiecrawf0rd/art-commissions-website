# Art Commissions Website

## Overview
A professional portfolio and commission booking website for an artist specializing in:
- Oil Paintings
- Acrylic Paintings
- Watercolour Paintings
- Drawings (Pencil & Ink)
- Digital Art

## Tech Stack
- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Hosting**: Azure Static Web Apps
- **Build**: Node.js

## Features

✨ **Home Page** - Hero section with featured works
✨ **Portfolio Gallery** - Filterable by medium (Oil, Acrylic, Watercolour, Digital, Drawing)
✨ **Pricing Plans** - Tiered pricing for different commission types
✨ **About Page** - Artist background and specializations
✨ **Contact & Support** - Commission inquiry form, FAQs, social links
✨ **Responsive Design** - Mobile-friendly across all devices
✨ **Performance** - Optimized for speed and SEO

## Project Structure
```
art-commissions-website/
├── app/
│   ├── globals.css
│   ├── layout.jsx
│   ├── page.jsx
│   ├── portfolio/
│   ├── pricing/
│   ├── about/
│   └── contact/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── FeaturedWorks.jsx
│   ├── ProcessSection.jsx
│   ├── TestimonialsSection.jsx
│   ├── PortfolioGrid.jsx
│   ├── PricingCard.jsx
│   └── ContactForm.jsx
├── azure/
│   ├── deploy.json
│   └── DEPLOYMENT.md
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/s0phiecrawf0rd/art-commissions-website.git
cd art-commissions-website
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

### Build for production
```bash
npm run build
npm start
```

### Deploy to Azure
See [azure/DEPLOYMENT.md](./azure/DEPLOYMENT.md) for detailed instructions.

## Customization

### Update Your Information
1. **Contact Details** - Edit `app/contact/page.jsx`
2. **Social Media Links** - Update in `components/Header.jsx` and `components/Footer.jsx`
3. **Pricing** - Modify `app/pricing/page.jsx`
4. **Portfolio Images** - Replace placeholder images with your actual artwork
5. **Colors** - Adjust in `tailwind.config.js`

### Add Your Artwork
1. Replace placeholder images in `components/FeaturedWorks.jsx`
2. Update portfolio items in `components/PortfolioGrid.jsx`
3. Add high-quality images to `/public` directory

## Pages

- **Home** (`/`) - Landing page with featured works
- **Portfolio** (`/portfolio`) - Full gallery with filtering by medium
- **Pricing** (`/pricing`) - Commission pricing plans
- **About** (`/about`) - Your artistic background
- **Contact** (`/contact`) - Commission inquiry form & FAQs

## Color Scheme
- **Primary**: #8B4513 (Saddle Brown)
- **Secondary**: #D2691E (Chocolate)
- **Accent**: #F4A460 (Sandy Brown)

## Performance Tips
1. Optimize images before uploading
2. Use Next.js Image component for better performance
3. Consider CDN for image delivery
4. Enable caching in Azure

## Future Enhancements
- Backend API for form submissions
- Payment integration (Stripe/PayPal)
- Commission tracking dashboard
- Email notifications
- Social media feed integration
- Blog section

## Contributing
Feel free to fork this repository and customize it for your needs.

## License
MIT License - Feel free to use this template for your portfolio.

## Support
For Azure deployment issues, check the [Azure Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)

Happy commissioning! 🎨
