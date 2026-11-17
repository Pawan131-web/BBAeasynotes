import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/syllabus",
        destination: "/notes?format=syllabus",
        permanent: false,
      },
      {
        source: "/past-questions",
        destination: "/notes?format=past-questions",
        permanent: false,
      },
      {
        source: "/model-papers",
        destination: "/notes?format=model-papers",
        permanent: false,
      },
    ];
  },
  turbopack: {
    root: path.resolve(__dirname, ".."),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
