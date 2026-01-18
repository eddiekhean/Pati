# Why Nothing Worked Component

## Overview
A static, reusable component that displays three common failed approaches to solving lymphatic drainage issues. Features a grid of cards, each showing an image, title, and expandable "Why it failed" section with explanation text.

## Files
```
why-nothing-worked/
├── why-nothing-worked.html
├── why-nothing-worked.css
└── README.md
```

## Usage

### 1. Include the CSS
Add this in your HTML `<head>`:
```html
<link rel="stylesheet" href="path/to/why-nothing-worked/why-nothing-worked.css">
```

### 2. Include the HTML
Copy the entire contents of `why-nothing-worked.html` into your page where you want the component to appear.

### 3. Dependencies
This component requires:
- **Fonts**: Lora (serif) and Nunito (sans-serif) - include via Google Fonts
- **Images**: 
  - `X1.jpg` - Clean eating image
  - `X2.jpg` - Lymphatic drops image
  - `X3.jpg` - Massage/compression socks image
  - `Vector_6.png` - Arrow icon
  - `Group_7207_1.png` - Desktop bottom divider
  - `Frame_1000003583_1.png` - Mobile bottom divider
  - `60-days_11622780_1_1.png` - Guarantee badge

## Component Structure

### Card Layout
Each card contains:
1. **Image** - Visual representation of the failed approach
2. **Heading** - Description of what was tried
3. **Pink Box** - "Why it failed" section with:
   - Subtitle with arrow icon
   - Explanation text

### Call-to-Action
- Primary button linking to checkout
- 60-day guarantee badge and text

## Features
- **Responsive Design**: 3-column on desktop, single column on mobile (≤678px)
- **Semantic HTML**: Clean, accessible markup with proper alt attributes
- **Scoped Styles**: All styles are component-specific (`.outer_how-nothing` namespace)
- **Pixel-Perfect**: Preserves exact visual appearance from original design
- **Hover Effects**: Button has smooth opacity transition on hover

## Layout Behavior
- **Desktop**: 3 cards in a row with 16px gap
- **Mobile**: Stacked cards with 8px gap
- **Pink boxes**: Minimum height of 180px on desktop, auto on mobile

## Color Palette
- Background gray: `#f7f7f7`
- Pink highlight: `#ffe3e3`
- Pink accent: `#d5416e`
- Button background: `#000`
- Button text: `#fff`

## Customization

### Update the CTA Link
Replace the href in the button:
```html
<a href="YOUR_CHECKOUT_URL" class="product_primary-btn">
```

### Modify Card Content
Each card follows this structure:
```html
<div class="product_why-nothing-cell">
    <div>
        <img src="../images/YOUR_IMAGE.jpg" alt="Description">
    </div>
    <div class="product_why-nothing-cell-inn">
        <h4>Your Heading</h4>
        <div class="product_why-nothing-pink">
            <p class="product_why-nothing-subtitle">
                <span>Why it failed</span>
                <span><img src="../images/Vector_6.png" alt="Arrow icon"></span>
            </p>
            <p class="product_why-nothing-text">Your explanation</p>
        </div>
    </div>
</div>
```

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with appropriate polyfills for flexbox and CSS Grid)

## Accessibility
- All images have descriptive alt attributes
- Semantic heading hierarchy (h2 → h4)
- Proper link text for screen readers
- Color contrast meets WCAG AA standards
