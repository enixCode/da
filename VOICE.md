# Voix - enixCode

Comment on écrit. Pas un manifeste de marque, juste les règles qui guident le ton.

## Principes (descriptifs, pas prescriptifs)

### Direct, sans marketing

On dit ce que c'est. Pas "the future of X", pas "revolutionary", pas "next-gen". Si on doit annoncer une fonctionnalité, on l'annonce. Si elle est utile, le résumé court suffit.

### Bilingue assumé

Français côté commits, écriture interne, README persos. Anglais côté API publique, sites publics, code (identifiers). Ne pas mélanger dans une même phrase. Choisir la langue de la cible.

### Imperatives sur les actions

Les CTAs sont à l'impératif court. `Open project`, `Install once`, `Read docs`. Pas `Click here to open the project`.

### Lowercase pour les labels système

Les labels d'UI (badges, méta, footer) sont en lowercase ou small-caps. Cohérent avec le swiss modernist. Exemple : `02 plugins`, `built with claude code`, `mit licensed`.

### Pas d'em-dash

Jamais `-`. Utiliser `-` (hyphen) ou la virgule. C'est une règle de l'écriture enixCode, héritée des CLAUDE.md du créateur. Vaut pour le code, les commits, la communication.

### Build with cc

Tous les commits générés avec Claude Code finissent par un trailer `build with cc` sur sa propre ligne. Pas d'email, pas de Co-Authored-By. C'est la signature.

## Ton par contexte

| Contexte | Ton |
|---|---|
| Site public marketplace | Sobre, technique, factuel. Pas d'humour, pas d'auto-ironie. |
| README projet open source | Technique. La 1re phrase doit dire ce que fait le projet. |
| Commit Conventional 1.0.0 | Impératif présent, ≤ 72 char, sans point. Body = pourquoi, pas quoi. |
| Documentation interne (CLAUDE.md) | Direct, conditions d'application précises. Phrases courtes. |
| Communication 1:1 (email, DM) | Plus chaud autorisé. Garder direct. |

## Vocabulary

Termes officiels enixCode. Capitalisation imposée. Mots interdits.

### Termes produit

| Terme | Forme correcte | À éviter |
|---|---|---|
| Marque | `enixCode` (camelCase, sans espace) | `Enixcode`, `EnixCode`, `enix code` |
| Initiales | `enix` (lowercase pour URL et namespace) | `ENIX` sauf en logotype |
| Marketplace | `marketplace` (lowercase, jamais "store") | `App Store`, `boutique` |
| Plugin | `plugin` (lowercase, sans tiret) | `plug-in`, `Plugin` (sauf début de phrase) |
| Direction artistique | `da` (folder), `direction artistique` (texte long), `DA` (acronyme inline) | `design system` (réservé pour les vrais design systems versionnés en composants) |

### Produits référencés

| Produit | Forme correcte | Notes |
|---|---|---|
| Claude Code | `Claude Code` (deux mots, deux capitales) | Jamais `claude-code` sauf identifiant CLI |
| Anthropic | `Anthropic` | |
| light-process | `light-process` (avec tiret, lowercase) | Nom du package npm, jamais "Light Process" |
| ulab | `ulab` (lowercase, attaché) | |

### Capitalisation par contexte

| Contexte | Style |
|---|---|
| Titres (display) | UPPERCASE via CSS `text-transform`, jamais en source |
| Source code (titres MD, .json) | Title Case ou capitale initiale uniquement |
| Labels UI (badges, méta) | lowercase (cohérent swiss modernist) |
| CTAs boutons | `Open project` (capitale initiale, le reste lowercase) |
| Commit subject | impératif lowercase après le scope : `feat(plugin): ship...` |
| Variables CSS | `--paper`, `--ink-soft` (kebab-case lowercase) |
| Variables JS | `camelCase` |

### Mots bannis

À ne jamais utiliser dans la communication enixCode (sites, README, commits, marketing) :

- "ecosystem" pour parler d'un produit unique → préférer "stack" ou "ensemble"
- "solution" → préférer "outil", "produit", "plugin"
- "platform" pour quelque chose qui n'est pas une vraie plateforme → préférer "service"
- "leverage" → utiliser "use"
- "robust" sans benchmark → utiliser "tested" ou supprimer
- "seamless" → décoratif, supprimer
- "powerful" sans démonstration → décoratif, supprimer
- "delightful" → AI slop 2024
- Emojis dans les commits, README, sites publics

## Imagery - direction explicite

**Décision** : pas d'illustration, pas de photographie, pas de vidéo dans le UI public enixCode. Ni stock, ni custom.

La marque s'exprime exclusivement par :
- typographie (Archivo Narrow + Fraunces italic + JetBrains Mono)
- couleur (palette Ardoise Froide)
- composition (grilles strictes, hiérarchie typographique)
- micro-détails (badges, ratios, install commands stylisés)

Cette absence est délibérée. Elle évite les pièges de l'AI slop (stock photos générées, illustrations isométriques génériques, mascottes mignonnes) et signale "outil sérieux, pas un produit marketing".

**Si un jour il faut une image** (cas exceptionnel : OG image partage social, screenshot produit) :
- Screenshots : capture brute du produit, fond `--paper` ou `--mark-bg`, aucune retouche, aucun device frame
- Diagrammes techniques : noir et blanc, ou monochrome accent `--hot`, jamais de couleurs supplémentaires
- OG image partage : composition typographique uniquement, mêmes tokens

**Jamais** :
- Stock photo (Unsplash, Pexels, etc.)
- Mascotte / personnage
- Illustration isométrique
- Image générée par AI (Midjourney, DALL-E, etc.)
- Icône emoji ou pictogramme décoratif

## Anti-patterns à éviter

Ces choses sentent le marketing générique ou l'AI slop, ne pas les écrire.

- "Empower developers to..."
- "We believe that..."
- "The journey of..."
- "Built with love"
- "Crafted with care"
- "Reimagining X"
- "10x faster" sans benchmark
- "Production-ready" sans définition
- Stats sans source
- Citations sans auteur identifié

## Anti-patterns visuels associés

(Vivent dans la voix car la décoration est aussi un message)

- Numérotation décorative type `vol. 01` ou `chapter 02`
- Watermarks géants en filigrane (testé, raté)
- Taglines en italique multi-lignes (lisibilité dégradée)
- Confettis, étoiles, sparkles, emojis dans le UI
- Stock photos de devs souriants
- Illustrations isométriques génériques

## Exemples

### À écrire

> A small, opinionated marketplace for Claude Code. Lean tools. No fluff.

> Lightweight DAG workflow engine. Orchestrates code that runs in Docker containers, connected by links with conditions.

> feat(plugin): ship Claude Code plugin with 5 skills

### À ne pas écrire

> Welcome to the future of Claude Code plugins, where developers come together to build amazing things.

> Light Process: a revolutionary new way to think about workflow orchestration in the cloud-native era.

> 🚀 Just shipped a major release! Check it out!
