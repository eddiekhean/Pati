# Benefits Icons Component

## Overview
A simple 4-icon grid showcasing key product benefits: free shipping, natural support, natural ingredients, and money-back guarantee.

## Files
```
benefits-icons/
├── benefits-icons.html
├── benefits-icons.css
└── README.md
```

## Usage

### 1. Include the CSS
```html
<link rel="stylesheet" href="path/to/benefits-icons/benefits-icons.css">
```

### 2. Include the HTML
Copy the contents of `benefits-icons.html` into your page.

### 3. Dependencies
- **Images**: 
  - `ship-min.png` - Shipping icon
  - `support-min.png` - Support icon
  - `natural-min.png` - Natural ingredients icon
  - `60-min.png` - Guarantee icon

## Features
- **4-Column Grid**: Desktop displays all 4 icons in a row
- **2x2 Grid**: Mobile displays in 2 columns, 2 rows
- **Pink Background**: `#fff7f8` background color
- **Centered Icons**: All content centered within each column
- **Responsive**: Auto-adjusts at 678px breakpoint

## Layout
- **Desktop**: 4 icons in single row with 24px gap
- **Mobile**: 2x2 grid layout

## Customization

### Update Icon/Text
```html
<div>
    <img src="../images/YOUR_ICON.png" alt="Description">
    <p class="h4title">Your Title</p>
    <p>Your subtitle</p>
</div>
```

### Change Background Color
```css
.product_judge-outer.pink {
    background: #YOUR_COLOR;
}
```

## Browser Support
- All modern browsers
- IE11+
