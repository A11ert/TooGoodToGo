// For business page: calculator, partners, join form (Oshanbay Amir)

// ---------- Calculator ----------
const calcBags = document.getElementById('calc-bags');
const calcPrice = document.getElementById('calc-price');

function getCalcError(field) {
    const number = Number(field.value);
    if (field.value === '') return 'Please enter a number.';
    if (field.id === 'calc-bags' && (number < 1 || number > 50)) return 'From 1 to 50 bags.';
    if (field.id === 'calc-price' && (number < 300 || number > 5000)) return 'From 300 to 5 000 ₸.';
    return '';
}

function calculate() {
    const bagsOk = checkField(calcBags, getCalcError);
    const priceOk = checkField(calcPrice, getCalcError);
    if (!bagsOk || !priceOk) {
        $('#calc-result').stop(true, true).fadeTo(200, 0.4); // result fades while the input is wrong
        return;
    }

    const bagsPerMonth = Number(calcBags.value) * 30;
    const money = bagsPerMonth * Number(calcPrice.value);
    const food = bagsPerMonth * 1; // about 1 kg of food in one bag

    document.getElementById('calc-money').textContent = formatPrice(money);
    document.getElementById('calc-food').textContent = `and save ${food} kg of food from the bin`;
    $('#calc-result').stop(true, true).fadeTo(200, 1);
}

calcBags.addEventListener('input', calculate);
calcPrice.addEventListener('input', calculate);

// ---------- Partners ----------
const partners = [
    { name: 'Nan & Co. Bakery', type: 'Bakery', district: 'Yesil', bagsSaved: 1240 },
    { name: 'Apa Bakery', type: 'Bakery', district: 'Saryarka', bagsSaved: 860 },
    { name: 'Coffee Steppe', type: 'Café', district: 'Baikonur', bagsSaved: 730 },
    { name: 'Bowl Bar', type: 'Café', district: 'Saryarka', bagsSaved: 410 },
    { name: 'Turkish Food', type: 'Restaurant', district: 'Turan', bagsSaved: 1580 },
    { name: 'Sakura Rolls', type: 'Restaurant', district: 'Nura', bagsSaved: 520 },
    { name: 'Green Market', type: 'Shop', district: 'Almaty', bagsSaved: 970 },
    { name: 'Daily Deli', type: 'Shop', district: 'Yesil', bagsSaved: 340 }
];

function showPartners(type) {
    const list = document.getElementById('partner-list');
    list.innerHTML = '';
    let total = 0;
    let count = 0;

    for (const partner of partners) {
        if (type !== 'all' && partner.type !== type) {
            continue;
        }
        total += partner.bagsSaved;
        count++;

        const col = document.createElement('div');
        col.className = 'col-sm-6 col-lg-3';
        col.innerHTML = `
            <article class="partner">
                <h3>${partner.name}</h3>
                <p>${partner.type} · ${partner.district}</p>
                <p><strong>${partner.bagsSaved.toLocaleString('ru-RU')}</strong> bags rescued</p>
            </article>`;
        list.append(col);
    }

    document.getElementById('partner-total').textContent =
        `${count} partners · together ${total.toLocaleString('ru-RU')} bags rescued`;

    // jQuery: cards appear one after another
    $(list).children().hide().each(function (i) {
        $(this).delay(i * 80).fadeIn(250);
    });
}

document.getElementById('partner-filters').addEventListener('click', function (event) {
    const button = event.target.closest('button');
    if (!button) {
        return;
    }
    document.querySelectorAll('#partner-filters button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    showPartners(button.dataset.type);
});

// ---------- Join form ----------
function getJoinError(field) {
    const value = field.value.trim();

    if (field.id === 'j-name') {
        if (value === '') return 'Please enter the name of your business.';
        if (value.length < 2) return 'The name is too short.';
    }
    if (field.id === 'j-type') {
        if (value === '') return 'Please choose a type.';
    }
    if (field.id === 'j-email') {
        if (value === '') return 'Please enter your email.';
        if (!isEmail(value)) return 'This email does not look right, for example cafe@mail.kz.';
    }
    if (field.id === 'j-phone') {
        if (value === '') return 'Please enter your phone number.';
        if (!isPhone(value)) return 'Enter a Kazakh number, for example +7 701 234 56 78.';
    }
    if (field.id === 'j-bags') {
        const number = Number(value);
        if (value === '') return 'How many bags per day?';
        if (!Number.isInteger(number) || number < 1 || number > 50) return 'Enter a whole number from 1 to 50.';
    }
    if (field.id === 'j-agree') {
        if (!field.checked) return 'Please agree to continue.';
    }
    return '';
}

setupForm(document.getElementById('join-form'), getJoinError, function () {
    const name = document.getElementById('j-name').value.trim();
    $('#join-success')
        .text(`Thank you! ${name} is on the list. We will call you within 2 days.`)
        .stop(true, true).hide().slideDown(400);
});

showPartners('all');
