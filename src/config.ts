const { VITE_API_KEY, VITE_GOOGLEMAP_API_KEY } = import.meta.env;
if (!VITE_API_KEY) {
  throw new Error("FRIEND_API_KEY is missing");
}

if (!VITE_GOOGLEMAP_API_KEY) {
  throw new Error("GOOGLE_MAP_API_KEY is missing");
}

export const FRIEND_API_KEY = VITE_API_KEY;
export const GOOGLE_MAP_API_KEY = VITE_GOOGLEMAP_API_KEY;
