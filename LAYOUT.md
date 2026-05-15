# Layout

Système d'espacement, breakpoints, container, grille. Toute mesure dans un produit enixCode doit venir de cette doc. Toute exception doit être justifiée et documentée ici.

Inspiration : intersection des design systems pros (Wise, Atlassian, Polaris, IBM Carbon, Primer, Material 3). Aucune de ces valeurs n'est inventée, toutes sont consensuelles dans le métier.

## Spacing scale

Échelle hybride 4pt + 8pt. 4px comme unité atomique pour les micro-espaces, 8px et multiples pour le reste.

| Token | px | rem | Usage typique |
|---|---|---|---|
| `space-1` | 4 | 0.25 | Gap entre inline icons et label, fine séparation |
| `space-2` | 8 | 0.5 | Padding inline minimal, gap entre items denses |
| `space-3` | 12 | 0.75 | Padding boutons compacts, gap modéré |
| `space-4` | 16 | 1 | Padding standard, gap sections internes |
| `space-5` | 24 | 1.5 | Padding card, gap entre groupes |
| `space-6` | 32 | 2 | Padding section, gap entre cards |
| `space-7` | 48 | 3 | Padding section large, séparation forte |
| `space-8` | 64 | 4 | Padding hero, séparation max |
| `space-9` | 80 | 5 | Section header, marge top page |

**Règle dure** : aucune valeur d'espacement hors de cette échelle. Si une mesure ne fitte pas, elle indique un problème de hiérarchie, pas un manque dans l'échelle.

**Exception documentée** : valeurs en deçà de 4px (1px, 2px) autorisées uniquement pour les bordures et hairlines, jamais pour padding/margin/gap.

## Breakpoints

5 valeurs canoniques alignées sur Primer (GitHub). Nommées par capacité de layout, pas par device : un Surface en landscape n'est pas "tablet", il est "wide".

| Token | min-width | Aliases | Cas typiques |
|---|---|---|---|
| `xs` | 0 | `narrow`, mobile portrait | iPhone SE, petits Android |
| `sm` | 544px | mobile landscape, petite tablette | iPhone Pro landscape |
| `md` | 768px | `regular`, tablette portrait | iPad portrait |
| `lg` | 1012px | tablette landscape, laptop 11-13" | iPad Pro, MacBook Air |
| `xl` | 1280px | `wide`, desktop standard | écrans externes 1080p+ |
| `xxl` | 1400px | desktop large, 4K | écrans Studio, 4K |

**Règle dure** : ne jamais nommer "mobile/tablet/desktop" dans le code ou la doc. Les tablettes en landscape sont en `lg`, les téléphones pliables en `md`. Le device n'est plus une dimension fiable depuis ~2020.

## Container

Max-width selon le contexte de page.

| Contexte | Max-width | Padding horizontal |
|---|---|---|
| **Prose / docs** (article, README rendu, blog post) | 720px | `space-4` mobile, `space-5` desktop |
| **Produit / marketplace** (cards, dashboards, listings) | 1180px | `space-4` mobile, `space-6` desktop |
| **Hero / landing** | 1280px | `space-4` mobile, `space-6` desktop |
| **Dense / data** (tableaux, monitoring) | 100% | `space-4` mobile, `space-5` desktop |

Container fluide en `xs` et `sm`, fixe à partir de `md`. Centrage `margin-inline: auto`.

## Grid

12 colonnes en `md+`, 4 colonnes en `xs/sm`.

| Breakpoint | Colonnes | Gutter |
|---|---|---|
| `xs`, `sm` | 4 | `space-4` (16px) |
| `md+` | 12 | `space-5` (24px) |

Pas de grille modulaire (modular scale, golden ratio) : YAGNI pour un solo dev. Si un layout demande plus, c'est qu'il faut repenser la hiérarchie, pas raffiner la grille.

## Z-index scale

Échelle plate, pas de z-index numéroté à la main hors de cette table.

| Token | Valeur | Usage |
|---|---|---|
| `z-base` | 0 | Contenu normal |
| `z-sticky` | 10 | Topbar sticky, sidebar fixe |
| `z-overlay` | 100 | Backdrop modale, drawer |
| `z-modal` | 200 | Modale, dialog |
| `z-popover` | 300 | Tooltip, dropdown, popover |
| `z-toast` | 400 | Notification, toast |
| `z-skiplink` | 1000 | Skip-to-content focus visible |

**Règle dure** : pas de `z-index: 9999` ou autre nombre magique. Toute valeur en dehors de cette table est un bug.

## Anti-patterns

- **Valeurs vagues** : "padding généreux" sans nombre est inutilisable. Tout a un token ou une mesure.
- **Marges magiques** : `margin: 17px` sort de l'échelle, c'est du bricolage.
- **Breakpoints par device** : `mobile/tablet/desktop` est faux en 2026. Nommer par capacité (narrow/regular/wide) ou par taille (xs/sm/md/lg/xl).
- **Container fluide partout** : sans max-width, les lignes de prose deviennent illisibles à 1920px (>120 caractères par ligne, fatiguant).
- **z-index 9999** : signe que tu n'as pas réfléchi à la hiérarchie. Toute valeur hors de la table z-* doit être justifiée par écrit.
- **Grilles modulaires complexes** : si tu écris "modular scale" ou "golden ratio" dans ton CSS, tu sur-ingénieres pour un site dev pragmatique.

## Tokens à ajouter dans `tokens.css`

Ces tokens layout ne sont pas encore dans `tokens.css`. À ajouter quand le besoin se présente concrètement :

```css
:root {
  /* Spacing scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 80px;

  /* Containers */
  --container-prose:    720px;
  --container-product: 1180px;
  --container-hero:    1280px;

  /* Z-index */
  --z-base:      0;
  --z-sticky:   10;
  --z-overlay: 100;
  --z-modal:   200;
  --z-popover: 300;
  --z-toast:   400;
  --z-skiplink: 1000;
}

/* Breakpoints (utilisables comme @media uniquement, pas comme variables) */
@media (min-width: 544px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1012px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

## Références

- [Wise Design - Spacing](https://wise.design/foundations/spacing)
- [Atlassian Design - Spacing](https://atlassian.design/foundations/spacing)
- [Primer Layout (GitHub)](https://primer.style/product/getting-started/foundations/layout/)
- [IBM Carbon - Spacing](https://carbondesignsystem.com/elements/spacing/overview/)
- [Material 3 - Layout Spacing](https://m3.material.io/foundations/layout/understanding-layout/spacing)
- [Polaris (Shopify) - Spacing tokens](https://polaris-react.shopify.com/tokens/spacing)
- [Design Systems - Space, grids, layouts](https://www.designsystems.com/space-grids-and-layouts/)
