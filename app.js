new Vue({
    el: '#app',
    data: {
        products: []
    },
    created() {
        fetch('urls.txt')
            .then(response => response.text())
            .then(data => {
                const urls = data.split('\n').filter(url => url.trim() !== '');
                const names = [
                    "Pasta", "Red Crab", "Breakfast Special", "Sea Shells Mix",
                    "Ultimate Kebab", "Chicken Steak", "Filet Mignon", "Bistro Brunch",
                    "California Crepe", "Top Burger", "Chicken Garlic Pizza", "Wok away healthy"
                ];
                const descriptions = [
                    "Healthy Pasta", "Fresh from Alaska", "Good for the soul", "For the shell lovers",
                    "The best from Middle East", "Grilled to perfection", "Juicy steak with potatoes au gratin",
                    "A touch of Australia", "Stuffed with grilled shrimp", "The tallest hamburger from Peru",
                    "Our specialty pizza", "Healthy blend of noodles and veggies"
                ];
                this.products = urls.map((url, index) => ({
                    name: names[index] || `Product ${index + 1}`,
                    image: url,
                    description: descriptions[index] || "Delicious food selection"
                }));
            });
    }
});
