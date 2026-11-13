window.addEventListener('load', initialize);

function initialize() {
    document.getElementById('add').addEventListener('click', add);
    document.getElementById('remove').addEventListener('click', remove);
}

function add() {
    const ingredients = document.getElementById('ingredients');

    if (ingredients.selectedIndex > -1) {
        const index = ingredients.selectedIndex;
        const selectedOption = ingredients.options[index];
        document.getElementById('choice').add(selectedOption);
    }
}

function remove() {
    const choice = document.getElementById('choice');

    if (choice.selectedIndex > -1) {
        const index = choice.selectedIndex;
        const selectedOption = choice.options[index];
        document.getElementById('ingredients').add(selectedOption);
    }
}
