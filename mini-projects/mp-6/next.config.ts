import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                hostname: 'avatars.githubusercontent.com',
                protocol: 'https',
            },
            {
                hostname: '**',
                protocol: 'http',
                pathname: '/.*/**'
            },
            {
                hostname: '**',
                protocol: 'https',
                pathname: '/.*/**'
            }
        ]
    }
};

export default nextConfig;
