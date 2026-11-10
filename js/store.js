// Partner story page: menu, bag with a total, pickup form (Yernaz Amangeldin)

// ---------- Data: the menu of tonight's leftovers ----------
const menu = [
    { id: 1, name: 'Döner wrap', category: 'hot', price: 990, oldPrice: 2900, left: 3, image: 'images/doner.jpg', alt: 'Döner wrap' },
    { id: 2, name: 'Mantı with yogurt', category: 'hot', price: 1290, oldPrice: 3500, left: 2, image: 'images/manti.jpg', alt: 'Mantı with yogurt' },
    { id: 3, name: 'Shawarma plate', category: 'hot', price: 1490, oldPrice: 4200, left: 1, image: 'images/doner-spit.jpg', alt: 'Meat on a shawarma spit' },
    { id: 4, name: 'Turkish pide', category: 'bakery', price: 690, oldPrice: 1800, left: 4, image: 'images/pide.jpg', alt: 'Turkish pide bread' },
    { id: 5, name: 'Baursak box', category: 'bakery', price: 490, oldPrice: 1500, left: 5, image: 'images/baursak.jpg', alt: 'Fried baursak' },
    { id: 6, name: 'Coffee and pastry', category: 'bakery', price: 590, oldPrice: 1700, left: 0, image: 'images/coffee.jpg', alt: 'Coffee and a pastry' },
    { id: 7, name: 'Baklava', category: 'dessert', price: 790, oldPrice: 2400, left: 3, image: 'images/baklava.jpg', alt: 'Baklava with pistachios' },
    { id: 8, name: 'Cake slice', category: 'dessert', price: 450, oldPrice: 1300, left: 2, image: 'images/cake.jpg', alt: 'A slice of cake' }
];

// the bag: { menu id: how many }
let cart = {};

const menuList = document.getElementById('menu-list');
const cartList = document.getElementById('cart-list');
const cartError = document.getElementById('cart-error');

// ---------- Menu ----------
function showMenu(category) {
    menuList.innerHTML = '';

    for (const item of menu) {
        if (category !== 'all' && item.category !== category) {
            continue;
        }

        let button = `<button type="button" class="btn btn-brand btn-sm" data-id="${item.id}">Add to bag</button>`;
        if (item.left === 0) {
            button = '<button type="button" class="btn btn-brand btn-sm" disabled>Sold out</button>';
        }

        const col = document.createElement('div');
        col.className = 'col-sm-6 col-xl-4';
        col.innerHTML = `
            <article class="food-card">
                <img src="${item.image}" alt="${item.alt}">
                <div class="food-card-body">
                    <h3>${item.name}</h3>
                    <p class="price">${formatPrice(item.price)} <s>${formatPrice(item.oldPrice)}</s></p>
                    <p class="left">${item.left} left tonight</p>
                    ${button}
                </div>
            </article>`;
        menuList.append(col);
    }

    // jQuery: the cards appear smoothly
    $(menuList).children().hide().fadeIn(300);
}

// filter buttons
document.getElementById('menu-filters').addEventListener('click', function (event) {
    const button = event.target.closest('button');
    if (!button) {
        return;
    }
    document.querySelectorAll('#menu-filters button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    showMenu(button.dataset.category);
});

// "Add to bag": one listener for all cards
menuList.addEventListener('click', function (event) {
    const button = event.target.closest('button[data-id]');
    if (!button) {
        return;
    }
    const item = menu.find(m => m.id === Number(button.dataset.id));
    const count = cart[item.id] || 0;

    if (count >= item.left) {
        button.textContent = `Only ${item.left} left`;
        return;
    }
    cart[item.id] = count + 1;
    showCart();
});

// ---------- Bag ----------
function showCart() {
    cartList.innerHTML = '';
    let total = 0;
    let saved = 0;

    for (const item of menu) {
        const count = cart[item.id];
        if (!count) {
            continue;
        }
        total += item.price * count;
        saved += (item.oldPrice - item.price) * count;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name} × ${count}</span>
            <span>${formatPrice(item.price * count)}
                <button type="button" class="remove" data-id="${item.id}" aria-label="Remove one ${item.name}">−</button>
            </span>`;
        cartList.append(li);
    }

    document.getElementById('cart-total').textContent = formatPrice(total);

    if (total === 0) {
        document.getElementById('cart-empty').style.display = 'block';
        document.getElementById('cart-saved').textContent = '';
    } else {
        document.getElementById('cart-empty').style.display = 'none';
        document.getElementById('cart-saved').textContent = `You save ${formatPrice(saved)}`;
        cartError.textContent = '';
    }
}

// "−" removes one portion
cartList.addEventListener('click', function (event) {
    const button = event.target.closest('button[data-id]');
    if (!button) {
        return;
    }
    const id = Number(button.dataset.id);
    cart[id] = cart[id] - 1;
    showCart();
});

// ---------- Pickup form ----------
function getOrderError(field) {
    const value = field.value.trim();

    if (field.id === 'o-name') {
        if (value === '') return 'Please enter your name.';
        if (value.length < 2) return 'The name is too short.';
    }
    if (field.id === 'o-phone') {
        if (value === '') return 'Please enter your phone number.';
        if (!isPhone(value)) return 'Enter a Kazakh number, for example +7 701 234 56 78.';
    }
    if (field.id === 'o-email') {
        if (value === '') return 'Please enter your email.';
        if (!isEmail(value)) return 'This email does not look right, for example name@mail.kz.';
    }
    if (field.id === 'o-date') {
        if (value === '') return 'Please choose a day.';
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const days = (new Date(value + 'T00:00') - today) / (24 * 60 * 60 * 1000);
        if (days < 0) return 'This day has already passed.';
        if (days > 6) return 'You can order only for the next 7 days.';
    }
    if (field.id === 'o-time') {
        if (value === '') return 'Please choose a pickup time.';
    }
    return '';
}

setupForm(document.getElementById('order-form'), getOrderError, function () {
    if (Object.values(cart).every(count => count === 0)) {
        cartError.textContent = 'Your bag is empty. Add at least one item from the menu.';
        return false;
    }

    const code = Math.floor(1000 + Math.random() * 9000); // pickup code from 1000 to 9999
    const total = document.getElementById('cart-total').textContent;
    $('#order-success')
        .text(`Thank you! Your order for ${total} is booked. Show the code ${code} at the counter.`)
        .stop(true, true).hide().slideDown(400);

    cart = {};
    showCart();
});

// start: the full menu and an empty bag
showMenu('all');
showCart();
