# Latvian Mathematics Teacher Website - Project Specification

## Executive Summary

A comprehensive static educational website for Sintija, a Latvian mathematics teacher, showcasing her credentials, course offerings, educational materials, and video content. The project serves as a professional platform for students to access mathematics learning resources, course materials, and contact information.

## Project Overview

### Purpose
- Create a professional web presence for a Latvian mathematics educator
- Provide access to comprehensive mathematics course materials 
- Offer interactive educational resources and video content
- Enable student-teacher communication through contact forms
- Showcase teaching credentials and experience

### Target Audience
- Mathematics students (secondary and higher education levels)
- Students seeking private tutoring in mathematics
- Educational institutions and colleagues
- Parents of students needing mathematics support

### Core Value Proposition
Professional mathematics education with comprehensive materials, personalized instruction, and accessible digital resources in Latvian language.

## Technical Architecture

### Frontend Stack
- **HTML5**: Semantic markup with proper accessibility attributes
- **CSS3**: Modern CSS with custom properties (CSS variables) and responsive design
- **Vanilla JavaScript**: No framework dependencies, progressive enhancement approach
- **External Libraries**:
  - Font Awesome 6.0.0 (icons)
  - Google Fonts (Inter typography)
  - EmailJS (contact form functionality)

### Backend Infrastructure
- **Node.js HTTP Server**: Custom static file server (server.js)
- **MIME Type Support**: Handles HTML, CSS, JS, images (PNG, JPG, WebP), PDFs, plain text
- **File Serving**: Static file delivery from mathwebpage directory
- **Logo Asset Management**: Responsive logo serving from root logo directory

### Deployment & Hosting
- **Vercel Configuration**: Ready for serverless deployment
- **Local Development**: Node.js server on port 3000
- **Performance Optimization**: WebP image format support, lazy loading, preloading

## Content Structure & Information Architecture

### Page Sections

#### 1. Hero Section (`#home`)
- **Purpose**: First impression and value proposition
- **Content**: 
  - Animated title with typewriter effect: "Laipni lūdzam matemātikas izcilībā"
  - Descriptive subtitle about mathematics learning approach
  - Call-to-action buttons linking to courses and videos
  - Background mathematics image (backimage.png)
- **Features**: Scroll-triggered animations, responsive layout

#### 2. About Section (`#about`)
- **Purpose**: Teacher credentials and personal introduction  
- **Content**:
  - Personal introduction for Sintija
  - Educational background: University of Latvia Mathematics and Physics Faculty
  - Experience: 10+ years private tutoring, 6 years school teaching
  - Professional photo (sintija.jpg) with hover effects
- **Layout**: Two-column grid (text + image)

#### 3. Courses Section (`#courses`)
- **Purpose**: Showcase mathematics course offerings
- **Content Structure**:
  - **Main Course**: Matemātiskā analīze - Pilnais kurss
  - **Course Parts**:
    1. **Part 1** - Pamati un robežas (Limits and fundamentals)
    2. **Part 2.1** - Atvasinājumi (Derivatives) 
    3. **Part 2.2** - Integrāļi (Integrals)
  - **Metadata**: Difficulty levels, lesson counts (54 total lessons)
- **Interactive Elements**: Expandable course details, enrollment alerts

#### 4. Materials Section (`#materials`)
- **Purpose**: Provide downloadable and interactive learning resources
- **Categories**:
  1. **PDF Materials**:
     - Part 1.pdf - Pamati un robežas 
     - Part 2.1.pdf - Atvasinājumi
     - Part 2.2.pdf - Integrāļi
     - Text viewer (text_viewer.html) for online reading
  2. **Practice Problems**: Mock downloadable worksheets and problem sets
  3. **Interactive Tools**: External links to mathematical calculators and visualizers
- **Functionality**: Direct PDF downloads, modal alerts for placeholder content

#### 5. Videos Section (`#videos`)
- **Purpose**: Showcase educational video content and playlists
- **Content**:
  - **Individual Videos**: 4 embedded YouTube videos covering key topics
    - Funkciju robežas (Function limits)
    - Atvasinājumu aprēķināšanas metodes (Derivative calculation methods)
    - Integrāļu aprēķināšanas tehnikas (Integration techniques)  
    - Optimizācijas uzdevumi (Optimization problems)
  - **Playlists**: 3 organized video collections
    - 18 videos: Matemātiskās analīzes pamati
    - 24 videos: Atvasinājumu teorija un prakse  
    - 20 videos: Integrāļu aprēķināšana
- **Features**: Lazy loading, responsive video embeds, playlist navigation

#### 6. Contact Section (`#contact`)
- **Purpose**: Enable direct communication with the teacher
- **Contact Methods**:
  - **Email**: mat.skol@inbox.lv
  - **Social Links**: YouTube channel, Facebook profile
- **Contact Form Features**:
  - Name and email validation
  - Subject selection (dropdown with 4 options)
  - Message textarea
  - EmailJS integration for form submission
  - Success/error feedback with localized Latvian messages
- **Form Processing**: Client-side validation, EmailJS service integration

## Visual Design System

### Typography
- **Primary Font**: Inter (Google Fonts)
  - Weights: 300, 400, 500, 600, 700
  - Usage: All interface text, headings, body content
- **Monospace Font**: JetBrains Mono (in text viewer)
  - Usage: Mathematical expressions, code snippets

### Color Palette
```css
--primary-color: #2563eb (Blue)
--secondary-color: #1e40af (Darker Blue)  
--accent-color: #3b82f6 (Lighter Blue)
--text-primary: #1f2937 (Dark Gray)
--text-secondary: #6b7280 (Medium Gray)
--text-light: #9ca3af (Light Gray)
--background: #ffffff (White)
--background-alt: #f8fafc (Light Gray)
```

### UI Components

#### Buttons
- **Primary**: Blue background, white text, hover effects with elevation
- **Secondary**: Transparent with blue border, transforms to filled on hover
- **Interactive States**: Hover animations, smooth transitions, shadow effects

#### Cards
- **Course Cards**: White background, subtle shadows, hover elevation effects
- **Material Cards**: Category-based grouping with icon headers
- **Video Cards**: Embedded iframes with responsive aspect ratios

#### Navigation
- **Header**: Fixed position, glassmorphism effect with backdrop blur
- **Mobile Navigation**: Hamburger menu with slide-out panel
- **Logo System**: Responsive WebP/PNG with multiple density support
- **Smooth Scrolling**: JavaScript-powered navigation between sections

## Interactive Features & User Experience

### JavaScript Functionality

#### Core Interactions
1. **Navigation**:
   - Hamburger menu toggle for mobile
   - Smooth scroll navigation between sections  
   - Active link highlighting with hover effects

2. **Scroll Effects**:
   - Header background opacity changes on scroll
   - Intersection Observer for card animations
   - Back-to-top button with dynamic visibility

3. **Content Interactions**:
   - Course enrollment alerts (placeholder)
   - Video play button interactions  
   - Material download simulation
   - Form submission with EmailJS

4. **Loading & Animation**:
   - Page loading screen with spinning mathematics symbol
   - Typewriter effect for hero title
   - Fade-in animations for cards and sections

#### Form Handling
- **EmailJS Integration**: 
  - Service ID: service_gqhbhcj
  - Template ID: template_mrtypfh
  - Client validation and success feedback
  - Error handling with Latvian language messages

### Responsive Design Approach

#### Breakpoints
- **Desktop**: 1200px+ (full grid layouts, sidebar navigation)
- **Tablet**: 768px - 1199px (adjusted grid columns, maintained sidebar)  
- **Mobile**: < 768px (single column, hamburger navigation, simplified layouts)
- **Small Mobile**: < 480px (reduced font sizes, compact spacing)

#### Mobile Optimizations
- Hamburger navigation with full-screen menu
- Single-column layouts for hero, about, and contact sections
- Responsive video embeds and image scaling
- Touch-friendly button sizes and spacing
- Optimized font sizes for readability

## File Structure & Organization

```
mathpage/
├── mathwebpage/           # Main website directory
│   ├── index.html        # Main website page
│   ├── styles.css        # Main stylesheet  
│   ├── script.js         # Main JavaScript functionality
│   ├── text_viewer.html  # Course material viewer
│   ├── sintija.jpg       # Teacher photo
│   ├── backimage.png     # Hero background image
│   ├── Part 1.pdf        # Course material - Limits
│   ├── Part 2.1.pdf      # Course material - Derivatives
│   ├── Part 2.2.pdf      # Course material - Integrals
│   ├── course_part1_limits.txt       # Text version - Limits
│   ├── course_part2_1_derivatives.txt # Text version - Derivatives  
│   ├── course_part2_2_integrals.txt   # Text version - Integrals
│   └── agents/           # AI agent configurations
├── logo/                 # Logo assets (WebP/PNG, multiple densities)
├── server.js             # Node.js static file server
├── vercel.json           # Vercel deployment configuration
├── CLAUDE.md             # Project documentation  
└── PROJECT_SPECIFICATION.md # This specification
```

## Educational Content Management

### Course Material Structure

#### Part 1: Pamati un robežas (Limits and Fundamentals)
- **Topics**: Function concepts, limits, continuity, limits at infinity
- **Format**: PDF + plain text versions
- **Pedagogical Approach**: Step-by-step concept building

#### Part 2.1: Atvasinājumi (Derivatives)
- **Topics**: Derivative definition, differentiation rules, higher-order derivatives, optimization
- **Format**: PDF + plain text versions  
- **Applications**: Extrema finding, optimization problems

#### Part 2.2: Integrāļi (Integrals)
- **Topics**: Indefinite integrals, definite integrals, integration methods, applications
- **Format**: PDF + plain text versions
- **Applications**: Area calculation, differential equations

### Text Viewer Features
- **Dynamic Content Loading**: JavaScript-powered content fetching
- **Progressive Enhancement**: Works with/without JavaScript
- **Content Formatting**: Automatic formatting of mathematical expressions
- **Navigation**: Table of contents generation, section scrolling
- **Responsive Design**: Sidebar layout for desktop, stacked for mobile

## Performance & Optimization

### Image Optimization
- **Logo System**: WebP format with PNG fallback, multiple pixel densities (@1x, @2x, @3x)
- **Preloading**: Critical logo assets preloaded for faster first paint
- **Lazy Loading**: Non-critical images loaded on demand

### Loading Optimization  
- **Critical Resources**: Inline critical CSS, preload key fonts
- **JavaScript Loading**: Deferred script loading, progressive enhancement
- **Asset Optimization**: Compressed images, minified external resources

### Caching Strategy
- **Static Assets**: Proper cache headers for images, CSS, JavaScript
- **Dynamic Content**: Course materials cached for repeat visits
- **CDN Usage**: Font Awesome and Google Fonts delivered via CDN

## Security & Privacy

### Data Handling
- **Contact Forms**: Client-side validation, no server-side storage
- **EmailJS Integration**: Secure email transmission, no sensitive data logging
- **External Links**: Proper `rel="noopener noreferrer"` attributes

### Content Security
- **No Inline Scripts**: Separated JavaScript files
- **Secure External Resources**: HTTPS-only external dependencies
- **Input Validation**: Form sanitization and validation

## Multilingual & Localization

### Language Support
- **Primary Language**: Latvian (lv)
- **Content Localization**: All interface text, educational content, and error messages in Latvian
- **Cultural Considerations**: Latvian educational standards, phone number formats (+371)

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy, ARIA labels
- **Keyboard Navigation**: Full keyboard accessibility for forms and navigation
- **Screen Reader Support**: Alt text for images, descriptive link text
- **Color Contrast**: WCAG AA compliance for text contrast ratios

## Development Workflow & Deployment

### Local Development
```bash
# Start development server
node server.js
# Access at http://localhost:3000
```

### Production Deployment
- **Platform**: Vercel (configured via vercel.json)
- **Build Process**: No build step required (static assets)
- **Asset Serving**: Automatic optimization, global CDN distribution

### Version Control
- **Git Repository**: Full project history and branching
- **Documentation**: Comprehensive README and specification files
- **Change Management**: Commit messages document feature additions and fixes

## Future Enhancement Opportunities

### Technical Improvements
1. **Content Management**: Admin panel for course material updates
2. **Student Portal**: User accounts, progress tracking, assignment submission
3. **Payment Integration**: Online course payment processing
4. **Analytics**: Student engagement tracking, content performance metrics

### Educational Features  
1. **Interactive Exercises**: In-browser problem solving with instant feedback
2. **Video Integration**: Direct video hosting instead of YouTube embeds
3. **Live Sessions**: Integrated video conferencing for online tutoring
4. **Mobile App**: Native iOS/Android application for course access

### Content Expansion
1. **Additional Courses**: Geometry, algebra, statistics modules
2. **Difficulty Levels**: Beginner to advanced pathway progression
3. **Certification**: Digital certificates for course completion
4. **Multi-language**: English and Russian language support

## Success Metrics & KPIs

### User Engagement
- **Time on Site**: Average session duration and page depth
- **Content Downloads**: PDF download rates and popular materials
- **Form Submissions**: Contact form completion rates
- **Return Visits**: Student retention and repeat access patterns

### Educational Effectiveness  
- **Course Completion**: Percentage of students finishing course parts
- **Material Usage**: Most accessed content and learning paths
- **Student Feedback**: Contact form inquiries and success stories

### Technical Performance
- **Page Load Speed**: Core Web Vitals optimization
- **Mobile Usage**: Responsive design effectiveness across devices
- **Search Engine Visibility**: SEO performance for mathematics education keywords

---

**Document Version**: 1.0  
**Last Updated**: January 2025  
**Project Status**: Production Ready  
**Maintenance**: Active development and content updates