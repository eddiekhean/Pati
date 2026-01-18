/* Product Selector Component - JavaScript */

class ProductSelector {
    constructor(selectorElement) {
        if (!selectorElement) return;

        this.selector = selectorElement;
        this.options = this.selector.querySelectorAll('.product-option');
        this.addToCartButton = document.querySelector('[data-add-to-cart]');
        this.init();
    }

    init() {
        this.options.forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectOption(option);
            });
        });
    }

    selectOption(selectedOption) {
        // Remove active class from all options
        this.options.forEach(opt => opt.classList.remove('active'));

        // Add active class to selected option
        selectedOption.classList.add('active');

        // Update button data attributes if needed
        if (this.addToCartButton) {
            const variantId = selectedOption.dataset.id;
            const sellingPlan = selectedOption.dataset.sellingPlan;
            const index = selectedOption.dataset.index;
            const champsUrl = selectedOption.dataset.champsUrl;

            this.addToCartButton.dataset.variantId = variantId;
            this.addToCartButton.dataset.sellingPlan = sellingPlan;
            this.addToCartButton.dataset.index = index;
            if (champsUrl) {
                this.addToCartButton.dataset.champsUrl = champsUrl;
            }
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const selector = document.querySelector('.product-selector');
    if (selector) {
        new ProductSelector(selector);
    }
});
