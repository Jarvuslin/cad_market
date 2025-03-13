# Deploying Your CAD Marketplace to Vercel

This guide will walk you through deploying your Next.js CAD Marketplace application to Vercel, making it publicly accessible on the internet.

## Prerequisites

- A GitHub account (recommended)
- A Vercel account (can be created during the process)

## Deployment Steps

### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push your local repository to GitHub using the following commands:
   ```bash
   git remote add origin https://github.com/yourusername/cad_market.git
   git push -u origin master
   ```

2. **Connect Vercel to your GitHub repository**
   - Go to [Vercel](https://vercel.com/)
   - Sign up or log in (you can use your GitHub account for authentication)
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will automatically detect that it's a Next.js project

3. **Configure your deployment**
   - The default settings should work fine as we've already created a `vercel.json` file
   - You can add environment variables if needed
   - Click "Deploy"

4. **Access your deployed site**
   - Once deployment is complete, Vercel will provide you with a URL (e.g., `https://cad-market.vercel.app`)
   - Your site is now publicly accessible!

### Option 2: Deploy via Vercel CLI (Alternative)

If you prefer using the command line:

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Deploy your project**
   ```bash
   vercel
   ```
   - Follow the prompts to log in and configure your project
   - Vercel will deploy your application and provide a URL

## Custom Domain Setup (Optional)

To use your own domain name:

1. Go to your project on the Vercel dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain and follow the instructions to configure DNS settings

## Continuous Deployment

When connected to GitHub, Vercel automatically deploys:
- Every push to the main branch
- Pull request previews for testing changes before merging

## Troubleshooting

- If you encounter build errors, check the build logs in the Vercel dashboard
- Ensure all dependencies are properly listed in your `package.json`
- Verify that your Next.js version is compatible with Vercel

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)