# Too Good To Go — Astana

Endterm project for **Web Technologies 1 (Front End)**, AITU (the Midterm website, made interactive).
Team: Yernaz Amangeldin, Zhubanazar Meyirzhan, Oshanbay Amir.

A website for a food-rescue app in Astana: cafés, bakeries and shops sell the food they did not sell
today as "surprise bags" at up to 70% off. A visitor can find a bag, order food from a partner,
share a recipe, and a café can calculate its income and join.

> Student concept. The site is not connected to the real Too Good To Go company.
> The colours were inspired by [lastbite.com.au](https://lastbite.com.au/); no templates were used.

## Pages

| Page | File | Made by | New in the Endterm |
|---|---|---|---|
| Home | `index.html`, `js/home.js` | Yernaz Amangeldin | Phone made with HTML/CSS in the hero, numbers, FAQ accordion with jQuery |
| Partner story | `store.html`, `js/store.js` | Yernaz Amangeldin | Menu from an array (8 dishes), category filter, bag with total and savings, pickup form |
| Find a bag | `bags.html`, `js/bags.js` | Zhubanazar Meyirzhan | 10 bags from an array, search, category filter, sort, "nothing found" |
| Recipes | `recipes.html`, `js/recipes.js` | Zhubanazar Meyirzhan | 8 recipes from an array, steps open with jQuery, "Share your recipe" form |
| For business | `business.html`, `js/business.js` | Oshanbay Amir | Income calculator, partners from an array with filter and total, join form |

Shared: `css/style.css` (colours, buttons, cards, forms, focus) and `js/main.js`
(price format, form checking, smooth scroll) — Yernaz Amangeldin.

## How the forms work

- `novalidate` turns off the browser bubbles; `setupForm()` in `js/main.js` checks every field on submit.
- Each page has its own rules (`getOrderError`, `getRecipeError`, `getJoinError`): required fields, email,
  Kazakh phone (`+7 7XX XXX XX XX`), dates, number ranges, text length, checkbox.
- The error is shown under its field (Bootstrap `.is-invalid` + `.invalid-feedback`) and disappears
  when the field is corrected. After a correct submit: a success message (jQuery) and the form is cleared.

## Files

```
index.html, store.html, bags.html, recipes.html, business.html
css/style.css      shared styles
css/<page>.css     one file per page
js/main.js         shared functions
js/<page>.js       one file per page
images/            food photos from Wikimedia Commons
```

## Credits

- Bootstrap 5.3.8 — getbootstrap.com (CDN); jQuery 3.7.1 — jquery.com (CDN)
- Font: Bricolage Grotesque — Google Fonts
- Icons: system emoji
- Texts and parts of the code were written with help of an AI assistant (Claude, Anthropic); every member
  checked and can explain the code of their own pages
- Numbers about food waste: UNEP Food Waste Index Report 2024
- Photos: Wikimedia Commons, cropped and resized by us:
  - `croissant.jpg` — [MediasLunasenMardelPlata.jpg](https://commons.wikimedia.org/wiki/File:MediasLunasenMardelPlata.jpg), Ezarate, CC BY-SA 4.0
  - `doner.jpg` — [Nowruz Akigase Park kebab 2026 01.jpg](https://commons.wikimedia.org/wiki/File:Nowruz_Akigase_Park_kebab_2026_01.jpg), KQuhen, CC BY-SA 4.0
  - `doner-spit.jpg` — [Shawarma stand in central Aleppo, Syria.jpg](https://commons.wikimedia.org/wiki/File:Shawarma_stand_in_central_Aleppo,_Syria.jpg), Vyacheslav Argenberg, CC BY 4.0
  - `sushi.jpg` — [Sushi and Sashimi.jpg](https://commons.wikimedia.org/wiki/File:Sushi_and_Sashimi.jpg), ActivBowser9177, CC BY 4.0
  - `vegetables.jpg` — [Outdoor market fruit and vegetable stall Market Place Romford London 01.jpg](https://commons.wikimedia.org/wiki/File:Outdoor_market_fruit_and_vegetable_stall_Market_Place_Romford_London_01.jpg), Acabashi, CC BY-SA 4.0
  - `cake.jpg` — [A slice of Delicious Cake.jpg](https://commons.wikimedia.org/wiki/File:A_slice_of_Delicious_Cake.jpg), Bim24, CC BY-SA 4.0
  - `salad.jpg` — [Greek salad (5178297958).jpg](https://commons.wikimedia.org/wiki/File:Greek_salad_(5178297958).jpg), Geoff Peters from Vancouver, BC, Canada, CC BY 2.0
  - `coffee.jpg` — [Danish pastry and coffee at Factory Kamppi.jpg](https://commons.wikimedia.org/wiki/File:Danish_pastry_and_coffee_at_Factory_Kamppi.jpg), JIP, CC BY-SA 4.0
  - `baursak.jpg` — [Boortsog 2.JPG](https://commons.wikimedia.org/wiki/File:Boortsog_2.JPG), Brücke-Osteuropa, Public domain
  - `grocery.jpg` — [Cheese platter, french style (42231088730).jpg](https://commons.wikimedia.org/wiki/File:Cheese_platter,_french_style_(42231088730).jpg), Ella Olsson from Stockholm, Sweden, CC BY 2.0
  - `pide.jpg` — [Turkish pide bread from london.jpg](https://commons.wikimedia.org/wiki/File:Turkish_pide_bread_from_london.jpg), Caroline Ford, CC BY-SA 3.0
  - `baklava.jpg` — [2018-04-28 Turkish baklava in Australian turkish cafe.jpg](https://commons.wikimedia.org/wiki/File:2018-04-28_Turkish_baklava_in_Australian_turkish_cafe.jpg), Maksym Kozlenko, CC BY-SA 4.0
  - `manti.jpg` — [Manti in Cappadocia.jpg](https://commons.wikimedia.org/wiki/File:Manti_in_Cappadocia.jpg), ekke vasli from Eskisehir, Turkey, CC BY 2.0
  - `bread-pudding.jpg` — [Banana foster bread pudding 01.jpg](https://commons.wikimedia.org/wiki/File:Banana_foster_bread_pudding_01.jpg), star5112, CC BY-SA 2.0
  - `croutons.jpg` — [13-09-01-kochtreffen-wien-Bi-frie-004.jpg](https://commons.wikimedia.org/wiki/File:13-09-01-kochtreffen-wien-Bi-frie-004.jpg), Bi-frie, CC BY 3.0
  - `fried-rice.jpg` — [Fried rice in home.jpg](https://commons.wikimedia.org/wiki/File:Fried_rice_in_home.jpg), Peachyeung316, CC BY-SA 4.0
  - `smoothie.jpg` — [Fresh fruit smoothie preparation with assorted fruits on a table.jpg](https://commons.wikimedia.org/wiki/File:Fresh_fruit_smoothie_preparation_with_assorted_fruits_on_a_table.jpg), Shixart1985, CC BY 2.0
  - `soup.jpg` — [Simple vegetable soup 2009.jpg](https://commons.wikimedia.org/wiki/File:Simple_vegetable_soup_2009.jpg), Scott Teresi, CC BY-SA 2.0
  - `trifle.jpg` — [Trifle.jpg](https://commons.wikimedia.org/wiki/File:Trifle.jpg), Ben, Public domain

## Links

- Repository: https://github.com/A11ert/TooGoodToGo
- Website (GitHub Pages): https://a11ert.github.io/TooGoodToGo/
