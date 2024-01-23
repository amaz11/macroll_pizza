/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        STRIPE_KEY: process.env.STRIPE_KEY,
        STRIPE_SECTRET_KEY: process.env.STRIPE_SECTRET_KEY
    }
}

module.exports = nextConfig
