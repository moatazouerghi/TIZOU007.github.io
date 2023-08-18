import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Autres configurations Astro ici
  // ...
  buildOptions: {
    // Définir le chemin de base pour GitHub Pages
    basePath: '/mon-portfolio.github.io/'
  }
});
