/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    additionalData: `@import "/src/app/styles/variables.scss";\n`,
  }
}

module.exports = nextConfig
