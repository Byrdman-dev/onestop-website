// Centralized route and asset paths, aware of Astro's configured `base`
// (e.g. "/onestop-website/" when deployed to a GitHub Pages project site).
// Always import routes/asset() from here instead of hardcoding "/..." paths,
// so the site still works correctly if the base path ever changes.

const BASE = import.meta.env.BASE_URL;

export const routes = {
  home: BASE,
  houseLeveling: `${BASE}house-leveling-lake-charles-la`,
  houseLifting: `${BASE}house-lifting-lake-charles-la`,
  foundationRepair: `${BASE}foundation-repair-lake-charles-la`,
  gallery: `${BASE}gallery`,
  about: `${BASE}about`,
  contact: `${BASE}contact`,
};

export function asset(path: string): string {
  return `${BASE}${path.replace(/^\//, "")}`;
}
