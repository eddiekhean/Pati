/**
 * 8-Ingredient System Component JavaScript
 * Handles click-to-expand functionality for ingredient cards
 */

(function() {
    'use strict';
    
    /**
     * Initialize the ingredient system component
     */
    function initIngredientSystem() {
        const ingredients = document.querySelectorAll('.product-lymph-ingredient');
        
        ingredients.forEach(function(ingredient) {
            ingredient.addEventListener('click', function() {
                toggleIngredient(this);
            });
        });
    }
    
    /**
     * Toggle the expanded state of an ingredient card
     * @param {HTMLElement} ingredient - The ingredient card element
     */
    function toggleIngredient(ingredient) {
        const content = ingredient.querySelector('.product_lymph-ingr-content');
        
        if (!content) return;
        
        // Toggle display
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initIngredientSystem);
    } else {
        initIngredientSystem();
    }
})();
