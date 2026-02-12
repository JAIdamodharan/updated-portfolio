# Security Overview

This document outlines the security measures implemented to protect the portfolio website and data.

## Implemented Measures

### 1. Security Headers (Vercel)
We have configured `vercel.json` with industry-standard security headers to protect users and the application:
- **Content Security Policy (CSP)**: Restricts where scripts, styles, and fonts can be loaded from, preventing Cross-Site Scripting (XSS).
- **X-Content-Type-Options**: Prevents browsers from "sniffing" the content type, which helps mitigate MIME type confusion attacks.
- **X-Frame-Options**: Prevents the site from being embedded in iframes (Clickjacking protection).
- **X-XSS-Protection**: Enables the browser's built-in XSS filter.
- **Referrer-Policy**: Controls how much referrer information is included with requests.
- **Permissions-Policy**: Restricts access to browser features like camera, microphone, and geolocation.

### 2. Secure API Communication
- **Supabase public/anon key**: Only the public "anon" key is used in the frontend. This key is safe to expose as it relies on Row Level Security (RLS) for data protection.
- **Environment Variables**: Sensitive configuration is stored in `.env` (local) and Vercel Environment Variables (production), never hardcoded in the codebase.

## Recommended Backend Security (Supabase)

Since the frontend is secured, ensure your Supabase backend follows these best practices:

### 1. Enable Row Level Security (RLS)
Ensure RLS is enabled on the `contact_messages` table (and any other tables).
Example policy for `contact_messages`:
- **Operation**: `INSERT`
- **Policy**: Allow anyone to insert (since it's a contact form).
- **Operation**: `SELECT`, `UPDATE`, `DELETE`
- **Policy**: Restrict to authenticated admin users only (or disable entirely for public/anon).

### 2. Rate Limiting
Consider implementing rate limiting if you notice spam. Supabase allows you to configure rate limits for Auth and API.

## Dependency Management
- Regularly run `npm audit` to check for vulnerabilities in third-party packages.
- Keep dependencies updated using `npm update`.
