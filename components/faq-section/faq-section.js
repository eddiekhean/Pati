/**
 * FAQ Section JavaScript
 * Handles accordion expand/collapse functionality
 */

(function () {
    'use strict';

    function initFAQ() {
        const faqBoxes = document.querySelectorAll('.product_faq-box');

        faqBoxes.forEach(function (box) {
            box.addEventListener('click', function () {
                toggleFAQ(this);
            });
        });
    }

    function toggleFAQ(box) {
        const content = box.querySelector('.product_faq-content');
        const isActive = box.classList.contains('active');

        if (isActive) {
            box.classList.remove('active');
            content.style.display = 'none';
        } else {
            box.classList.add('active');
            content.style.display = 'block';
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFAQ);
    } else {
        initFAQ();
    }
})();
