# 8-Ingredient System Component

## Overview
A sophisticated, interactive component displaying 8 key ingredients in a responsive grid layout. Each ingredient card can be clicked to expand and reveal detailed scientific information.

## Files
```
ingredient-system/
├── ingredient-system.html
├── ingredient-system.css
├── ingredient-system.js
└── README.md
```

## Usage

### 1. Include the CSS
Add this in your HTML `<head>`:
```html
<link rel="stylesheet" href="path/to/ingredient-system/ingredient-system.css">
```

### 2. Include the JavaScript
Add this before your closing `</body>` tag:
```html
<script src="path/to/ingredient-system/ingredient-system.js"></script>
```

### 3. Include the HTML
Copy the entire contents of `ingredient-system.html` into your page where you want the component to appear.

### 4. Dependencies
This component requires:
- **Fonts**: Lora (serif) and Nunito (sans-serif) - include via Google Fonts
- **Images**: 
  - **Checkmark**: `check-mark_17013456_2.png`
  - **Expand icon**: `weui_arrow-outlined.png`
  - **Ingredient images**:
    - `Frame_1484580382.png` (Cleavers)
    - `Frame_1484580382_1.png` (Dandelion)
    - `image_2.png` (Bromelain)
    - `image_3.png` (Rutin)
    - `Frame_1484580382_2.png` (Burdock)
    - `image_4.png` (Echinacea)
    - `Frame_1484580382_3.png` (Kelp)
    - `Frame_1484580382_4.png` (Lemon)
  - **Dividers**: 
    - `Frame_1000003583_2.png` (Desktop)
    - `Frame_1000003583_3.png` (Mobile)

## Component Structure

### 8 Ingredient Cards
Each card contains:
1. **Subtitle** - Benefit category (green text with checkmark)
2. **Image** - Visual representation of the ingredient
3. **Heading** - Ingredient name and dosage
4. **Expandable Content** - Scientific details and study references

The 8 ingredients are:
1. Cleavers Extract (100mg) - Reactivate Lymphatic Pumps
2. Dandelion Extract (250mg) - Flush Excess Fluid
3. Bromelain Powder (100mg) - Break Down Protein Clogs
4. Rutin (100mg) - Strengthen Vessel Walls
5. Burdock Root Powder (200mg) - Reduce Inflammation
6. Echinacea Purpurea Extract (500mg) - Boost Immune Clearance
7. Kelp Extract (30mg) - Support Metabolism
8. Lemon Powder (50mg) - Antioxidant Protection

## Features
- **Interactive Cards**: Click any card to expand/collapse details
- **4-Column Grid**: Desktop displays 4 cards per row
- **Responsive Design**: Collapses to single column on mobile (≤678px)
- **Visual Hierarchy**: Green checkmarks, ingredient images, scientific data
- **Vanilla JavaScript**: No framework dependencies
- **Scoped Styles**: All styles namespaced with `.product_lymphg-ingr-outer`

## Layout Behavior
- **Desktop**: 4 columns, cards arranged in 2 rows (4 + 4)
- **Mobile**: Single column, stacked vertically
- **Click to Expand**: Content hidden by default, shows on click

## JavaScript Functionality

The component includes simple expand/collapse behavior:
- Click any ingredient card to toggle its detailed content
- Multiple cards can be expanded simultaneously
- No external dependencies (vanilla JS only)

### Manual Control
You can programmatically control cards:
```javascript
// Show content
document.querySelector('.product_lymph-ingr-content').style.display = 'block';

// Hide content
document.querySelector('.product_lymph-ingr-content').style.display = 'none';
```

## Color Palette
- Background: `#f3eee0` (cream/beige)
- Card background: `#fff` (white)
- Green benefits: `#0c7c00`
- Pink accent: `#d5416e`
- Card borders: `#000` (0.5px solid)

## Customization

### Update Card Content
Each ingredient card follows this structure:
```html
<div class="product-lymph-ingredient">
    <p class="product_lymph-ingr-subtitle">
        <span><img src="../images/check-mark_17013456_2.png" alt="Checkmark"></span>
        <span>Benefit Category</span>
    </p>
    <img class="Desktop_only product_lymph-main-img" src="../images/YOUR_IMAGE.png" alt="Ingredient">
    
    <div class="product_lymph-ingr-thumb">
        <div class="Mobile_only">
            <img class="product_lymph-main-img" src="../images/YOUR_IMAGE.png" alt="Ingredient">
        </div>
        <div><h5>Ingredient Name (Dosage)</h5></div>
        <div><img src="../images/weui_arrow-outlined.png" alt="Expand"></div>
    </div>
    
    <div class="product_lymph-ingr-content">
        <p>Description text</p>
        <p>[Study reference]</p>
    </div>
</div>
```

### Modify Grid Layout
To change the desktop column count, edit the CSS:
```css
.product_lymph-ingr-table {
    grid-template-columns: 1fr 1fr 1fr; /* 3 columns instead of 4 */
}
```

## Accessibility
- All images have descriptive alt attributes
- Clickable cards have cursor pointer
- Semantic heading hierarchy (h2 → h5)
- Color contrast meets WCAG AA standards
- Keyboard accessible (click events work with Enter key)

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with appropriate polyfills for CSS Grid)

## Notes
- Cards expand independently (no accordion behavior)
- No animation on expand/collapse (can be added if needed)
- Content is hidden by default for cleaner initial view
- Scientific references included in brackets for credibility
