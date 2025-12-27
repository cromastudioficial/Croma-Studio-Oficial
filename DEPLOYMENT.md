# Desplegar en GitHub Pages

## Pasos para desplegar:

1. **Construir el sitio estático:**
   ```bash
   npm run build
   ```

2. **Crear repositorio en GitHub:**
   - Crea un nuevo repositorio en GitHub
   - Si tu repo se llama diferente a tu dominio, descomenta y edita las líneas `basePath` y `assetPrefix` en `next.config.mjs` con el nombre de tu repositorio

3. **Subir a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

4. **Configurar GitHub Pages:**
   - Ve a Settings > Pages en tu repositorio
   - En "Build and deployment", selecciona "GitHub Actions"
   - Crea un archivo `.github/workflows/deploy.yml` con el siguiente contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build with Next.js
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{steps.deployment.outputs.page_url}}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. **Esperar el despliegue:**
   - GitHub Actions construirá y desplegará automáticamente tu sitio
   - Estará disponible en: `https://tu-usuario.github.io/tu-repo/`

## Notas importantes:

- El sitio es completamente estático (sin backend)
- Todas las funciones de WhatsApp funcionan perfectamente
- El carrito de compras funciona en el navegador (localStorage)
- No hay límites de hosting con GitHub Pages

## Dominio personalizado (opcional):

Si quieres usar un dominio personalizado:
1. Comenta o elimina las líneas `basePath` y `assetPrefix` en `next.config.mjs`
2. Agrega tu dominio en Settings > Pages > Custom domain
3. Configura los DNS según las instrucciones de GitHub
