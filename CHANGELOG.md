# Changelog — direction artistique enixCode

Toutes les modifications notables de la DA sont documentées ici. Format inspiré de [Keep a Changelog](https://keepachangelog.com/), versionning SemVer.

Ajouter une entrée :
- **MAJOR** : changement de palette principale, refonte typographique. Casse visuellement les consumers.
- **MINOR** : ajout d'un token, nouvelle section de doc, ajout d'un consumer.
- **PATCH** : correction d'un hex (typo, ajustement contraste), reformulation, fix de référence.

---

## [0.1.0] — 2026-05-08

### Added
- Palette **Ardoise Froide** (light + dark) avec 12 tokens sémantiques + 2 constants
- Typographie : Archivo Narrow (display), Archivo (body), Fraunces (accent italic), JetBrains Mono (mono)
- Voix : 6 principes, ton par contexte, anti-patterns explicites
- Vocabulary : termes officiels, capitalisation par contexte, mots bannis
- Imagery : décision explicite "pas d'illustration, pas de photographie"
- Accessibility : engagement WCAG 2.2 AA, focus states spec, méthode de test
- Motion : principes productive vs expressive, tokens de durée et d'easing, anti-patterns
- Tokens CSS (`tokens.css`) prêts à `@import`
- Tokens JSON (`tokens.json`) format W3C DTCG
- Brand book visuel (`index.html`)

### Consumers
- `enix/plugins` (marketplace Claude Code) — premier site à appliquer la palette

### Notes
- Repo créé. Direction artistique inspirée des palettes infrastructure (Railway, Fly.io, Stripe), avec une typographie swiss modernist (Archivo Narrow + Fraunces italic).
- Le rouge signal de l'ancienne palette `enix/plugins` (#ff2d2d) a été abandonné — créait de l'anxiété inconsciente dans un contexte dev tool (rouge = erreur).
- Pas de logo défini à ce stade. À compléter quand un wordmark / logomark sera finalisé.

### Tooling
- Style Dictionary v5.4 ajouté pour générer les outputs cross-platform depuis `tokens.json`
- Outputs : CSS (light/dark séparés + flat), SCSS, JS, iOS Swift, Android XML — tous dans `dist/`
- Le `tokens.css` racine reste hand-written (pour préserver les `@media` queries proprement)

---

## Roadmap (non commité)

Idées d'évolutions futures, à valider avant inclusion.

- `LOGO.md` — wordmark / logomark / icon variants quand le logo sera finalisé
- `iconography.md` — système d'icônes (probablement Lucide ou custom monoline)
- Migration W3C DTCG complet + Style Dictionary si > 3 consumers actifs
- Publication `@enixcode/da-tokens` sur npm
- Ajout d'un script de validation automatique des contrastes (CI)
