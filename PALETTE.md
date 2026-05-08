# Palette — Ardoise Froide

Direction chromatique principale d'enixCode. Inspiration : palette infrastructure (Railway, Fly.io, Stripe). Volonté : précision technique, autorité, pas de fluff.

## Mood

> Précision technique. Tout est délibéré. Outil sérieux, pas un produit marketing.

Le bleu calibré (`#2563eb`) est la signature. Pas le bleu Vercel cliché (`#0070f3`), pas le bleu corporate générique. Un bleu dense, légèrement froid, qui ne crie pas.

## Tokens — light

| Nom | Hex | OKLCH | Rôle | Sur quoi |
|---|---|---|---|---|
| `paper` | `#f8f9fa` | `oklch(98.1% 0.003 247.86)` | Fond principal | `body`, hero, sections claires |
| `paper-2` | `#edeef0` | `oklch(94.3% 0.004 247.86)` | Fond alterné | Cards `:nth-child(even)` |
| `paper-3` | `#e1e3e6` | `oklch(89.7% 0.005 247.86)` | Surface élevée | Code blocks, tiles |
| `ink` | `#111318` | `oklch(17.7% 0.014 263.89)` | Texte principal | `body color`, titres |
| `ink-soft` | `#34373d` | `oklch(31.0% 0.012 263.89)` | Texte secondaire | Sous-titres, paragraphes longs |
| `rule` | `#111318` | identique `ink` | Bordures fortes | `border-bottom` sections |
| `rule-soft` | `#c8cbd0` | `oklch(82.5% 0.005 247.86)` | Bordures discrètes | Séparateurs, divisions internes |
| `hot` | `#2563eb` | `oklch(53.1% 0.222 263.89)` | Accent primaire | Liens hover, CTA hover, focus |
| `yellow` | `#60a5fa` | `oklch(70.3% 0.135 247.86)` | Accent secondaire | `$` prefix, highlights |
| `muted` | `#6b7280` | `oklch(53.7% 0.012 252.42)` | Texte muet | Méta, timestamps, badges discrets |
| `mark-bg` | `#111318` | identique `ink` | Fond CTA / install | Boutons primaires, blocs install |
| `mark-fg` | `#f8f9fa` | identique `paper` | Texte sur CTA | Texte des boutons primaires |

## Tokens — dark

| Nom | Hex | Rôle |
|---|---|---|
| `paper` | `#0d0e12` | Fond principal |
| `paper-2` | `#13141a` | Fond alterné |
| `paper-3` | `#1a1c24` | Surface élevée |
| `ink` | `#e8eaf0` | Texte principal |
| `ink-soft` | `#b8bac2` | Texte secondaire |
| `rule` | `#e8eaf0` | Bordures fortes |
| `rule-soft` | `#2a2d35` | Bordures discrètes |
| `hot` | `#60a5fa` | Accent primaire (boosté) |
| `yellow` | `#93c5fd` | Accent secondaire |
| `muted` | `#7d8390` | Texte muet |
| `mark-bg` | `#1a1c24` | Fond CTA |
| `mark-fg` | `#e8eaf0` | Texte sur CTA |

## Constants (jamais inversés)

Pour les éléments dont la couleur ne doit pas varier entre light et dark — par exemple texte sur badge jaune.

| Nom | Hex | Rôle |
|---|---|---|
| `constant-ink` | `#111318` | Texte sombre permanent |
| `constant-paper` | `#f8f9fa` | Texte clair permanent |

## Contrastes WCAG

Tous validés au minimum AA (4.5:1 pour le texte body, 3:1 pour UI).

| Paire (light) | Ratio | Niveau |
|---|---|---|
| `ink` sur `paper` | 17.5:1 | AAA |
| `ink-soft` sur `paper` | 11.4:1 | AAA |
| `muted` sur `paper` | 4.6:1 | AA |
| `hot` sur `paper` | 5.2:1 | AA (texte normal), AAA (UI) |
| `mark-fg` sur `mark-bg` | 17.5:1 | AAA |

| Paire (dark) | Ratio | Niveau |
|---|---|---|
| `ink` sur `paper` | 16.8:1 | AAA |
| `hot` sur `paper` | 7.4:1 | AAA |
| `mark-fg` sur `mark-bg` | 14.6:1 | AAA |

Vérifié sur [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## Règles d'usage

- `hot` (bleu primaire) : **maximum un par vue principale**. Si tout devient bleu, plus rien n'attire l'œil.
- `yellow` (bleu secondaire) : pour les marques décoratives et les `$` des install commands. Ne jamais l'utiliser pour des actions, c'est trop clair.
- `paper-2` / `paper-3` : pour la profondeur, pas pour décorer. Si tu ajoutes un fond, demande-toi pourquoi.
- Jamais de gradient. Le swiss modernism vit de couleurs plates et de hiérarchie typographique.
- Jamais de hex hors de cette liste sans mise à jour de cette doc d'abord.
