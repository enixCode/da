# Components

Patterns réutilisables enixCode. Chaque composant est documenté avec : description, variants, sizes, states, anatomy, do/don't, accessibility, related.

Source d'inspiration structurelle : Primer (GitHub), Carbon (IBM), Polaris (Shopify). Format calibré pour un solo dev : concis, sans Figma, mesures concrètes uniquement.

Les composants ci-dessous sont implémentés dans le marketplace `enixCode/plugins`. Toute déviation est un bug.

---

## Button

### Description
Action primaire ou secondaire dans un flow utilisateur. Toujours `<button>` ou `<a>` natif, jamais `<div>`.

### Variants
| Name | Quand l'utiliser |
|---|---|
| `primary` | Action principale du flow. Une seule par viewport. Bg sombre (`--mark-bg`), texte clair (`--mark-fg`). |
| `secondary` | Action liée mais non principale. Underline simple, pas de bg. |
| `danger` | Destructif (delete, reset, clear). Bg `--hot` boosté ou texte rouge sur outline. Jamais comme variant par défaut. |

Pas de `tertiary` ou `ghost` sauf nouveau besoin justifié. KISS.

### Sizes
Une seule taille pour l'instant, dimensionnée pour atteindre le minimum WCAG touch target.

| Size | Height | H-padding | Font-size |
|---|---|---|---|
| `md` | 44px | `space-5` (24px max desktop) | 12-14px |

### States

| State | Trigger | Style |
|---|---|---|
| `default` | repos | bg `--mark-bg`, color `--mark-fg` |
| `hover` | pointeur | bg `--hot` (transition 140ms ease-out) |
| `focus-visible` | clavier uniquement | outline 2px solid `--hot`, offset 2px |
| `active` | clic en cours | natif navigateur, pas de override |
| `disabled` | `[disabled]` ou `aria-disabled="true"` | opacity 0.5, cursor not-allowed |
| `loading` | `aria-busy="true"` + spinner inline | label remplacé par "Loading..." |

`focus-visible` obligatoire (WCAG 2.2 SC 2.4.11 Focus Appearance, level AA).

### Anatomy

```
┌─────────────────────────────────────────┐
│  ┌────┐    ┌──────────────┐    ┌────┐  │
│  │icon│    │    label     │    │  ↗ │  │
│  └────┘    └──────────────┘    └────┘  │
│   8px           label             8px   │
└─────────────────────────────────────────┘
   16px h-padding         16px h-padding
        height: 44px
```

- Padding horizontal : `space-4` (16px)
- Gap icon/label : `space-2` (8px)
- Height : 44px (touch target WCAG 2.5.5)
- Border-radius : 0 (swiss modernist : pas de radius)

### Do / Don't

- **Do** : label = verbe + objet. `Open project`, `Install once`, `Read docs`.
- **Do** : un seul primary par viewport principal. Si deux actions sont équivalentes, c'est qu'une est mal nommée.
- **Don't** : `Click here`, `Submit`, `OK`. Verbes vides.
- **Don't** : pas de point final. Pas d'em-dash dans le label.
- **Don't** : pas d'emoji dans le label.

### Accessibility

- Toujours `<button type="button">` ou `<a href>`. Jamais `<div>` ou `<span>` cliquable.
- Si icon-only : `aria-label="Action verb + object"` obligatoire.
- Contraste texte : ≥ 4.5:1 (validé : `--mark-fg` sur `--mark-bg` = 17:1).
- Contraste focus outline : ≥ 3:1 vs background adjacent.

### Related
- `Badge` : statut non-cliquable (jamais transformer un badge en button)
- Liens textuels du body : `<a>` simple, soulignement par défaut

---

## Badge

### Description
Étiquette inline qui qualifie un objet (kind, statut, version). Non-cliquable, non-interactive. Juste de l'info.

### Variants
| Name | Quand l'utiliser | Visuel |
|---|---|---|
| `full` | Marquer une catégorie forte (ex : `plugin + cli`) | Bg `--hot`, texte `--constant-paper` |
| `solo` | Marquer une catégorie discrète (ex : `plugin`) | Bg `--yellow`, texte `--constant-ink` |
| `outline` | Marquer un statut neutre (ex : `repo pending`) | Bg `--paper`, border + texte `--ink` |

Les badges utilisent `--constant-ink`/`--constant-paper` (jamais inversés en dark mode) parce que leur background coloré reste constant.

### Sizes
Une seule taille.

| Size | Height | Padding | Font-size |
|---|---|---|---|
| `sm` | ~22px | 4px 10px | 10px |

### States

Aucun state interactif (pas de hover, pas de focus). Si tu veux un badge cliquable, ce n'est plus un badge, c'est un button.

### Anatomy

```
┌─────────────────────┐
│  PLUGIN + CLI       │
└─────────────────────┘
   1.5px border, 4×10px padding
   font-weight 700, letter-spacing 0.18em, uppercase
```

### Do / Don't

- **Do** : label en majuscules avec letter-spacing positif (`0.16-0.20em`). Cohérent swiss modernist.
- **Do** : 1 ou 2 badges max par card. 3+ = bruit visuel.
- **Don't** : pas de badge cliquable. Si interaction nécessaire, c'est un button.
- **Don't** : pas d'icon dans un badge texte. Si icon nécessaire, faire un composant dédié.

### Accessibility
- Sémantique : `<span>` simple. Pas de `role`.
- Couleur : informer uniquement par couleur n'est pas accessible. Le label texte doit suffire à comprendre.

### Related
- `Button` : si l'élément doit être cliquable
- `Tag` : équivalent web, terminologie alternative (Polaris l'appelle `Badge`, Carbon `Tag`)

---

## Install command block

### Description
Bloc dédié qui présente une commande shell ou Claude Code copiable en 1 clic. Spécifique enixCode (marketplace, docs).

### Variants
| Name | Quand l'utiliser |
|---|---|
| `hero` | Install command principale du site, en haut à droite du hero |
| `card` | Install command spécifique à un item (plugin, package), inline dans la card |
| `subcmd` | Sub-command à l'intérieur d'un `<details>` (ex : npm install secondaire) |

### States
| State | Trigger |
|---|---|
| `default` | repos |
| `hover` | survol du bouton copy |
| `copied` | post-copie pendant 1500ms (bg `--hot`, "✓ copied") |

### Anatomy

```
┌────────────────────────────────────────────┬──────────┐
│  $ /plugin install light-process@enix      │  COPY    │
│  ───────                                    ├──────────┤
│  font: JetBrains Mono 500                  │  44px h  │
│  bg: --mark-bg                              │  bg:--mark-fg │
└────────────────────────────────────────────┴──────────┘
   Padding: 12px 16px              Padding: 14px 20px
```

- Le `$` prefix est coloré `--yellow`, généré via `::before { content: "$ "; }`
- Le bouton `COPY` a `min-height: 44px` pour le touch target
- En mode dark, le bloc reste sombre (vars `--mark-*` ne s'inversent pas)

### Do / Don't

- **Do** : la commande est en `<button data-copy="...">` pour le copy au clic sur le texte. Bouton `copy` à droite pour redondance.
- **Do** : 1 install command principale par page (hero), N par item (cards).
- **Don't** : pas de prompt fictif (`>`, `$ user@host`). Juste `$` ou rien.
- **Don't** : pas de coloration syntaxique. Le bloc reste mono lisible, pas un éditeur.

### Accessibility
- `aria-label="Copy: <command>"` sur le bouton commande et sur le bouton copy.
- Feedback visuel + texte ("copied") pendant 1500ms.
- Skipper le bloc en lecture vocale si un visiteur n'a pas besoin de copier (cosmétique uniquement).

### Related
- `Button` : pour les CTAs textuels (Open project, Read docs)
- `<pre><code>` : pour les snippets non-copiables, longs

---

## Card (plugin)

### Description
Conteneur visuel pour un item d'un listing. Sur le marketplace, chaque plugin est rendu comme une card.

### Anatomy

```
┌───────┬──────────────────────────────────────────────────────┐
│  01   │  Plugin name                v 0.5.1 · MIT · 5 skills │
│       │  ┌──────────────────────────────────────────────────┐│
│       │  │ Description italic Fraunces serif                 ││
│       │  └──────────────────────────────────────────────────┘│
│       │  $ /plugin install ...                  [COPY]       │
│       │  > Setup the engine - required to run                │
│       │  ┌──────────┬───────────────────────────────────────┐│
│       │  │ Skills   │ context, create-workflow, ...         ││
│       │  │ Stack    │ light-process · light-run · ...       ││
│       │  └──────────┴───────────────────────────────────────┘│
│       │  [Open project ↗]   Readme ↗   Docs site ↗           │
└───────┴──────────────────────────────────────────────────────┘
   90px gutter            body
   padding 36px 28px
```

### Variants (modes de vue)

| Mode | Layout | Contenu visible |
|---|---|---|
| `detail` (default) | grid `90px 1fr`, cards empilées | tout : title, meta, desc, install, setup, specs, CTAs |
| `list` | grid `50px 1fr`, body en flex-row, padding compact | title, badge, license, counts, primary CTA seulement |
| `grid` | catalogue en `grid 2 cols`, card complète | tout, mais 2 cards par ligne |

Switch par toggle dans la topbar. Persisted en `localStorage`.

### Anti-patterns

- Plus de 4 sections dans une card avant scroll (Description, Install, Specs, CTAs = max).
- Hover qui agrandit la card (zoom de 5%) : décoratif, sentir l'AI slop.
- Card cliquable entièrement (cible géante) : préférer des CTAs explicites dans la card.

### Accessibility
- Card en `<article>` avec `aria-labelledby` pointant sur le `<h2>` du nom.
- Heading hiérarchie : H1 site, H2 chaque card.
- Pas de "click anywhere on card" : interactions ciblées via les CTAs internes.

---

## Topbar

### Description
Barre fixe en haut de page. Contient identité minimale + métadonnées + toggles.

### Anatomy

```
┌────────────────────────────────────────────────────────────────┐
│  ● enixCode / plugins         02 plugins   GitHub ↗  [view][theme]│
└────────────────────────────────────────────────────────────────┘
   border-bottom 2px solid --rule
   padding 12px 28px
   sticky top: 0, z-index: 10
```

- Left : identité (dot rouge + wordmark)
- Right : métadonnées + lien externe + toggles (view, theme)
- Border-bottom 2px : séparation forte du contenu
- Sticky : reste visible au scroll, padding compact pour ne pas manger l'espace

### Anti-patterns
- Topbar > 60px de haut (mange l'espace utile).
- Logo + nav + 5 liens + CTA + search bar : trop dense, faire menu hamburger.
- Drop-shadow ou border colorée flashy : casse le swiss modernist.

---

## Hero

### Description
Section d'accueil de page. Titre, tagline, install command (si applicable). Volontairement compact (~280px), pas un hero plein viewport.

### Anatomy

```
┌──────────────────────────────────────────────────────────┐
│  ENIX/PLUGINS                                            │
│  ═════════════════                  ┌──────────────────┐ │
│  Tagline italic Fraunces            │ Install once     │ │
│  Lean tools. No fluff.              │ $ /plugin add..  │ │
│                                     │ [COPY]           │ │
│  ──────────────────────             └──────────────────┘ │
│  02 plugins · by enixCode · updated may 2026             │
└──────────────────────────────────────────────────────────┘
   padding: 32px 28px 28px
   border-bottom: 4px solid --rule
   grid: 1.5fr 1fr (gap 36px)
```

### Anti-patterns
- Hero qui prend > 50% du viewport sur 1080p (pattern AI slop).
- Hero avec watermark géant en filigrane (testé, raté, mange l'espace utile).
- Tagline italique multi-lignes (lisibilité dégradée pour dyslexie).

### Accessibility
- H1 unique sur la page = wordmark.
- Install command avec `aria-label` sur le bouton copy.

---

## Anti-patterns globaux

- **Composer 5+ variants par composant** : Carbon en a 5 par button, c'est trop pour un solo. Vise 3 max.
- **Documenter en prose** : "le bouton est rectangulaire avec un padding généreux". Inutilisable. Mesures concrètes uniquement.
- **Anatomy sans nombres** : un schéma sans dimensions est de la déco. Toujours indiquer padding, gap, height.
- **Variants nommés par couleur** : `red-button`, `blue-button`. Le nom doit décrire l'intention (`danger`, `primary`), pas le rendu.
- **Composants sans `Related`** : un dev qui cherche "comment marquer un statut" ne sait pas si c'est un Badge ou un Button. Toujours pointer vers les voisins.

## Références

- [Primer Components - Button](https://primer.style/components/button/) - structure exemplaire pour un composant
- [Carbon Button Usage](https://carbondesignsystem.com/components/button/usage/) - 5 variants justifiés
- [Polaris - Badge](https://polaris.shopify.com/components/feedback-indicators/badge) - bon exemple de variants colorés
- [Wise Components](https://wise.design/components) - structure de doc moderne
- [WCAG 2.2 SC 2.4.11 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [WCAG 2.5.5 Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
