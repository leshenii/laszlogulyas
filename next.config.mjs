/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "api.microlink.io", // Microlink Image Preview
        ],
    },
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/#home',
                permanent: true,
            },
            {
                source: '/studies',
                destination: '/#studies',
                permanent: true,
            },
            {
                source: '/projects',
                destination: '/#projects',
                permanent: true,
            },
            {
                source: '/contact',
                destination: '/#contact',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
