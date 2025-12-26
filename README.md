# Portfolio Website for Abdul Hanif Hashim

A clean, minimalist portfolio website inspired by modern academic and artist portfolios, featuring elegant typography and a sidebar navigation layout.

## 🎨 Design Philosophy

This design follows a refined, editorial aesthetic with:
- **Clean Typography**: Crimson Pro for headings (serif), Inter for body text (sans-serif)
- **Generous White Space**: Breathing room for content
- **Sidebar Navigation**: Fixed sidebar for easy navigation
- **Minimal Color**: Subtle accents, focus on content
- **Elegant Transitions**: Smooth hover effects and animations

## 📁 File Structure

```
portfolio/
├── index.html                    # Featured projects page
├── portfolio.html                # Complete portfolio grid
├── about.html                    # About page
├── contact.html                  # Contact information
├── data-bodies.html              # Sample detailed project page
├── miasma.html                   # Project template (customize)
├── phasing-mario-block.html      # Project template (customize)
├── memory-on-the-grid.html       # Project template (customize)
├── dept-economics-banner.html    # Project template (customize)
├── awards-ceremony-pamphlet.html # Project template (customize)
├── last-wing-standing.html       # Project template (customize)
└── styles.css                    # Complete stylesheet
```

## 🛠️ How to Customize

### 1. Replace Placeholder Images

The site currently uses placeholder images. Replace them with your actual project images:

```html
<!-- Current placeholder -->
<img src="https://via.placeholder.com/800x600/1a2a2a/00ff41?text=Data+Bodies" alt="Data Bodies">

<!-- Replace with your image -->
<img src="images/data-bodies-main.jpg" alt="Data Bodies installation view">
```

**Image Tips:**
- Use high-quality images (at least 1200px wide for detail pages)
- Optimize images with tools like TinyPNG or ImageOptim
- Maintain consistent aspect ratios for a cohesive look
- Use descriptive alt text for accessibility

### 2. Update Project Information

Edit each project HTML file to include:
- Project title and year
- Category/type of work
- Detailed description
- Technical information
- Multiple images if available

Use `data-bodies.html` as a reference template showing a fully fleshed-out project page.

### 3. Customize Contact Information

In `contact.html`, replace:
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

With your actual email, GitHub, LinkedIn, and Instagram links.

### 4. Personalize About Page

In `about.html`, customize:
- Your bio and artistic statement
- Skills and technical proficiencies
- Education details
- Personal interests and additional context

### 5. Adjust Color Scheme

Edit the CSS variables in `styles.css` to change colors:

```css
:root {
    --bg-primary: #ffffff;       /* Main background */
    --bg-secondary: #f8f8f8;     /* Sidebar background */
    --text-primary: #2c2c2c;     /* Main text */
    --text-secondary: #666666;   /* Secondary text */
    --text-light: #999999;       /* Light text */
    --accent: #3498db;           /* Link/accent color */
    --border: #e0e0e0;           /* Border color */
}
```

### 6. Typography Customization

The site uses Google Fonts:
- **Crimson Pro** - Elegant serif for headings
- **Inter** - Clean sans-serif for body text

To change fonts, update the Google Fonts import in each HTML file's `<head>` section.

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch as source
5. Site live at `https://yourusername.github.io/repo-name`

### Netlify (Free)
1. Drag and drop the folder to [netlify.com](https://netlify.com)
2. Instant deployment with HTTPS
3. Get a custom subdomain or connect your own domain

### Custom Web Host
Upload files via FTP to any web hosting service.

## 📱 Responsive Design

The layout automatically adapts:
- **Desktop (1024px+)**: Fixed sidebar, main content beside it
- **Tablet (768-1024px)**: Sidebar becomes horizontal header
- **Mobile (<768px)**: Single column layout, optimized navigation

## ✨ Features

- **Clean Layout**: Focus on content with minimal distractions
- **Smooth Animations**: Fade-in effects on scroll
- **Hover Effects**: Subtle image zoom on hover
- **Accessible**: Semantic HTML and proper alt text
- **Fast Loading**: Minimal dependencies, optimized CSS

## 🎯 Best Practices

1. **Image Organization**: Create an `images/` folder to keep files organized
2. **Consistent Naming**: Use lowercase with hyphens (e.g., `project-name.jpg`)
3. **File Size**: Keep images under 500KB each for fast loading
4. **Alt Text**: Always include descriptive alt attributes for images
5. **Testing**: Test on multiple devices and browsers before deploying

## 📐 Layout Structure

### Sidebar
- Fixed at 320px width on desktop
- Contains site name, tagline, navigation, and footer
- Converts to horizontal header on mobile

### Main Content
- Max width of 1200px for readability
- Generous padding and margins
- Responsive grid for project cards

## 🔧 Technical Details

- Pure HTML/CSS (no JavaScript required)
- Google Fonts loaded from CDN
- CSS Grid and Flexbox for layouts
- CSS animations for smooth transitions
- No build process needed

## 📝 Page Descriptions

- **index.html**: Featured works - your best projects
- **portfolio.html**: Complete portfolio in grid format
- **about.html**: Bio, skills, education, interests
- **contact.html**: Contact information and social links
- **Project pages**: Individual detailed pages for each work

## 🎨 Design Credits

Inspired by clean, academic portfolio designs like vigliensoni.com, focusing on content over decoration, with thoughtful typography and generous white space.

---

**Questions?** The design is straightforward to customize. Simply update text, swap images, and adjust colors to make it your own!
