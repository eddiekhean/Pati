# Reviews Header Component

## Overview
A simple, static component displaying the reviews section header with Trustpilot badge, title, and subtitle. This component provides the framework for integrating a third-party review system.

## Files
```
reviews-header/
├── reviews-header.html
├── reviews-header.css
└── README.md
```

## Important Note

⚠️ **This component contains only the HEADER section of the reviews area.**

The original implementation uses **Judge.me**, a third-party Shopify review app that requires:
- Active Judge.me account
- API integration
- External JavaScript libraries
- Dynamic data loading from Judge.me servers

For a fully static implementation, you have three options:

1. **Use a different review platform** (Trustpilot, Yotpo, etc.)
2. **Manually code static reviews** in HTML
3. **Integrate Judge.me** following their documentation

## Usage

### 1. Include the CSS
Add this in your HTML `<head>`:
```html
<link rel="stylesheet" href="path/to/reviews-header/reviews-header.css">
```

### 2. Include the HTML
Copy the entire contents of `reviews-header.html` into your page where you want the component to appear.

### 3. Dependencies
This component requires:
- **Fonts**: Lora (serif) for the heading
- **Image**: `Trustpilot_Score.png` - Trustpilot rating badge

## Component Structure

### Header Elements
1. **Trustpilot Badge** - Trust indicator image
2. **Title** - "Real Women, Real Results: 93,000+ Transformations"
3. **Subtitle** - "All reviews verified from actual paying customers"

## Integrating Reviews

### Option 1: Judge.me Integration

If you want to use Judge.me (original implementation):

1. Sign up at https://judge.me
2. Get your product ID
3. Uncomment the widget div in the HTML:
```html
<div id="judgeme_product_reviews" 
     class="jdgm-widget jdgm-review-widget" 
     data-id="YOUR_PRODUCT_ID">
</div>
```
4. Include Judge.me's JavaScript library in your page

### Option 2: Static Reviews

Add your own review HTML after the header:

```html
<div class="product_judge-container">
    <!-- Header from component -->
</div>

<!-- Add your static reviews here -->
<div class="reviews-container">
    <div class="review-card">
        <div class="review-rating">★★★★★</div>
        <p class="review-author">Jane D.</p>
        <p class="review-text">Amazing product! Saw results in 30 days.</p>
    </div>
    <!-- More reviews -->
</div>
```

### Option 3: Other Review Platforms

Replace the placeholder div with your platform's embed code:

**Trustpilot:**
```html
<div class="trustpilot-widget" data-businessunit-id="YOUR_ID"></div>
<script src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"></script>
```

**Yotpo:**
```html
<div class="yotpo yotpo-main-widget" data-product-id="YOUR_PRODUCT_ID"></div>
```

## Features
- **Clean Header Design**: Professional, centered layout
- **Trustpilot Badge**: Builds credibility
- **Responsive**: Works on all devices
- **Framework-Ready**: Easy to integrate with any review system

## Color Palette
- Pink accent: `#d5416e` (for future use)
- Text: `#000` (black)

## Customization

### Update Title/Stats
```html
<h2 class="product-section_title centered">
    Real Women, Real Results: YOUR_NUMBER+ Transformations
</h2>
```

### Change Subtitle
```html
<p class="product-section_text centered">
    Your custom verification message
</p>
```

### Replace Trust Badge
```html
<img src="../images/YOUR_BADGE.png" class="product-reviews_trust" alt="Trust Badge">
```

## Browser Support
- All modern browsers
- IE11+ (with appropriate polyfills)

## Next Steps

To complete this section, you'll need to:
1. Choose a review platform
2. Obtain necessary API keys/credentials  
3. Add the platform's embed code or static reviews
4. Style the reviews to match your site design

---

**Note**: This is a header-only component. The actual review content/widget must be added separately based on your chosen review solution.
