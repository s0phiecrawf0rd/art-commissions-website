# Art Commissions Website - Azure Deployment Guide

## Prerequisites
- Azure Account
- GitHub Account
- Node.js 18+ installed locally

## Deployment Steps

### Option 1: Azure Static Web Apps (Recommended)

1. **Create Azure Static Web App**
   - Go to Azure Portal
   - Search for "Static Web Apps"
   - Click "Create"
   - Select your subscription and resource group
   - Name: `art-commissions-site`
   - Region: Choose closest to you
   - Deployment details: GitHub
   - Connect your GitHub account
   - Select your repository: `art-commissions-website`
   - Branch: `main`
   - Build presets: Next.js
   - App location: `/`
   - API location: (leave empty)
   - Output location: `.next`

2. **Configure Build Settings**
   - The deployment will automatically create a GitHub Actions workflow
   - It will build and deploy on every push to main

### Option 2: Manual Deployment

1. **Build the application**
   ```bash
   npm install
   npm run build
   ```

2. **Create App Service**
   - In Azure Portal, create a new App Service
   - Choose Node.js runtime
   - Configure deployment from GitHub

3. **Deploy**
   ```bash
   az staticwebapp create \
     --name art-commissions-site \
     --resource-group your-resource-group \
     --source https://github.com/s0phiecrawf0rd/art-commissions-website \
     --branch main \
     --app-location / \
     --output-location .next
   ```

## Environment Variables

Add these in Azure Portal > Configuration:
- `NODE_ENV`: `production`
- `NEXT_PUBLIC_API_URL`: Your API endpoint (if needed)

## Domain Setup

1. Custom Domain (Optional)
   - In Static Web App > Custom domains
   - Add your custom domain
   - Configure DNS records as instructed

## Monitoring

- Check deployment logs in GitHub Actions
- Monitor performance in Azure Application Insights
- Set up alerts for any failures

## Database (Future Enhancement)

If you need to store commission inquiries:
- Use Azure Cosmos DB or SQL Database
- Add API routes in Next.js (`pages/api/`)
- Update contact form to post to your API

## Support

For issues:
- Check Azure Static Web Apps documentation
- Review GitHub Actions workflow logs
- Contact Azure Support
