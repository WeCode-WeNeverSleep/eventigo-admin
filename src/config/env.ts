export const env = {
  apiUrl: import.meta.env.VITE_API_URL,
};

if (!env.apiUrl) {
  throw new Error("Missing VITE_API_URL environment variable");
}

