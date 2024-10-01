/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        unoptimized: true,
    },
    basePath: '/curso-completo',  // Define o caminho base para a URL
    assetPrefix: 'https://alessandrapavani.com/curso-completo/',  // Define o prefixo de recursos para os assets
}

module.exports = nextConfig;
