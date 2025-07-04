
// Converts a string to kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase and PascalCase
    .replace(/[\s_]+/g, '-') // spaces and underscores to hyphens
    .replace(/--+/g, '-') // collapse multiple hyphens
    .replace(/^-+|-+$/g, '') // trim leading/trailing hyphens
    .toLowerCase(); // convert to lowercase
}
