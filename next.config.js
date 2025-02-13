/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    NEXT_PUBLIC_MOVIE_IMAGE_BASE_URL: process.env.NEXT_PUBLIC_MOVIE_IMAGE_BASE_URL,
  },
};

module.exports = nextConfig; 