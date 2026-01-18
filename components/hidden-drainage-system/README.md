# Hidden Drainage System Component

## Overview
A static, reusable component that displays information about the lymphatic drainage system. This component features a two-column layout with text content on the left and an image on the right.

## Files
```
hidden-drainage-system/
├── hidden-drainage-system.html
├── hidden-drainage-system.css
└── README.md
```

## Usage

### 1. Include the CSS
Add this in your HTML `<head>`:
```html
<link rel="stylesheet" href="path/to/hidden-drainage-system/hidden-drainage-system.css">
```

### 2. Include the HTML
Copy the entire contents of `hidden-drainage-system.html` into your page where you want the component to appear.

### 3. Dependencies
This component requires:
- **Fonts**: Lora (serif) and Nunito (sans-serif) - include via Google Fonts
- **Images**: 
  - `images/Frame_1484580366_1.png` (main illustration)
  - `images/check-mark_17013456_2_1.png` (green checkmark icon)
  - `images/Vector_7.png` (red X icon)

### 4. Tailwind CSS Classes
The component uses these Tailwind-compatible utility patterns:
- Responsive utilities (.Desktop_only, .Mobile_only)
- Layout utilities (flexbox, centering)

## Features
- **Responsive Design**: Automatically adjusts layout for mobile (≤678px) and desktop (>678px)
- **Semantic HTML**: Clean, accessible markup structure
- **Scoped Styles**: All styles are component-specific to avoid conflicts
- **Pixel-Perfect**: Preserves exact visual appearance from original design

## Layout Behavior
- **Desktop**: Two-column layout (text left, image right)
- **Mobile**: Single column, image appears above text (reverse flex)

## Color Palette
- Pink highlight: `#ffe3e3`
- Pink accent: `#d5416e`
- Green text: `#0c7c00`
- Red text: `#a60003`

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with appropriate polyfills for flexbox)
