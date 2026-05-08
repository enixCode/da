# Typographie - swiss modernist

Trois familles. Chacune a un rôle strict. Ne jamais les mélanger sur la même ligne.

## Stack

| Rôle | Famille | Source | Fallback |
|---|---|---|---|
| Display | **Archivo Narrow** (700, 900) | Google Fonts | `system-ui, sans-serif` |
| Body | **Archivo** (400, 500, 700) | Google Fonts | `system-ui, sans-serif` |
| Accent | **Fraunces** (400 italic, 700) | Google Fonts | `serif` |
| Mono | **JetBrains Mono** (400, 500, 700) | Google Fonts | `ui-monospace, monospace` |

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;900&family=Archivo+Narrow:wght@400;500;700&family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
```

## Hiérarchie

### Display (Archivo Narrow)

Pour les titres principaux et les noms de produit. Tracking serré, hauteur réduite.

| Usage | Taille | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| H1 site | `clamp(40px, 6vw, 76px)` | 700 | -0.035em | 0.92 |
| H2 plugin | `clamp(34px, 4.6vw, 56px)` | 900 | -0.03em | 0.92 |
| H3 section | 24px | 700 | -0.02em | 1.1 |
| Label UI | 11px | 700 | 0.16em | 1 |
| Numérotation | 72px | 900 | -0.04em | 0.85 |

**Quand l'utiliser** : titres, badges, boutons, métadonnées en majuscules.
**Quand l'éviter** : paragraphes, descriptions, contenu lisible.

### Body (Archivo)

Pour les paragraphes courts et le contenu UI. Lisible, neutre, ne tire pas la couverture.

| Usage | Taille | Weight | Line-height |
|---|---|---|---|
| Paragraphe court | 16px | 400 | 1.55 |
| Petite info | 13px | 400 | 1.5 |
| Bouton secondaire | 12px | 700 | 1 |

**Quand l'utiliser** : descriptions UI, boutons, tableaux, métadonnées en minuscules.
**Quand l'éviter** : titres (utilise Archivo Narrow), texte éditorial long (utilise Fraunces).

### Accent (Fraunces italic)

Pour les phrases tagline, les notes éditoriales, les marques de chaleur dans une page froide. Toujours italic, jamais roman pour l'accent.

| Usage | Taille | Weight | Style | Line-height |
|---|---|---|---|---|
| Tagline hero | `clamp(16px, 1.6vw, 21px)` | 400 | italic | 1.35 |
| Description plugin | `clamp(16px, 1.5vw, 18px)` | 400 | roman | 1.55 |
| Footer glyph | 20px | 400 | italic | 1 |

**Quand l'utiliser en italic** : taglines courtes, ornement éditorial.
**Quand l'utiliser en roman 400** : descriptions de plus de 2 lignes (l'italic devient illisible au-delà). C'est ce qui s'applique aux descriptions plugin.
**Quand l'éviter** : UI, boutons, navigation. Fraunces n'est pas une font système.

### Mono (JetBrains Mono)

Pour le code, les commandes, les identifiants techniques. Aucun cas d'usage hors technique.

| Usage | Taille | Weight |
|---|---|---|
| Install command (hero) | `clamp(13px, 1.3vw, 16px)` | 500 |
| Install command (card) | 14px | 500 |
| Setup sub-command | 13px | 500 |
| Code inline | 12px | 500 |

**Toujours** précédé d'un `$` coloré en `--yellow` pour les commandes shell.

## Règles dures

- **Trois registres maximum sur une même page** : Archivo Narrow + Fraunces italic + JetBrains Mono. Jamais d'ajout.
- **Italic uniquement en accent**. Le corps de texte est toujours roman, sinon ça pénalise la lisibilité (dyslexie, basse vision).
- **Letter-spacing négatif** sur les gros titres (Archivo Narrow ≥ 36px). Letter-spacing positif `0.16-0.2em` sur les labels UI en uppercase.
- **Line-height 1 ou très serré** sur les titres display (≤ 1.1). Line-height généreux 1.5-1.55 sur le body.
- **Pas d'em-dash** en typographie. Utiliser `-` ou des virgules. C'est une règle d'écriture, pas seulement de tokens.

## Anti-patterns

- Mélanger Archivo Narrow et Fraunces sur une même ligne (sauf le slash `/` du wordmark, exception explicite).
- Utiliser une 4e famille "pour varier".
- Mettre du Mono dans des paragraphes.
- Du serif italic dans un bouton ou une nav.
- Du condensed pour du body.
