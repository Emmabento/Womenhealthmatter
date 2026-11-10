/**
 * Helper to ensure assets load properly whether deployed on:
 * - Root domains (e.g. example.com)
 * - GitHub Pages subpaths (e.g. username.github.io/repo-name/)
 * - Local development
 */
export function getAssetUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || './';
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
}
