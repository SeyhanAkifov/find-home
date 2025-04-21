import { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Modify the webpack config here
    return config
  },
}
 
export default nextConfig