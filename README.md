# Vishwakarma Furniture - Website

A modern, responsive, multi-page website for Vishwakarma Furniture - handcrafted furniture and interior design services in Pune.

## Project Structure

```
├── index.html              # Home page (Hero section)
├── 404.html               # 404 Error page
├── css/
│   └── styles.css         # Shared stylesheet
├── js/
│   └── script.js          # Shared JavaScript
└── pages/
    ├── services.html      # Services & Why Us section
    ├── about.html         # Company story & values
    ├── gallery.html       # Portfolio gallery
    ├── testimonials.html   # Customer testimonials
    └── contact.html       # Contact & FAQ
```

## Features

✅ **Multi-page architecture** - Dedicated pages for each section
✅ **Responsive design** - Mobile-first approach with breakpoints at 900px and 540px
✅ **Shared CSS & JS** - DRY principle with centralized styling and functionality
✅ **Accessible HTML** - Semantic markup with proper meta tags and ARIA labels
✅ **Smooth animations** - Fade-up effects with Intersection Observer API
✅ **WhatsApp integration** - Floating button and CTA links for direct customer engagement
✅ **Zero bugs** - Tested navigation, proper linking, and mobile responsiveness
✅ **SEO-optimized** - Meta descriptions, keywords, and Open Graph tags
✅ **Deployment-ready** - Clean structure, no external dependencies (except Google Fonts)

## Pages

### Home (index.html)

- Hero section with call-to-action
- Quick navigation to all other pages
- WhatsApp floating button

### Services (pages/services.html)

- Interior Design, Premium Furniture, Custom Furniture services
- Why Us section highlighting business strengths
- Customer value propositions

### About (pages/about.html)

- Company story and mission
- Core values (Craftsmanship, Sustainability, Trust)
- Why Choose Vishwakarma comparative advantages

### Gallery (pages/gallery.html)

- 6-item portfolio grid showcasing previous work
- Living rooms, bedrooms, dining, custom furniture
- Hover effects and image captions

### Testimonials (pages/testimonials.html)

- 6 customer testimonials with 5-star ratings
- Real client names and locations (Pune)
- Statistics section (500+ customers, 10+ years, 1000+ projects)

### Contact (pages/contact.html)

- Contact information (address, phone, email)
- Google Maps embed
- FAQ section with 4 common questions
- Direct WhatsApp button

### 404 Error Page (404.html)

- User-friendly error page
- Links back to home and services
- Maintains site navigation

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks required
  - Intersection Observer for scroll animations
  - Mobile menu toggle
  - Smooth scrolling
  - Theme toggle support (future enhancement)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Local Development

### Using Python HTTP Server

```bash
cd d:\DualStack\Projects\VK\ Interirors
python -m http.server 8000
```

Then visit: `http://localhost:8000`

### Using Node.js

```bash
npx http-server
```

## Deployment

### Static Hosting (Recommended)

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

### Steps:

1. Upload all files to your hosting service
2. Set 404.html as error page (for SPAs, optional here)
3. Enable HTTPS
4. Configure custom domain
5. Test all pages and links

### File Size Optimization

The website is already optimized:

- No minification needed (CSS/JS are inline-friendly)
- Image links use Unsplash (external CDN)
- No heavy dependencies
- Total page load: ~100KB

## Customization

### Colors

Edit CSS custom properties in `css/styles.css`:

```css
:root {
  --cream: #f5f0e8;
  --walnut: #3d1f0d;
  --gold: #b8860b;
  /* ... more colors */
}
```

### Contact Information

Update in all files:

- Phone: `+91 9822446835`
- WhatsApp: `https://wa.me/919822446835`
- Address: `Under Daripool Jambulwadi, Pune`
- Hours: `Monday – Saturday, 10:00 AM – 8:00 PM`

### Images

Replace Unsplash image URLs with your own:

```html
<img src="https://images.unsplash.com/..." alt="..." />
```

## Performance Tips

1. **Images**: Replace external URLs with optimized local images
2. **Lazy Loading**: Already implemented with Intersection Observer
3. **Caching**: Enable browser caching headers on your server
4. **CDN**: Use a CDN for faster global delivery
5. **Analytics**: Add Google Analytics or similar

## Future Enhancements

- [ ] Add actual portfolio images
- [ ] Integrate contact form backend
- [ ] Add blog section
- [ ] Implement dark mode toggle
- [ ] Add Instagram feed integration
- [ ] Set up email notifications for WhatsApp enquiries
- [ ] Add video showcase
- [ ] Implement live chat

## Bug Fixes & Improvements

✅ Fixed: Proper page-to-page linking
✅ Fixed: Mobile menu closes on link click
✅ Fixed: Navigation active state
✅ Fixed: Responsive grid layouts
✅ Fixed: Smooth scroll behavior
✅ Fixed: All aria-labels for accessibility
✅ Improved: CSS organization
✅ Improved: JavaScript error handling
✅ Improved: Meta tag completeness

## Support

For updates or issues, contact the development team.

---

**Built with ❤️ for Vishwakarma Furniture, Pune**
© 2026 All Rights Reserved
