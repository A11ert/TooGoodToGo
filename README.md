# Too Good To Go — Astana

Midterm project for **Web Technologies 1 (Front End)**, AITU.
Team: Yernaz Amangeldin, Zhubanazar Meyirzhan, Oshanbay Amir.

A website for a food-rescue app in Astana: cafés, bakeries and shops sell the food they did not sell
today as "surprise bags" at up to 70% off, so it does not end up in the bin.

> Student concept. The site is not connected to the real Too Good To Go company.
> The colours were inspired by [lastbite.com.au](https://lastbite.com.au/); no templates were used.

## Pages

| Page | File | Made by | What is on it |
|---|---|---|---|
| Home | `index.html` | Yernaz Amangeldin | Hero with a photo, "How it works" slider (Bootstrap carousel, 3 steps), FAQ (Bootstrap accordion) |
| Partner story | `store.html` | Yernaz Amangeldin | Two columns with `order-*` (from Assignment 3), 3 boxes (CSS Grid) |
| Find a bag | `bags.html` | Zhubanazar Meyirzhan | 3 Bootstrap cards, **table** of pickup times |
| Recipes | `recipes.html` | Zhubanazar Meyirzhan | 3 recipes (Flexbox) |
| For business | `business.html` | Oshanbay Amir | Sign-up **form** with Bootstrap fields |

## What is used

- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`, `table` with `caption/thead/tbody`, `form` with `fieldset/legend/label`
- Flexbox (recipes, arrows and dots of the slider, footer at the bottom) and CSS Grid (boxes on Partner story)
- Our own media queries in every CSS file
- Bootstrap 5.3: grid, navbar, carousel, cards, accordion, table, form controls, buttons
- One font from Google Fonts, 4 colours as CSS variables

## Files

```
index.html, bags.html, recipes.html, store.html, business.html
css/style.css     shared: colours, font, menu, button, footer
css/home.css, css/bags.css, css/recipes.css, css/store.css, css/business.css   one file per page
images/           8 food photos from Wikimedia Commons
```

## Credits

- Font: Bricolage Grotesque — Google Fonts
- Bootstrap 5.3.8 — getbootstrap.com (CDN)
- Photos: Wikimedia Commons, cropped and resized by us:
  - `croissant.jpg` — [MediasLunasenMardelPlata.jpg](https://commons.wikimedia.org/wiki/File:MediasLunasenMardelPlata.jpg), Ezarate, CC BY-SA 4.0
  - `doner.jpg` — [Nowruz Akigase Park kebab 2026 01.jpg](https://commons.wikimedia.org/wiki/File:Nowruz_Akigase_Park_kebab_2026_01.jpg), KQuhen, CC BY-SA 4.0
  - `cake.jpg` — [A slice of Delicious Cake.jpg](https://commons.wikimedia.org/wiki/File:A_slice_of_Delicious_Cake.jpg), Bim24, CC BY-SA 4.0
  - `coffee.jpg` — [Danish pastry and coffee at Factory Kamppi.jpg](https://commons.wikimedia.org/wiki/File:Danish_pastry_and_coffee_at_Factory_Kamppi.jpg), JIP, CC BY-SA 4.0
  - `manti.jpg` — [Manti in Cappadocia.jpg](https://commons.wikimedia.org/wiki/File:Manti_in_Cappadocia.jpg), ekke vasli from Eskisehir, Turkey, CC BY 2.0
  - `bread-pudding.jpg` — [Banana foster bread pudding 01.jpg](https://commons.wikimedia.org/wiki/File:Banana_foster_bread_pudding_01.jpg), star5112, CC BY-SA 2.0
  - `fried-rice.jpg` — [Fried rice in home.jpg](https://commons.wikimedia.org/wiki/File:Fried_rice_in_home.jpg), Peachyeung316, CC BY-SA 4.0
  - `soup.jpg` — [Simple vegetable soup 2009.jpg](https://commons.wikimedia.org/wiki/File:Simple_vegetable_soup_2009.jpg), Scott Teresi, CC BY-SA 2.0
- Texts on the website: written with the help of an AI assistant (Claude)

## Links

- Repository: https://github.com/A11ert/TooGoodToGo
- Website (GitHub Pages): https://a11ert.github.io/TooGoodToGo/
