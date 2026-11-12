# Portfolio Full-Stack

Portfolio professionnel d’Anis Amniali, développeur full-stack. Le site en français est construit en HTML, CSS et JavaScript natifs. Il présente des projets issus de son GitHub, son profil, ses compétences et ses contacts.

## Lancer en local

Prérequis : Node.js 18 ou plus récent.

```bash
node server.mjs
```

Ouvrir ensuite `http://localhost:4173`.

## Mise en ligne sur GitHub Pages

Dans les paramètres du dépôt GitHub, ouvrez **Settings > Pages** et sélectionnez **GitHub Actions** comme source de déploiement. Poussez ensuite les changements sur la branche `main` ou lancez manuellement l’action **Deploy portfolio to GitHub Pages** depuis l’onglet **Actions**. Le site sera publié à l’adresse `https://anismwgli.github.io/portfolio/`.

GitHub Pages héberge uniquement des fichiers statiques. L’assistant IA est donc désactivé sur le site publié. Pour utiliser un domaine personnalisé, ajoutez-le dans **Settings > Pages**, puis configurez les DNS chez votre registraire selon les instructions de GitHub.

## Personnaliser

Modifiez `portfolio.js` pour actualiser le nom, le titre, la présentation, la stack, les compétences, les coordonnées et les projets. Les fiches décrivent les projets et exercices présentés sur le profil GitHub public. Complétez-les avec des captures, des démos et des résultats vérifiables. N’ajoutez pas de données confidentielles.

Pour ajouter un CV, placez votre PDF dans ce dossier sous le nom `cv.pdf`, puis définissez `cv: "cv.pdf"` dans `portfolio.js`. Le workflow le publiera automatiquement. Renseignez également vos vraies URL LinkedIn et GitHub ainsi que votre adresse e-mail. Les coordonnées laissées vides sont affichées comme « À renseigner » et ne sont pas cliquables.

## Limites et suites

Les détails de Pawsitive proviennent de sa description sur le profil GitHub; son dépôt n’apparaît pas dans la liste des dépôts publics consultés. L’URL LinkedIn et le CV ne sont pas renseignés.