# Motion - principes enixCode

Le mouvement enixCode est **fonctionnel, jamais décoratif**. Il sert à communiquer un changement d'état, jamais à attirer l'œil. Si on retire toute l'animation et que le produit reste compréhensible, alors la motion est correcte.

Inspiration : IBM Carbon (productive vs expressive motion). [Référence](https://carbondesignsystem.com/elements/motion/overview/)

## Deux modes de motion

### Productive motion (par défaut)

Pour les interactions UI courantes : hover, focus, click feedback, copie d'une commande, déploiement d'un `<details>`.

| Caractéristique | Valeur |
|---|---|
| Durée | 100 - 200 ms |
| Easing | `ease-out` ou `cubic-bezier(0.2, 0, 0.38, 0.9)` (decelerate) |
| Properties typiques | `background`, `color`, `border-color`, `opacity` |
| Quand l'utiliser | 95% du temps. Hover state, focus state, click feedback. |

```css
.btn-primary {
  transition: background 140ms ease-out;
}
```

### Expressive motion

Pour les transitions de page, les ouvertures de modale, les changements d'état majeurs. Rare dans nos produits actuels (sites statiques + composants simples).

| Caractéristique | Valeur |
|---|---|
| Durée | 300 - 500 ms |
| Easing | `cubic-bezier(0.4, 0.14, 0.3, 1)` (entrance) ou `cubic-bezier(0.2, 0, 0, 1)` (productive expressive) |
| Properties typiques | `transform`, `opacity` combinés |
| Quand l'utiliser | Transitions structurelles : ouverture d'un panneau latéral, apparition d'un modal, changement de page significatif. |

## Tokens de motion

À ajouter à `tokens.css` quand un produit en a besoin :

```css
:root {
  --duration-fast:    100ms;  /* hover, focus */
  --duration-medium:  200ms;  /* button feedback, copy confirmation */
  --duration-slow:    400ms;  /* page transition, modal enter */
  --easing-out:       cubic-bezier(0.2, 0, 0.38, 0.9);
  --easing-in:        cubic-bezier(0.4, 0.14, 0.3, 1);
  --easing-in-out:    cubic-bezier(0.4, 0.14, 0.3, 1);
}
```

## Règles dures

### Reduced motion (toujours respecté)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Cette règle est dans tous les produits enixCode publics. Pas d'exception.

### Pas d'animation infinie

Pas de `animation: pulse infinite`, pas de loader infini, pas de gradient qui défile. Si un état "en attente" doit être communiqué :
- Texte : "Loading…" (statique)
- Skeleton : background `--paper-3` statique, pas de shimmer animé
- Spinner : si vraiment nécessaire, durée de cycle ≥ 1s, override `prefers-reduced-motion`

### Pas de motion décorative

Pas de :
- Apparition de chaque ligne de texte au scroll
- Zoom léger au hover sur les images / cards
- Parallax
- Confettis, sparkles, particles
- Fade-in à l'arrivée sur la page (sauf si justifié par un changement de mode)

### Une seule animation à la fois sur une vue

Si plusieurs éléments doivent réagir simultanément, un staggered delay est OK (10-50 ms entre chaque), mais pas plus de 3-4 éléments. Au-delà, c'est du bruit.

## Exemples appliqués

### Bouton primaire

```css
.btn-primary {
  background: var(--mark-bg);
  transition: background 140ms ease-out;
}
.btn-primary:hover { background: var(--hot); }
```

Hover = 140ms ease-out. Le bouton change de couleur en moins d'un clignement, mais pas instantanément (sinon il a l'air cassé).

### Copie de commande

```css
.cmd-block .copy-btn {
  transition: background 140ms ease-out, color 140ms ease-out;
}
.cmd-block.copied .copy-btn {
  background: var(--hot);
  color: var(--constant-paper);
}
```

État de confirmation visible 1500ms (timeout JS), retour à l'état initial avec la même transition.

### Disclosure (`<details>`)

Pas d'animation custom. Le navigateur gère l'expansion natif. Si on veut animer la flèche ou la couleur du `summary`, transition CSS courte (140ms).

## Anti-patterns motion

- Page d'accueil avec hero qui zoom / scroll-trigger / parallax au load
- Nav qui se floute au scroll
- Hover qui agrandit les cards de 5%
- Apparition séquentielle de chaque mot d'un titre
- Loaders avec gradient animé infini
- Animations différentes pour le même type d'action selon la page
- Easing `ease-in-out` partout par défaut (paresseux, décoratif, sentier `ease-out` plus directif)

## Quand documenter une nouvelle animation

Si tu ajoutes une animation custom dans un produit consumer, ajoute son nom + sa courbe + sa durée dans une section Motion du README du projet. Sinon le prochain dev qui touche au CSS la remplacera par autre chose et la cohérence dérive.

## Références

- [IBM Carbon - Motion](https://carbondesignsystem.com/elements/motion/overview/)
- [Material Design - Motion](https://m3.material.io/styles/motion/overview)
- [Easings.net](https://easings.net/) - bibliothèque visuelle de courbes d'easing
