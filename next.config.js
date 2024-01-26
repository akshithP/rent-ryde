/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // domains: [
    //   "www.alfaromeo.com.au",
    //   "cdn.carbuzz.com",
    //   "carsguide-res.cloudinary.com",
    //   "swadeology.com",
    //   "spct2000.files.wordpress.com",
    // ],
  },
};

module.exports = nextConfig;
