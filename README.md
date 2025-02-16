# TD3 - Application de Panier d'Achat

Ce projet est une simple application de panier d'achat construite avec HTML, CSS et JavaScript. Il permet aux utilisateurs de rechercher des produits, de les ajouter à un panier et de voir le prix total des articles dans le panier.

## Table des Matières

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Dépendances](#dépendances)

## Installation

1. Clonez le dépôt sur votre machine locale :
    ```sh
    git clone https://github.com/AudinotNoah/WEB_S4_TP3
    ```
2. Naviguez vers le répertoire du projet :
    ```sh
    cd WEB_S4_TP3
    ```
3. Installez les dépendances :
    ```sh
    npm install
    ```

## Utilisation

1. Construisez le projet :
    ```sh
    npm run build
    ```
2. Pour contourner les problèmes de sécurité liés au CORS, utilisez un serveur HTTP local. Avec Python :
    ```sh
    python -m http.server 8000
    ```
3. Ouvrez `index.html` dans votre navigateur web pour voir l'application.

## Structure du Projet

- `index.html` : Le fichier HTML principal de l'application.
- `css/cart.css` : Le fichier CSS pour le style de l'application.
- `modules/` : Répertoire contenant les modules JavaScript.
  - `cart.js` : Module pour gérer le panier d'achat.
  - `products.js` : Module pour gérer les produits.
  - `main.js` : Point d'entrée de l'application.
  - `app.js` : Module pour initialiser l'application.
  - `ui.js` : Module pour gérer l'interface utilisateur.
- `out.js` : Le fichier JavaScript regroupé et minifié généré par esbuild.
- `package.json` : Le fichier de configuration du projet.

## Dépendances

- [esbuild](https://esbuild.github.io/) : Un empaqueteur et minificateur JavaScript rapide.
