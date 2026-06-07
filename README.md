<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Soames Gatsby Starter
</h1>

A minimal starter for building a personal website using the [Soames Gatsby Theme](https://github.com/orbivision/soames-gatsby-theme) and WordPress as a headless CMS.

## Features

- WordPress content via gatsby-source-wordpress
- Built-in layout and styling from Soames Theme
- Shadow components for customization

## Quick Start

```bash
git clone https://github.com/orbivision/soames-gatsby-starter.git my-soames-site
cd my-soames-site
cp .env.example .env.development
# Edit .env.development: set GATSBY_WORDPRESS_URL to your WordPress GraphQL endpoint
npm install
npm run develop
```

## Using This Starter for Your Own Site

To use this starter as a base for your own Gatsby website:

1. Clone the repo:

```bash
git clone https://github.com/orbivision/soames-gatsby-starter.git new-soames-site
cd new-soames-site
```

2. Copy the example env file and set your WordPress GraphQL URL:

```bash
cp .env.example .env.development
# Edit .env.development and set GATSBY_WORDPRESS_URL=https://your-site.example.com/graphql
```

The WordPress site must have [WPGraphQL](https://www.wpgraphql.com/) and the [Soames WordPress Plugin](https://github.com/orbivision/soames-wordpress-plugin) installed and activated.

3. Remove the existing git history to start fresh:

```bash
rm -rf .git
```

4. Install dependencies and start the dev server:

```bash
npm install
npm run develop
```

5. Create a new repository on GitHub (e.g., new-soames-site) at https://github.com/new.
Leave "Initialize this repository with a README" unchecked.

6. Link your local project to the new repository:

```bash
git init
git remote add origin https://github.com/your-username/new-soames-site.git
git add .
git commit -m "Initial commit from Soames starter"
git push -u origin main
```

Now you're ready to customize your new site using the Soames theme!
