# Accessibilité - engagement enixCode

L'accessibilité n'est pas un bonus optionnel. Tout produit enixCode public engage le niveau **WCAG 2.2 AA minimum** sur l'ensemble des contenus.

## Engagement formel

| Critère | Niveau | Vérifié comment |
|---|---|---|
| Contraste texte body | ≥ 4.5:1 | WebAIM Contrast Checker, à chaque token color |
| Contraste UI (boutons, focus) | ≥ 3:1 | Idem |
| Contraste texte large (≥ 24px regular ou ≥ 18.66px bold) | ≥ 3:1 | Idem |
| Touch target minimum | ≥ 44×44 px | DevTools mobile, WCAG 2.5.5 |
| Navigation clavier complète | 100% des interactions | Test manuel : Tab, Shift+Tab, Enter, Space, Esc |
| Focus visible sur tout élément interactif | Outline 2px minimum | `:focus-visible` CSS |
| Reduced motion respecté | Pas d'animation infinie sans override | `@media (prefers-reduced-motion: reduce)` |
| Lang attribute | Présent sur `<html>` | Validation HTML |
| Alt text sur images significatives | Présent ou `alt=""` si décoratif | (Imagery est interdite, donc N/A pour le moment) |
| Landmarks sémantiques | `<header>`, `<main>`, `<nav>`, `<footer>`, `<article>` | Audit Lighthouse |
| Hiérarchie heading correcte | H1 unique, H2 sections, pas de skip | Audit Lighthouse |
| ARIA labels sur boutons sans texte visible | Présents | Audit manuel |

## Focus states - spec visuelle

Tout élément interactif (`button`, `a`, `input`, `details > summary`, `[tabindex]`) doit avoir un focus visible distinct du hover.

```css
:focus-visible {
  outline: 2px solid var(--hot);
  outline-offset: 2px;
}
```

- Couleur : `var(--hot)` (#2563eb light / #60a5fa dark) - toujours l'accent primaire de la palette, jamais une couleur custom.
- Épaisseur : 2px minimum.
- Offset : 2px (l'outline ne touche pas le bord de l'élément, plus visible).
- Pas de `outline: none` sans remplacement explicite par un `box-shadow` ou un `border` équivalent.

## Touch targets

- Minimum 44×44 px (WCAG 2.5.5 AA, applicable depuis WCAG 2.2 publié en oct 2023).
- Mesuré sur la zone cliquable totale, pas seulement le pictogramme visible.
- Espacement minimum entre deux targets adjacents : 8 px (sinon hit zone fuse).
- Pour les boutons compacts en topbar (theme toggle), le `min-height` peut descendre à 28-32 px **uniquement si la cible est dans une zone non-critique** (pas un CTA principal).

## Reduced motion

Respect obligatoire de `prefers-reduced-motion: reduce` :

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Si une animation est *essentielle* à la compréhension (rare), prévoir une alternative statique. Voir [MOTION.md](MOTION.md) pour les règles complètes.

## Méthode de test

Avant qu'un produit enixCode soit déployé en public :

1. **Audit Lighthouse** dans Chrome DevTools (mode mobile + desktop) - viser score Accessibility ≥ 95
2. **Test clavier complet** : naviguer la page entière sans souris, vérifier que tous les CTAs sont atteignables et activables
3. **Test contraste** : passer chaque paire token color/background dans WebAIM
4. **Test reduced motion** : activer `prefers-reduced-motion` (Windows : Settings > Accessibility > Visual Effects > Animation effects = OFF) et vérifier qu'aucune animation ne tourne
5. **Test dark mode** : activer le dark mode système et re-vérifier contrastes

## Responsable

Owner : enixCode (créateur). Pas de délégation.

Tout PR ou modification d'un produit enixCode doit passer la checklist ci-dessus avant merge. Pas d'exception "on corrigera plus tard".

## Anti-patterns

- `outline: none` sans replacement → focus invisible
- `tabindex` négatifs partout → break la navigation clavier
- Texte uniquement coloré pour communiquer un statut (rouge = erreur) sans icône ou label → invisible pour daltoniens
- Animations infinies (loaders, pulse) sans override `prefers-reduced-motion`
- Texte en image (rendu impossible à lire par lecteur d'écran)
- `aria-label` qui contredit le texte visible
- Touch targets < 44px sur des CTAs principaux

## Références

- [WCAG 2.2 - W3C](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Inclusive Components - Heydon Pickering](https://inclusive-components.design/)
