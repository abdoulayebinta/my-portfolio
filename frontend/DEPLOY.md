# Deployment Guide: Headless WordPress + Next.js

This guide explains how to deploy your new portfolio while keeping your existing WordPress site as a Headless CMS.

## Architecture Overview

*   **Frontend:** Next.js (hosted on Vercel)
*   **Backend (CMS):** WordPress (hosted on Hostinger)
*   **Domain:** `abdoulayebah.com` (pointing to Vercel)
*   **CMS Domain:** `cms.abdoulayebah.com` (pointing to Hostinger)

## Step 1: Prepare WordPress (Hostinger)

1.  **Subdomain Setup:**
    *   Log in to your Hostinger hPanel.
    *   Go to **Domains** -> **Subdomains**.
    *   Create a new subdomain: `cms` (so it becomes `cms.abdoulayebah.com`).
    *   Point this subdomain to your existing WordPress installation folder (or move your WP installation to this subdomain's folder).
    *   *Alternative:* If you want to keep your WP at the root for now while testing, you can leave it, but eventually, you'll want the main domain to point to the Next.js app.

2.  **WordPress Settings:**
    *   Go to WP Admin -> Settings -> General.
    *   Update "WordPress Address (URL)" and "Site Address (URL)" to `https://cms.abdoulayebah.com`.
    *   **Permalinks:** Go to Settings -> Permalinks and ensure "Post name" is selected.

3.  **Enable REST API:**
    *   The REST API is enabled by default in WordPress.
    *   Test it by visiting: `https://cms.abdoulayebah.com/wp-json/wp/v2/posts`
    *   You should see JSON data of your posts.

4.  **CORS (Important):**
    *   You might need to allow your Next.js app to fetch data.
    *   Install a plugin like "WP GraphQL CORS" or add this to your `functions.php` or `.htaccess` if you encounter CORS issues (though server-side fetching usually bypasses this).

## Step 2: Deploy Next.js (Vercel)

1.  **Push to GitHub:**
    *   Ensure your latest code is pushed to your GitHub repository.

2.  **Create Vercel Project:**
    *   Go to [Vercel.com](https://vercel.com) and sign up/login.
    *   Click "Add New..." -> "Project".
    *   Import your GitHub repository.

3.  **Environment Variables:**
    *   In the Vercel project settings, add the following environment variable:
        *   `NEXT_PUBLIC_WORDPRESS_API_URL`: `https://cms.abdoulayebah.com/wp-json/wp/v2`
    *   *Note:* Replace `cms.abdoulayebah.com` with your actual WordPress URL.

4.  **Deploy:**
    *   Click "Deploy". Vercel will build your site.

## Step 3: Connect Domain

1.  **Vercel Domains:**
    *   In your Vercel project, go to **Settings** -> **Domains**.
    *   Add `abdoulayebah.com`.
    *   Vercel will provide DNS records (A record and CNAME).

2.  **Hostinger DNS:**
    *   Go to Hostinger hPanel -> **DNS Zone Editor**.
    *   Update the **A record** for `@` (root) to point to Vercel's IP address (provided in Vercel dashboard).
    *   Update the **CNAME record** for `www` to point to `cname.vercel-dns.com`.
    *   **Crucial:** Ensure you have an A record for `cms` pointing to your Hostinger IP (so your WordPress stays accessible).

## Step 4: Verify

1.  Visit `abdoulayebah.com`. You should see your new Next.js portfolio.
2.  Visit `cms.abdoulayebah.com/wp-admin`. You should see your WordPress dashboard.
3.  Create a new post in WordPress.
4.  Refresh your portfolio (Insights section). The new post should appear!

## Troubleshooting

*   **Images not loading:**
    *   If your WordPress images are hosted on `cms.abdoulayebah.com`, you need to add this domain to `next.config.ts`.
    *   Open `frontend/next.config.ts` and add:
        ```typescript
        const nextConfig: NextConfig = {
          images: {
            domains: ['cms.abdoulayebah.com', 'images.unsplash.com'],
          },
        };
        ```
*   **API Errors:**
    *   Check the browser console or Vercel logs.
    *   Ensure `NEXT_PUBLIC_WORDPRESS_API_URL` is correct and accessible.

