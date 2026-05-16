# TODO - direction artistique

Gaps et améliorations identifiés lors de l'application de la DA sur Gatus
et discussion plus large. Pick-one-when-you-feel-like-it, comme le
TODO.md de `ansible-backup`.

## Composants UI manquants

La section `COMPONENTS.md` couvre Button, Badge, Install command,
Card, Topbar et Hero. Manquent les composants atomiques que tout
site finit par avoir :

- **Form inputs** (text, select, checkbox, radio, textarea, file
  upload). Au minimum : focus ring couleur `hot`, états error /
  disabled / readonly, label placement, helper text typography.
- **Modal / Dialog**. Overlay opacity, escape behaviour, focus
  trap, anti-pattern : pas de "Are you sure?" gratuit.
- **Toast / Notification**. Position (top-right standard?), durée
  (5s success, 8s error, persistent critical), icône optionnelle.
- **Tabs**. Underline animée vs pill background, comportement clavier.
- **Dropdown / Menu**. Hover delay, alignement, max-height + scroll.
- **Tooltip**. Délai d'affichage, position dynamique, mobile (tap
  long ou désactivé).
- **Pagination**. Numérotation vs prev/next, ellipsis rules.
- **Avatar**. Initiales fallback, taille relative au contexte.
- **Empty state**. Illustration ou typographie pure, CTA optionnel.
- **Loading skeleton** vs spinner. Quand utiliser quoi.
- **Error pages** (404, 500). Layout, copy, retour CTA.

## Iconography

Manque une section / fichier `ICONOGRAPHY.md` :

- Bibliothèque autorisée (lucide ? heroicons ? custom ?)
- Tailles : sm 12px, md 16px, lg 20px, xl 24px
- Stroke width : 1.5 par défaut, jamais filled sauf exception
- Couleur : héritée de `currentColor`
- Anti-pattern : pas de gradient sur les icônes, pas de drop
  shadow, pas de mix de bibliothèques sur la même vue.

## Logo

`LOGO.md` + fichiers SVG :

- Variants : light, dark, mono, mark seul (favicon)
- Clearance autour du logo (1× hauteur de l'œilleton minimum)
- Tailles minimums lisibles (web 24px, print 8mm)
- Anti-pattern : pas de stretch, pas d'ombre, pas de rotation,
  pas de couleur hors palette.

## Data visualization

`DATA_VIZ.md` (ou section dans COMPONENTS.md) :

- Couleurs séquentielles pour graphes (à partir de `hot` qui
  devient série 1, puis variants 2-6 documentés)
- Couleurs diverging pour scoring (rouge → neutre → vert) en
  utilisant la palette existante
- Anti-pattern : pas de plus de 7 séries simultanées, pas de
  rainbow, pas de 3D, pas de pie chart > 4 slices.

## Tokens à ajouter

`tokens.css` couvre couleurs et typographie. À compléter :

- **Spacing** : si pas déjà dans LAYOUT.md, exposer en tokens CSS
  (`--space-1` 4px, `--space-2` 8px, ..., `--space-12` 48px).
- **Shadows** : aujourd'hui pas de shadow token. Soit on en
  ajoute un (`--shadow-sm`, `--shadow-md`) avec valeurs DA-cohérentes,
  soit on documente explicitement « pas d'ombres ».
- **Border radius** : `4px` est utilisé partout, le faire token
  (`--radius-sm` 2px, `--radius` 4px, `--radius-lg` 8px). Ou
  documenter le choix mono-valeur.
- **Z-index scale** : déjà mentionné dans LAYOUT.md, idéalement
  exposé en tokens CSS aussi.

## Documentation transverse

- `MOTION.md` couvre les animations. Ajouter `reduced-motion`
  guidelines (déjà mentionné dans ACCESSIBILITY ? à croiser).
- `PRINT.md` : styles pour export PDF, suppression couleurs
  inutiles, marges A4.
- `I18N.md` : règles d'expansion de texte (allemand 30% plus
  long que français), gestion RTL (arabe, hébreu) si pertinent.

## Outils

- **Storybook ou équivalent**. `index.html` est un playground
  manuel ; un Storybook permettrait de catalog visuellement
  chaque composant avec ses variants.
- **Linter de tokens**. Détecter dans un repo consommateur les
  hex hors palette ou les `px` au lieu de tokens spacing.
- **Visual regression testing**. Snapshot Playwright sur le
  playground pour bloquer les drifts non délibérés.

## Petits oublis

- Le `README.md` liste 7 docs mais en réalité 9 fichiers `.md`
  existent (compter `CHANGELOG.md`, `CONSUMERS.md`). Aligner.
- `CHANGELOG.md` : vérifier qu'il est tenu à jour à chaque
  changement de token.
- `package.json` : si le but est de publier en npm
  (`@enixcode/da`), documenter la procédure de release.

---

Source d'inspiration pour les composants manquants : la doc
Radix UI Primitives, Material Design 3 specs, GitHub Primer.
Pas pour copier le look, pour s'assurer qu'on ne loupe pas un
état clé (focus-visible, disabled, error, dirty, etc.).
