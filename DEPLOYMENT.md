# Deployment Guide

## Deploying to GitHub Pages

This guide walks you through deploying your portfolio to GitHub Pages.

### Prerequisites

- Git configured on your machine
- GitHub account and repository set up at `https://github.com/jsheets245/jsheets245.github.io`

### Step 1: Configure the Repository

1. **Ensure you're on the main branch**:
   ```bash
   git checkout main
   ```

2. **Verify `.gitignore` includes `dist/` and `node_modules/`** ✅ (already configured)

### Step 2: Install `gh-pages` Package

The package.json already includes `gh-pages`, but verify it's installed:

```bash
npm install
```

### Step 3: Update Your Site Configuration

If you're NOT using `https://jsheets245.github.io` (i.e., using a subdomain), update `vite.config.ts`:

```typescript
// For subdomain: https://jsheets245.github.io/my-portfolio/
export default defineConfig({
  base: '/my-portfolio/',  // Add this
  // ... rest of config
})
```

For the main user site, leave `base: '/'` as is.

### Step 4: Deploy

Run the deploy command:

```bash
npm run deploy
```

This will:
1. Compile TypeScript
2. Build the production bundle
3. Create/update the `gh-pages` branch
4. Push the build to GitHub

### Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **gh-pages** and **/ (root)**
4. Click **Save**

Your site will be live in a few minutes at `https://jsheets245.github.io`

### Step 6: Verify Deployment

1. Check the deployment status in GitHub:
   - Go to **Deployments** tab in your repo
   - Look for the `gh-pages` deployment

2. Visit your live site:
   - Main site: `https://jsheets245.github.io`

### Troubleshooting

**Issue**: Site not appearing at expected URL
- **Solution**: Wait 5-10 minutes for GitHub Pages to process
- Check that the `gh-pages` branch exists and contains your `dist/` files

**Issue**: Pages showing 404
- **Solution**: Verify `vite.config.ts` `base` setting matches your URL structure
- Ensure you selected the correct branch in GitHub Pages settings

**Issue**: Styles/assets not loading
- **Solution**: Check the `base` setting in `vite.config.ts`
- All asset paths should be relative to your site's base URL

### Continuous Deployment (Optional)

For automatic deploys on push to main, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### After Deployment

1. Test your site thoroughly
2. Check responsiveness on mobile devices
3. Verify all links and forms work correctly
4. Monitor page speed and performance

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public/` directory with your domain name
2. Update GitHub Pages settings to use your custom domain
3. Configure DNS records with your domain provider

For more info, see [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
