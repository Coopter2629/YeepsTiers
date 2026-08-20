# Yeeps Tiers website

## Upload these files to GitHub

Place these files in the root of your GitHub Pages repository:

- `index.html` — Home page
- `rankings.html` — Rankings page
- `styles.css` — Shared styling
- `site.js` — Mobile navigation and footer year
- `rankings.js` — Player data, tabs, search, and tier badges
- `images/hero.jpg` — Optional home-page hero image
- `images/players/` — Optional player portrait images

## Set your Discord link

In `index.html` and `rankings.html`, replace every instance of:

`https://discord.gg/REPLACE-WITH-YOUR-INVITE`

with your real Discord invite URL.

## Add a hero image

1. Create an `images` folder.
2. Upload an image named `hero.jpg` inside it.
3. The home page will show it automatically.

## Add player images

1. Create an `images/players` folder.
2. Upload a file such as `aether.png`.
3. In `rankings.js`, change a player's image setting:

```js
{name: "Aether", region: "NA", image: "images/players/aether.png", tiers: { Overall: "S+" }}
```

Keep `image: ""` to use the colored initials avatar.

## Edit rankings

Edit the `players` list in `rankings.js`. Tier colors supported: `S+`, `S`, `A`, `B`, and `C`.

## Publish with GitHub Pages

In GitHub: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
