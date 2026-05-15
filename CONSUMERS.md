# Consumers - projets utilisant cette DA

Liste des projets enixCode qui consomment la direction artistique. Quand on modifie un token, vérifier l'impact sur chaque projet listé.

| Projet | URL | Tokens version | Consommation | Notes |
|---|---|---|---|---|
| `enix/plugins` (marketplace) | https://enixcode.github.io/plugins/ | 0.2.0 | `<link rel="stylesheet" href="https://enixcode.github.io/da/tokens.css">` | Premier site à appliquer la palette Ardoise Froide |

## URLs publiques (à utiliser dans les consumers)

Toujours préférer les URLs Pages aux URLs `raw.githubusercontent.com` :

- https://enixcode.github.io/da/tokens.css (variables CSS hand-written)
- https://enixcode.github.io/da/tokens.json (source DTCG)
- https://enixcode.github.io/da/dist/css/tokens.css (généré)
- https://enixcode.github.io/da/dist/js/tokens.js (généré)

Les URLs raw restent fonctionnelles pour les anciens workflows, mais sont rate-limitées (~60 req/h non-auth) et servies en `text/plain`.

## Workflow de mise à jour

Quand un token change ici :

1. Bumper la version dans le commit message (ex : `feat(palette): bump hot to #2563eb`)
2. Pour chaque consumer ci-dessus :
   - Si la copie est inline : éditer le bloc `:root` dans le fichier consumer
   - Si la copie est par `@import` ou `<link>` : le rebuild se fait automatiquement
3. Tester chaque consumer en light + dark mode
4. Cocher la mise à jour dans le commit message

## Versioning des tokens

Pas de package npm pour l'instant - les tokens sont copiés manuellement dans chaque projet. Si plus de 3 consumers actifs, considérer :

- Publier `@enixcode/da-tokens` sur npm (CSS + JSON)
- Migrer vers W3C Design Tokens Format avec Style Dictionary
- Générer outputs pour iOS / Android si besoin

Pour l'instant : YAGNI.
