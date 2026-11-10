// Find a bag page: search, filter and sort (Zhubanazar Meyirzhan)

// ---------- Data: tonight's bags ----------
const bags = [
    { store: 'Nan & Co. Bakery', title: 'Bakery bag', category: 'bakery', district: 'Yesil', price: 990, oldPrice: 3000, pickup: '20:00', left: 3, image: 'images/croissant.jpg', alt: 'Croissants on a plate' },
    { store: 'Turkish Food', title: 'Dinner bag', category: 'meals', district: 'Turan', price: 1490, oldPrice: 4500, pickup: '22:00', left: 2, image: 'images/doner.jpg', alt: 'Döner wrap' },
    { store: 'Green Market', title: 'Fruit and vegetable box', category: 'grocery', district: 'Almaty', price: 1190, oldPrice: 3600, pickup: '19:00', left: 5, image: 'images/vegetables.jpg', alt: 'Fruit and vegetables at a market' },
    { store: 'Sweet Shanyrak', title: 'Cake bag', category: 'sweets', district: 'Yesil', price: 1290, oldPrice: 3900, pickup: '20:30', left: 1, image: 'images/cake.jpg', alt: 'A slice of cake' },
    { store: 'Bowl Bar', title: 'Salad and bowl bag', category: 'meals', district: 'Saryarka', price: 1390, oldPrice: 3800, pickup: '21:00', left: 2, image: 'images/salad.jpg', alt: 'Greek salad' },
    { store: 'Coffee Steppe', title: 'Coffee and pastry bag', category: 'bakery', district: 'Baikonur', price: 690, oldPrice: 2000, pickup: '18:00', left: 4, image: 'images/coffee.jpg', alt: 'Coffee and a pastry' },
    { store: 'Apa Bakery', title: 'Bread and baursak bag', category: 'bakery', district: 'Saryarka', price: 590, oldPrice: 1800, pickup: '19:30', left: 6, image: 'images/baursak.jpg', alt: 'Fried baursak' },
    { store: 'Daily Deli', title: 'Grocery bag', category: 'grocery', district: 'Yesil', price: 1590, oldPrice: 4800, pickup: '21:30', left: 1, image: 'images/grocery.jpg', alt: 'Cheese and grapes on a plate' },
    { store: 'Sakura Rolls', title: 'Sushi bag', category: 'meals', district: 'Nura', price: 1890, oldPrice: 5600, pickup: '22:30', left: 2, image: 'images/sushi.jpg', alt: 'Sushi and sashimi' },
    { store: 'Istanbul Sweets', title: 'Baklava box', category: 'sweets', district: 'Turan', price: 890, oldPrice: 2700, pickup: '20:00', left: 3, image: 'images/baklava.jpg', alt: 'Baklava with pistachios' }
];

const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');
const bagList = document.getElementById('bag-list');

// one card from one bag object
function createCard(bag) {
    let leftClass = 'badge-left';
    if (bag.left === 1) {
        leftClass = 'badge-left last';
    }

    const col = document.createElement('div');
    col.className = 'col-sm-6 col-lg-4';
    col.innerHTML = `
        <article class="food-card">
            <div class="bag-photo">
                <img src="${bag.image}" alt="${bag.alt}">
                <span class="${leftClass}">${bag.left} left</span>
            </div>
            <div class="food-card-body">
                <p class="bag-store">${bag.store} · ${bag.district}</p>
                <h2 class="h3">${bag.title}</h2>
                <p class="price">${formatPrice(bag.price)} <s>${formatPrice(bag.oldPrice)}</s></p>
                <p class="bag-time">Pick up from <strong>${bag.pickup}</strong></p>
            </div>
        </article>`;
    return col;
}

// filters, sorts and shows the bags; runs after every change
function showBags() {
    const word = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;

    // 1. filter
    const result = bags.filter(function (bag) {
        const rightCategory = category === 'all' || bag.category === category;
        const hasWord = bag.store.toLowerCase().includes(word) ||
                        bag.title.toLowerCase().includes(word) ||
                        bag.category.includes(word);
        return rightCategory && hasWord;
    });

    // 2. sort
    if (sortSelect.value === 'cheap') {
        result.sort((a, b) => a.price - b.price);
    } else if (sortSelect.value === 'discount') {
        result.sort((a, b) => (b.oldPrice - b.price) - (a.oldPrice - a.price));
    } else {
        result.sort((a, b) => a.pickup.localeCompare(b.pickup));
    }

    // 3. show
    bagList.innerHTML = '';
    let cheapest = Infinity;
    for (const bag of result) {
        bagList.append(createCard(bag));
        if (bag.price < cheapest) {
            cheapest = bag.price;
        }
    }

    // 4. count and the cheapest price, or "nothing found"
    const info = document.getElementById('result-info');
    if (result.length === 0) {
        info.textContent = '0 bags found';
        $('#nothing').stop(true, true).slideDown(300);
    } else {
        const bagWord = result.length === 1 ? 'bag' : 'bags';
        info.textContent = `${result.length} ${bagWord} found · from ${formatPrice(cheapest)}`;
        $('#nothing').stop(true, true).hide();
        $(bagList).children().hide().fadeIn(300);
    }
}

// quick facts at the top: counted from the array, not written by hand
function showFacts() {
    let bagsLeft = 0;
    let lastPickup = '00:00';
    const stores = [];

    for (const bag of bags) {
        bagsLeft += bag.left;
        if (bag.pickup > lastPickup) {
            lastPickup = bag.pickup;
        }
        if (!stores.includes(bag.store)) {
            stores.push(bag.store);
        }
    }

    document.getElementById('fact-bags').textContent = bagsLeft;
    document.getElementById('fact-stores').textContent = stores.length;
    document.getElementById('fact-last').textContent = lastPickup;
}

searchInput.addEventListener('input', showBags);
categorySelect.addEventListener('change', showBags);
sortSelect.addEventListener('change', showBags);

// Escape clears the search
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        searchInput.value = '';
        showBags();
    }
});

document.getElementById('reset').addEventListener('click', function () {
    searchInput.value = '';
    categorySelect.value = 'all';
    showBags();
    searchInput.focus();
});

showFacts();
showBags();
