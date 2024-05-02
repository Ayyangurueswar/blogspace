/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'randomuser.me'
            }
        ]
    }
};

export default nextConfig;
