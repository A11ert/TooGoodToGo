// Recipes page: recipe cards, steps with jQuery, recipe form (Zhubanazar Meyirzhan)

// ---------- Data ----------
const recipes = [
    { title: 'Bread pudding', time: 40, level: 'Easy', image: 'images/bread-pudding.jpg', alt: 'Bread pudding',
      steps: ['Cut old bread into cubes.', 'Mix 2 eggs, a glass of milk and sugar.', 'Pour over the bread and bake 30 minutes at 180 °C.'] },
    { title: 'Garlic croutons', time: 15, level: 'Easy', image: 'images/croutons.jpg', alt: 'Croutons in a bowl',
      steps: ['Cut bread into small cubes.', 'Mix with oil, garlic and salt.', 'Fry in a pan for 5–7 minutes.'] },
    { title: 'Fried rice', time: 20, level: 'Easy', image: 'images/fried-rice.jpg', alt: 'Fried rice with vegetables',
      steps: ['Heat oil in a pan.', 'Fry yesterday\'s rice with an egg.', 'Add any vegetables or meat from your bag.'] },
    { title: 'Fruit smoothie', time: 5, level: 'Easy', image: 'images/smoothie.jpg', alt: 'Fruit for a smoothie on a table',
      steps: ['Peel soft fruit.', 'Add milk or yogurt.', 'Blend for one minute.'] },
    { title: 'Vegetable soup', time: 35, level: 'Easy', image: 'images/soup.jpg', alt: 'Vegetable soup',
      steps: ['Cut the vegetables.', 'Cook them in water for 25 minutes.', 'Add salt and herbs.'] },
    { title: 'Cake in a glass', time: 10, level: 'Easy', image: 'images/trifle.jpg', alt: 'Trifle in a glass',
      steps: ['Break old cake into pieces.', 'Put cake, cream and fruit in a glass in layers.', 'Keep in the fridge for one hour.'] },
    { title: 'Big salad', time: 10, level: 'Easy', image: 'images/salad.jpg', alt: 'Greek salad',
      steps: ['Cut tomatoes, cucumbers and onion.', 'Add cheese and olives.', 'Pour olive oil and lemon juice.'] },
    { title: 'Roasted vegetables', time: 45, level: 'Medium', image: 'images/vegetables.jpg', alt: 'Fresh vegetables at a market',
      steps: ['Cut the vegetables into big pieces.', 'Mix with oil, salt and spices.', 'Bake 35 minutes at 200 °C, turn them once.'] }
];

const recipeList = document.getElementById('recipe-list');

// ---------- Cards ----------
function showRecipes() {
    recipeList.innerHTML = '';

    recipes.forEach(function (recipe, index) {
        // steps: one <li> for each step
        let stepsHtml = '';
        for (const step of recipe.steps) {
            stepsHtml += `<li>${step}</li>`;
        }

        const col = document.createElement('div');
        col.className = 'col-sm-6 col-lg-3';
        col.innerHTML = `
            <article class="food-card">
                <img src="${recipe.image}" alt="${recipe.alt}">
                <div class="food-card-body">
                    <h2 class="h3">${recipe.title}</h2>
                    <p class="recipe-meta">⏱ ${recipe.time} min · ${recipe.level} · ${recipe.steps.length} steps</p>
                    <button type="button" class="btn btn-line btn-sm" aria-expanded="false" aria-controls="steps-${index}">Show steps</button>
                    <ol class="recipe-steps" id="steps-${index}">${stepsHtml}</ol>
                </div>
            </article>`;
        recipeList.append(col);
    });
}

// jQuery: open and close the steps
$('#recipe-list').on('click', 'button', function () {
    const steps = $(this).next('.recipe-steps');
    const isOpen = $(this).attr('aria-expanded') === 'true';

    steps.stop(true, true).slideToggle(300); // stop() so fast clicks do not repeat it
    $(this).attr('aria-expanded', String(!isOpen));
    $(this).text(isOpen ? 'Show steps' : 'Hide steps');
});

// ---------- Form ----------
function getRecipeError(field) {
    const value = field.value.trim();

    if (field.id === 'r-name') {
        if (value === '') return 'Please enter your name.';
        if (value.length < 2) return 'The name is too short.';
    }
    if (field.id === 'r-email') {
        if (value === '') return 'Please enter your email.';
        if (!isEmail(value)) return 'This email does not look right, for example name@mail.kz.';
    }
    if (field.id === 'r-title') {
        if (value === '') return 'Please give your recipe a name.';
        if (value.length < 3) return 'The recipe name must have at least 3 letters.';
    }
    if (field.id === 'r-time') {
        if (value === '') return 'How many minutes?';
        const minutes = Number(value);
        if (!Number.isInteger(minutes) || minutes < 1 || minutes > 180) return 'Enter a number from 1 to 180.';
    }
    if (field.id === 'r-level') {
        if (value === '') return 'Please choose a level.';
    }
    if (field.id === 'r-steps') {
        if (value === '') return 'Please write the steps.';
        if (value.length < 30) return `Write a bit more: at least 30 characters (now ${value.length}).`;
    }
    return '';
}

setupForm(document.getElementById('recipe-form'), getRecipeError, function () {
    const name = document.getElementById('r-name').value.trim();
    const title = document.getElementById('r-title').value.trim();
    $('#recipe-success')
        .text(`Thank you, ${name}! We will check "${title}" and add it to the page.`)
        .stop(true, true).hide().fadeIn(500);
});

showRecipes();
