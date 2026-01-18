/* Accordion Component - JavaScript */

class Accordion {
    constructor(accordionElement) {
        if (!accordionElement) return;

        this.accordion = accordionElement;
        this.items = this.accordion.querySelectorAll('.accordion-item');
        this.init();
    }

    init() {
        this.items.forEach(item => {
            const header = item.querySelector('.accordion-item__header');
            if (header) {
                header.addEventListener('click', () => this.toggleItem(item));
            }
        });
    }

    toggleItem(item) {
        const isActive = item.classList.contains('active');

        // Optional: Close all other items (single-open behavior)
        // Comment out these lines if you want multiple items open at once
        this.items.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });

        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    }
}

// Initialize all accordions on the page
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion, [data-accordion]');
    accordions.forEach(accordion => {
        new Accordion(accordion);
    });
});
