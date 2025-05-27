Bay & Pepper Restaurant Website A responsive restaurant website built with Bootstrap 5 fundamentals, showcasing modern web development practices and component-based design. 🛠️ Tech Stack

HTML5: Semantic markup structure CSS3: Custom styling with CSS variables JavaScript (ES6+): DOM manipulation and interactive functionality Bootstrap 5.3.3: Frontend framework for responsive design Font Awesome 6.4.0: Icon library

📁 Project Structure bay-pepper-restaurant/ ├── index.html # Main homepage ├── menu.html # Menu page ├── styles.css # Custom CSS overrides ├── script.js # JavaScript functionality ├── images/ # Image assets └── README.md # Documentation 🎯 Bootstrap Implementation Grid System

Container: Fluid and fixed-width containers for content structure Row/Col Classes: Responsive layout using Bootstrap's 12-column grid Breakpoints: Mobile-first responsive design with col-lg-6, col-md-6, col-12

Navigation

Navbar: Fixed-top navigation with dark theme (navbar-dark bg-dark) Responsive Navigation: Collapsible navbar for mobile devices Brand & Toggle: Logo branding with hamburger menu toggle

Components

Cards: Menu item display using Bootstrap card components Modals: Reservation booking system with form validation Forms: Contact and reservation forms with Bootstrap form classes Buttons: Primary and secondary button styling

Layout Classes

Flexbox Utilities: d-flex, align-items-center, justify-content-center Spacing: Margin and padding utilities (mb-3, py-5, mt-3) Text Utilities: text-center, fw-bold, lead, display-3 Background: bg-dark, bg-light, bg-black

Responsive Features

Visibility Classes: Content adaptation across screen sizes Image Classes: img-fluid for responsive images Card Layout: Responsive card grid with g-4 gutters

💻 JavaScript Features Dynamic Content javascript// Menu rendering from data array function loadMenu() { const menuContainer = document.getElementById("menuItems") menuContainer.innerHTML = menuItems.map(item => <div class="col-lg-4 col-md-6 mb-4"> <div class="card menu-card h-100"> // Card content </div> </div>).join("") } Form Validation

Required field validation Date input restrictions Success/error feedback Form reset functionality

Modal Management

Bootstrap Modal API integration Event handling for show/hide Form submission handling

🎨 Custom CSS Implementation CSS Variables css:root { --primary-color: #d2691e; --text-dark: #2c1810; } Bootstrap Overrides

Custom button colors Enhanced card styling Modal customization Form focus states

Responsive Design css@media (max-width: 768px) { .hero, .menu-header { min-height: 40vh; } } 🚀 Key Bootstrap Features Used Layout & Grid

Container System: .container for centered content Grid Classes: .row, .col-* for flexible layouts Flexbox Utilities: For alignment and distribution

Components

Navigation Bar: Responsive navbar with brand and toggle Cards: Content containers with images, headers, and bodies Modals: Overlay dialogs for reservations Forms: Styled form controls and validation

Utilities

Spacing: Comprehensive margin/padding system Typography: Text styling and display classes Colors: Background and text color utilities Shadows: Box shadow utilities for depth

🔧 Setup & Usage Installation

Clone the repository Open index.html in a web browser No build process required - static HTML/CSS/JS

Development

Use Live Server or similar for development Bootstrap CDN provides all necessary styles Font Awesome CDN for iconography

📱 Responsive Breakpoints

Small (sm): ≥576px Medium (md): ≥768px Large (lg): ≥992px Extra Large (xl): ≥1200px

🎯 Bootstrap Best Practices Implemented

Mobile-First Approach: Design starts with mobile, scales up Semantic HTML: Proper use of Bootstrap's semantic classes Accessibility: Form labels, ARIA attributes, keyboard navigation Performance: CDN delivery, minimal custom CSS Maintainability: Consistent class naming and structure

📋 Form Implementation Bootstrap Form Classes

.form-control for input styling .form-label for accessible labels .form-select for dropdown menus .was-validated for validation states

Validation Features

HTML5 validation attributes JavaScript validation logic Custom error messaging Bootstrap validation styling

🌐 Browser Compatibility

Modern browsers supporting ES6+ Bootstrap 5 browser support Mobile-responsive across all devices Progressive enhancement approach
