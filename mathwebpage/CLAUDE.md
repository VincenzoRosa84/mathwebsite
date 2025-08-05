# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Latvian mathematics teacher website** - a static educational website showcasing math courses, materials, and videos. The site is designed for a mathematics educator to present their teaching credentials, course offerings, and educational resources to students.

## Architecture & Structure

### Frontend Architecture
- **Static HTML/CSS/JS**: Traditional web architecture with no framework dependencies
- **Single Page Application**: Uses JavaScript scroll-based navigation with smooth scrolling between sections
- **Responsive Design**: Mobile-first CSS with breakpoints at 768px and 480px
- **Progressive Enhancement**: Core functionality works without JavaScript

### Key Components
- **Navigation**: Fixed header with hamburger menu for mobile, smooth scroll navigation
- **Hero Section**: Animated mathematical formulas with typewriter effect for title
- **Course Cards**: Grid-based layout showcasing different math subjects (Algebra, Calculus, Geometry)
- **Material Categories**: Three types - Study guides (PDFs), Practice problems, Interactive tools
- **Video Section**: Mock YouTube-style video cards with playlists
- **Contact Form**: Simulated form submission with client-side validation

### Server Setup
- **Node.js HTTP Server**: Basic static file server (`server.js`) serving files on port 3000
- **MIME Type Handling**: Supports HTML, CSS, JS, PNG, JPG files
- **Error Handling**: 404 and 500 error responses

## Common Development Commands

### Running the Application
```bash
node server.js
```
This starts the server at `http://localhost:3000`

### Development Workflow
Since this is a static site with no build process:
1. Edit HTML/CSS/JS files directly
2. Refresh browser to see changes
3. No compilation or build steps required

## Content Localization

The website is entirely in **Latvian language**. When making content changes:
- Maintain Latvian text throughout the interface
- Preserve mathematical terminology in Latvian
- Keep educational context appropriate for Latvian students
- Contact information uses Latvian formatting (+371 phone numbers)

## Interactive Features

### JavaScript Functionality
- **Intersection Observer**: Animates cards on scroll with fade-in and slide-up effects
- **Form Simulation**: Contact form shows success message but doesn't actually submit
- **Modal Alerts**: Course links, video plays, and material downloads show placeholder alerts
- **Dynamic Header**: Header background changes opacity on scroll
- **Back-to-Top Button**: Dynamically created floating action button
- **Loading Screen**: Shows on page load with spinning mathematics symbol

### Placeholder Functionality
Most interactive elements show alert dialogs explaining real implementation needs:
- Course enrollment links
- Video playback
- Material downloads
- External tool access

## Styling System

### CSS Architecture
- **CSS Custom Properties**: Comprehensive design token system in `:root`
- **Component-Based**: Each major section has isolated styles
- **Mobile-First**: Responsive design starting from mobile breakpoints
- **Animation System**: Keyframe animations for floating math symbols and loading states

### Color System
- Primary: `#2563eb` (blue)
- Secondary: `#1e40af` (darker blue) 
- Accent: `#3b82f6` (lighter blue)
- Consistent semantic color naming throughout

## Educational Content Structure

### Course Organization
- **Beginner Level**: Basic Algebra (12 lessons)
- **Intermediate**: Mathematical Analysis I (18 lessons)  
- **Advanced**: Advanced Mathematical Analysis (24 lessons)
- **Geometry**: Visual learning focused (15 lessons)

### Material Types
1. **PDF Guides**: Study guides and reference sheets
2. **Practice Sets**: Problem collections and worksheets
3. **Interactive Tools**: Calculators and visualizers (external links)

When adding new educational content, follow the established pattern of difficulty progression and maintain the lesson count format.