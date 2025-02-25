/**
 * Format work's title into a slug used for identification of work
 * @param {string} title 
 * @returns {string}
 */
export function formatTitleToSlug(title) {
  return encodeURI(title.toLowerCase());
}
