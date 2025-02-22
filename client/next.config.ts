import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com", // For Google profile images
        port: "",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com", // For Cloudinary images
        port: "",
        pathname: "/**", // Ensure all paths from Cloudinary are allowed
      },
    ],
  },
};

export default nextConfig;
