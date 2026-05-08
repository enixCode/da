# Consumers - projets utilisant cette DA

Liste des projets enixCode qui consomment la direction artistique. Quand on modifie un token, vérifier l'impact sur chaque projet listé.

| Projet | URL | Tokens version | Consommation | Notes |
|---|---|---|---|---|
| `enix/plugins` (marketplace) | https://enixcode.github.io/plugins/ | inline (copie de tokens.css) | tokens CSS dans `<style>` | Premier site à appliquer la palette Ardoise Froide |

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
