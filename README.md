# da - direction artistique enixCode

Source de vérité pour l'identité visuelle d'enixCode : palette, typographie, voix, tokens, anti-patterns.

Ce repo est consommé par tous les sites et produits enixCode. Avant de modifier une couleur ou un poids de police localement dans un projet, mets-le à jour ici d'abord.

## Pour appliquer cette DA

Si tu construis quelque chose pour enixCode (site, app, doc, README), lis ces fichiers **avant** de toucher à du CSS ou d'écrire du copy :

1. [PALETTE.md](PALETTE.md) - quelles couleurs utiliser, lesquelles éviter, ratios de contraste
2. [TYPOGRAPHY.md](TYPOGRAPHY.md) - les 4 familles autorisées, échelle, anti-patterns
3. [VOICE.md](VOICE.md) - ton, vocabulaire, mots bannis. **Notamment : jamais d'em-dash, jamais de "the future of...", jamais d'emoji dans le UI.**
4. [LAYOUT.md](LAYOUT.md) - spacing scale, breakpoints, container, grille
5. [COMPONENTS.md](COMPONENTS.md) - Button, Badge, Install block, Card, Topbar, Hero
6. [ACCESSIBILITY.md](ACCESSIBILITY.md) - engagement WCAG 2.2 AA non négociable
7. [MOTION.md](MOTION.md) - seulement si tu ajoutes des animations

Le tableau ci-dessous est l'index complet. Pas un substitut à la lecture des fichiers.

## Contenu

| Fichier | Rôle |
|---|---|
| [PALETTE.md](PALETTE.md) | Couleurs nommées, hex, rôles sémantiques, ratios de contraste WCAG |
| [TYPOGRAPHY.md](TYPOGRAPHY.md) | Stack typo (display, body, mono), échelle, fallbacks |
| [VOICE.md](VOICE.md) | Principes d'écriture, ton par contexte, vocabulaire, imagery, anti-patterns |
| [ACCESSIBILITY.md](ACCESSIBILITY.md) | Engagement WCAG 2.2 AA, focus states, touch targets, méthode de test |
| [MOTION.md](MOTION.md) | Productive vs expressive motion, tokens de durée, easing, anti-patterns |
| [LAYOUT.md](LAYOUT.md) | Spacing scale (4-80px), breakpoints, container max-widths, grille, z-index |
| [COMPONENTS.md](COMPONENTS.md) | Patterns Button, Badge, Install block, Card, Topbar, Hero avec anatomy + states |
| [CHANGELOG.md](CHANGELOG.md) | Versions de la DA, ajouts, modifs, consumers impactés |
| [tokens.css](tokens.css) | Variables CSS prêtes à `@import` (web, hand-written, avec @media) |
| [tokens.json](tokens.json) | Source de vérité W3C DTCG (lu par Style Dictionary) |
| [config.mjs](config.mjs) | Config Style Dictionary pour générer `dist/` |
| [dist/](dist/) | Outputs générés (CSS, SCSS, JS, Swift, Android) - ne pas éditer |
| [CONSUMERS.md](CONSUMERS.md) | Liste des projets qui consomment cette DA |
| [index.html](index.html) | Brand book visuel - ouvre-le dans un navigateur |

## Pour démarrer

Brand book live : **https://enixcode.github.io/da/** (servi par GitHub Pages).
Index des docs : **https://enixcode.github.io/da/docs.html**.

### URLs publiques (CDN Pages, recommandé)

| Asset | URL |
|---|---|
| Tokens CSS racine | https://enixcode.github.io/da/tokens.css |
| Tokens JSON (DTCG) | https://enixcode.github.io/da/tokens.json |
| Tokens CSS générés | https://enixcode.github.io/da/dist/css/tokens.css |
| Tokens JS | https://enixcode.github.io/da/dist/js/tokens.js |

Headers corrects (`text/css`, `application/json`), pas de rate-limit utilisateur, CDN Fastly. À préférer aux URLs `raw.githubusercontent.com` qui restent disponibles mais sont rate-limitées et servies en `text/plain`.

### Web

Utilise le `tokens.css` racine (hand-written, inclut `@media (prefers-color-scheme: dark)`) :

```html
<link rel="stylesheet" href="https://enixcode.github.io/da/tokens.css" />
```

Ou copie le bloc `:root` directement dans ton CSS.

### Autres plateformes (iOS, Android, JS)

Les outputs sont générés via Style Dictionary et committés dans `dist/`.

```bash
npm install
npm run build
```

Outputs disponibles :

| Plateforme | Fichier | Usage |
|---|---|---|
| Web (CSS) | `dist/css/light.css`, `dark.css`, `tokens.css` | path-based vars (`--color-light-paper`) |
| Web (SCSS) | `dist/scss/_light.scss`, `_dark.scss` | imports SCSS |
| JS / Node | `dist/js/tokens.js`, `tokens.json` | constants ES6, JSON flat |
| iOS | `dist/ios/EnixTokens.swift` | classe Swift |
| Android | `dist/android/colors.xml` | resource colors |

### Ajouter un consumer

1. Ajoute une ligne dans `CONSUMERS.md`
2. Si modif d'un token, propager : édite `tokens.json` + `tokens.css` racine, puis `npm run rebuild`

## Mise à jour

Toute modif des tokens doit être documentée dans [CONSUMERS.md](CONSUMERS.md) avec la date et la liste des projets à resynchroniser.

## Credits

Fonts chargées via Google Fonts sous **SIL Open Font License 1.1** :

- **Archivo**, **Archivo Narrow** - Omnibus-Type
- **Fraunces** - Undercase Type
- **JetBrains Mono** - JetBrains

Aucune obligation juridique tant que les fonts sont servies par le CDN Google Fonts. Si self-host un jour, inclure `OFL.txt` à côté des fichiers `.woff2` et préserver les copyright notices des auteurs.

Tooling :

- **Style Dictionary** (Apache 2.0) - génère les outputs cross-platform depuis `tokens.json`

## Licence

**MIT** - copiez, modifiez, utilisez ce que vous voulez. Voir [LICENSE](LICENSE).

Si cette direction artistique vous inspire, le compliment est bienvenu, l'attribution n'est pas requise (mais appréciée).
