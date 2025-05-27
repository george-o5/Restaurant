# 🍽️ Bay & Pepper Restaurant Website

> A responsive restaurant website built with Bootstrap 5 fundamentals, showcasing modern web development practices and component-based design.

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Semantic markup structure | Latest |
| **CSS3** | Custom styling with variables | Latest |
| **JavaScript** | DOM manipulation & interactivity | ES6+ |
| **Bootstrap** | Frontend framework | 5.3.3 |
| **Font Awesome** | Icon library | 6.4.0 |

## 📁 Project Structure

```
bay-pepper-restaurant/
│
├── 📄 index.html          # Main homepage
├── 📄 menu.html           # Menu page  
├── 🎨 styles.css          # Custom CSS overrides
├── ⚡ script.js           # JavaScript functionality
├── 🖼️  images/            # Image assets
└── 📋 README.md           # Documentation
```

## 🎯 Bootstrap Implementation

### 🏗️ Grid System
- **Container System**: Fluid and fixed-width containers for content structure
- **Responsive Grid**: 12-column layout with `col-lg-6`, `col-md-6`, `col-12`
- **Mobile-First**: Progressive enhancement from mobile to desktop

### 🧭 Navigation
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
```
- Fixed-top navigation with dark theme
- Collapsible hamburger menu for mobile
- Brand logo with Font Awesome icons

### 🎴 Components
| Component | Implementation | Purpose |
|-----------|---------------|---------|
| **Cards** | `.card`, `.card-body`, `.card-img-top` | Menu item display |
| **Modals** | `.modal`, `.modal-dialog` | Reservation system |
| **Forms** | `.form-control`, `.form-label` | Contact & booking |
| **Buttons** | `.btn-primary`, `.btn-secondary` | Call-to-actions |

### 🎨 Layout Classes
```css
/* Bootstrap Utilities Used */
.d-flex              /* Flexbox container */
.align-items-center  /* Vertical alignment */
.justify-content-*   /* Horizontal alignment */
.mb-3, .py-5, .mt-3  /* Spacing utilities */
.text-center         /* Text alignment */
.fw-bold             /* Font weight */
.bg-dark, .bg-light  /* Background colors */
```

## ⚡ JavaScript Features

### 📋 Dynamic Menu Rendering
```javascript
const menuItems = [
    {
        name: "Chettinad Chicken",
        price: "₹320",
        description: "Spicy chicken curry with aromatic spices",
        image: "images/chettinad-chicken.webp"
    }
    // ... more items
];

function loadMenu() {
    const menuContainer = document.getElementById("menuItems");
    menuContainer.innerHTML = menuItems
        .map(item => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card menu-card h-100">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="price">${item.price}</p>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>
        `)
        .join("");
}
```

### 📝 Form Validation
- ✅ Required field validation
- 📅 Date input restrictions (future dates only)
- 💬 Success/error feedback alerts
- 🔄 Form reset functionality

### 🎭 Modal Management
```javascript
// Bootstrap Modal Integration
const reserveBtn = document.getElementById("reserveBtn");
reserveBtn.addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.getElementById("reservationModal"));
    modal.show();
});
```

## 🎨 Custom CSS Implementation

### 🎯 CSS Variables
```css
:root {
    --primary-color: #d2691e;    /* Chocolate brown */
    --text-dark: #2c1810;        /* Dark brown text */
}
```

### 🔧 Bootstrap Overrides
```css
.btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-primary:hover {
    background-color: #8b4513;
    border-color: #8b4513;
}
```

### 📱 Responsive Design
```css
@media (max-width: 768px) {
    .hero, .menu-header {
        min-height: 40vh;
    }
    .menu-card img {
        height: 150px;
    }
}
```

## 🚀 Key Bootstrap Features

### 📐 Layout & Grid
- **Container System**: `.container` for centered, responsive content
- **Grid Classes**: `.row`, `.col-*` for flexible, responsive layouts
- **
