// NOTE: Callback URL (Auth documentation): https://example.com/api/auth/callback/google

import NextAuth from 'next-auth';
import GitHub from "@auth/core/providers/github";

export const { handlers, auth, signIn } = NextAuth({
    providers: [GitHub({
        // clientId: process.env.GITHUB_CLIENT_ID,
        // clientSecret: process.env.GITHUB_CLIENT_SECRET,
        clientId: process.env.GITHUB_DEPLOYED_CLIENT_ID,
        clientSecret: process.env.GITHUB_DEPLOYED_CLIENT_SECRET,
    })],
})
// NOTE: Create credentials in console.cloud.google.com
    // Add Authorised URI (localhost, deployed vercel)
    // Add Redirect URI ( /api/auth/callback/google )
    // Change Display Name ( Client ID for Web application )
