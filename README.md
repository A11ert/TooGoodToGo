# Too Good To Go — Astana

Midterm project for **Web Technologies 1 (Front End)**, AITU.
Team: Yernaz Amangeldin, Zhubanazar Meyirzhan, Oshanbay Amir.

A website for a food-rescue app in Astana: cafés, bakeries and shops sell the food they did not sell
today as "surprise bags" at up to 70% off, so it does not end up in the bin.

> Student concept. The site is not connected to the real Too Good To Go company.
> The layout and colour mood were inspired by [lastbite.com.au](https://lastbite.com.au/);
> all code is written by hand, no templates.

## Pages

| Page | File | What is on it |
|---|---|---|
| Home | `index.html` | Hero with a phone made in HTML/CSS, live bags (Bootstrap cards), two sides, steps, numbers, FAQ (accordion) |
| Recipes | `recipes.html` | Six leftover recipes in a "magazine" CSS Grid (from Assignment 2), steps open with `<details>`, storage tips (Flexbox) |
| Find a bag | `bags.html` | Category filter with radio buttons and `:has()` (no JavaScript), 9 bag cards, pickup **table** that turns into cards on a phone |
| Partner story | `store.html` | Assignment 3 page in the style of the site: photo hero, two columns with `order-*`, my own CSS Grid, cards, reviews |
| For business | `business.html` | Benefits (Flexbox), steps, plans (Flexbox), quote, sign-up **form** with Bootstrap controls and a `:target` thank-you message |

## What is used

- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `blockquote`, `address`, `time`, `table` with `caption/thead/tbody/tfoot`, `form` with `fieldset/legend/label`
- Flexbox and CSS Grid written by us (`css/*.css`)
- My own media queries: 576 / 768 / 992 / 1200 px, `max-width` for the phone table
- Bootstrap 5.3: grid, navbar, cards, accordion, breadcrumb, buttons, `btn-check`, form controls, display utilities — all restyled with Bootstrap CSS variables
- Transitions on hover: cards lift, buttons move up, the phone in the hero turns straight
- Custom fonts from Google Fonts, my own SVG logo

## Files

```
index.html, bags.html, recipes.html, store.html, business.html
css/style.css     shared: colours, fonts, navbar, buttons, bag card, steps, FAQ, footer
css/home.css      Home page only
css/bags.css      Find a bag page only
css/recipes.css   Recipes page only
css/store.css     Partner story page only
css/business.css  For business page only
images/           food photos from Wikimedia Commons (see Credits)
```

## Credits

- Fonts: Bricolage Grotesque, Geist, Geist Mono — Google Fonts
- Bootstrap 5.3.8 — getbootstrap.com (CDN)
- Icons: system emoji; logo — our own SVG
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
- Numbers about food waste: UNEP Food Waste Index Report 2024
- Texts on the website: written with the help of an AI assistant (Claude)

## Links

- Repository: _add the GitHub link here_
- Website (GitHub Pages): _add the GitHub Pages link here_
