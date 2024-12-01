# Octako Portfolio
Portfolio created with Lovable!
I will showcase my AI projects here.

## Deployment Instructions for GitHub Pages

1. In your repository settings, enable GitHub Pages and set the source to the `gh-pages` branch
2. Add "homepage" to your package.json:
   ```json
   {
     "homepage": "https://octakopy.github.io/octako-portfolio"
   }
   ```
3. Install gh-pages package:
   ```bash
   npm install gh-pages --save-dev
   ```
4. Add deploy scripts to package.json:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
5. Deploy your site:
   ```bash
   npm run deploy
   ```

Note: Make sure to update the homepage URL in package.json to match your GitHub username and repository name.