/**
 * Converts a string to kebab-case format.
 *
 * Rules:
 * 1. Handles camelCase and PascalCase by inserting hyphens between lowercase and uppercase letters.
 * 2. Replaces spaces and underscores with hyphens.
 * 3. Converts the entire string to lowercase.
 * 4. Collapses multiple consecutive hyphens into one.
 * 5. Trims any leading or trailing hyphens from the final result.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The kebab-case version of the input string.
 *
 * @example
 * toKebabCase('helloWorld') // 'hello-world'
 * toKebabCase('HelloWorld') // 'hello-world'
 * toKebabCase('hello_world test') // 'hello-world-test'
 * toKebabCase('foo--bar__baz') // 'foo-bar-baz'
 * toKebabCase('  API_response 2 ') // 'api-response-2'
 * toKebabCase('fooBarBaz') // 'foo-bar-baz'
 * toKebabCase('---foo---bar---') // 'foo-bar'
 */
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')   // camelCase and PascalCase
        .replace(/[\s_]+/g, '-')               // spaces and underscores to hyphens
        .replace(/-+/g, '-')                    // collapse multiple hyphens
        .replace(/^-+|-+$/g, '')                // trim leading/trailing hyphens
        .toLowerCase();                         // convert to lowercase
}
/**
 * Converts a string to dot.case format.
 *
 * Rules:
 * - Handles empty strings, null, undefined, and non-string inputs gracefully (throws an error for invalid types).
 * - Removes leading/trailing whitespace.
 * - Handles multiple consecutive separators (spaces, underscores, hyphens).
 * - Ignores non-alphanumeric characters except separators.
 * - Preserves numbers in the string.
 *
 * @param {string} input - The string to convert.
 * @returns {string} The dot.case version of the input string.
 * @throws {TypeError} If input is not a string.
 *
 * @example
 * toDotCase('  hello_world-test  ') // 'hello.world.test'
 * toDotCase('user id') // 'user.id'
 * toDotCase('foo--bar__baz') // 'foo.bar.baz'
 * toDotCase('API_response_2') // 'api.response.2'
 * toDotCase('') // ''
 * toDotCase('___') // ''
 * toDotCase('foo!@#bar$%^baz') // 'foo.bar.baz'
 */
/**
 * Converts a string to dot.case format.
 *
 * Rules:
 * - Handles empty strings, null, undefined, and non-string inputs gracefully (throws an error for invalid types).
 * - Removes leading/trailing whitespace.
 * - Handles multiple consecutive separators (spaces, underscores, hyphens).
 * - Ignores non-alphanumeric characters except separators.
 * - Preserves numbers in the string.
 *
 * @param {string} input - The string to convert.
 * @returns {string} The dot.case version of the input string.
 * @throws {TypeError} If input is not a string.
 *
 * @example
 * toDotCase('  hello_world-test  ') // 'hello.world.test'
 * toDotCase('user id') // 'user.id'
 * toDotCase('foo--bar__baz') // 'foo.bar.baz'
 * toDotCase('API_response_2') // 'api.response.2'
 * toDotCase('') // ''
 * toDotCase('___') // ''
 * toDotCase('foo!@#bar$%^baz') // 'foo.bar.baz'
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim whitespace
    let str = input.trim();

    // Replace all non-alphanumeric characters (except space, _, -) with empty string
    str = str.replace(/[^a-zA-Z0-9 _-]+/g, '');

    // Replace all separators (space, _, -) with a single space
    str = str.replace(/[\s_-]+/g, ' ');

    // Split into words
    const words = str.split(' ').filter(Boolean);

    // If no words, return empty string
    if (words.length === 0) return '';

    // Lowercase all words and join with dot
    return words.map(word => word.toLowerCase()).join('.');
}
/**
 * Converts a string to camelCase format.
 *
 * Rules:
 * - Handles empty strings, null, undefined, and non-string inputs gracefully (throws an error for invalid types).
 * - Removes leading/trailing whitespace.
 * - Handles multiple consecutive separators (spaces, underscores, hyphens).
 * - Ignores non-alphanumeric characters except separators.
 * - Preserves numbers in the string.
 * - Does NOT split camelCase words (e.g., 'fooBar' becomes 'foobar').
 *
 * @param {string} input - The string to convert.
 * @returns {string} The camelCase version of the input string.
 * @throws {TypeError} If input is not a string.
 *
 * @example
 * toCamelCase('  hello_world-test  ') // 'helloWorldTest'
 * toCamelCase('user id') // 'userId'
 * toCamelCase('foo--bar__baz') // 'fooBarBaz'
 * toCamelCase('API_response_2') // 'apiResponse2'
 * toCamelCase('') // ''
 * toCamelCase('___') // ''
 * toCamelCase('foo!@#bar$%^baz') // 'fooBarBaz'
 * toCamelCase(' 123_abc DEF ') // '123AbcDef'
 * toCamelCase('foo  bar---baz') // 'fooBarBaz'
 * toCamelCase('fooBar') // 'foobar'
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim whitespace
    let str = input.trim();

    // Replace all non-alphanumeric characters (except space, _, -) with empty string
    str = str.replace(/[^a-zA-Z0-9 _-]+/g, '');

    // Replace all separators (space, _, -) with a single space
    str = str.replace(/[\s_-]+/g, ' ');

    // Split into words
    const words = str.split(' ').filter(Boolean);

    // If no words, return empty string
    if (words.length === 0) return '';

    // Lowercase first word, capitalize the rest
    return words
        .map((word, i) =>
            i === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

// Example usages and edge case tests
const testCases = [
    { input: '  hello_world-test  ', expected: 'helloWorldTest' },
    { input: 'user id', expected: 'userId' },
    { input: 'foo--bar__baz', expected: 'fooBarBaz' },
    { input: 'API_response_2', expected: 'apiResponse2' },
    { input: '', expected: '' },
    { input: '___', expected: '' },
    { input: 'foo!@#bar$%^baz', expected: 'fooBarBaz' },
    { input: ' 123_abc DEF ', expected: '123AbcDef' },
    { input: 'foo  bar---baz', expected: 'fooBarBaz' },
    { input: 'fooBar', expected: 'foobar' }, // not splitting camelCase
    { input: null, expectedError: true },
    { input: undefined, expectedError: true },
    { input: 123, expectedError: true },
    { input: {}, expectedError: true },
];

for (const { input, expected, expectedError } of testCases) {
    try {
        const result = toCamelCase(input);
        if (expectedError) {
            console.error(`FAILED: Expected error for input: ${input}`);
        } else if (result !== expected) {
            console.error(`FAILED: Input: ${input} | Expected: ${expected} | Got: ${result}`);
        } else {
            console.log(`PASSED: Input: ${input} | Output: ${result}`);
        }
    } catch (e) {
        if (expectedError) {
            console.log(`PASSED (error): Input: ${input} | Error: ${e.message}`);
        } else {
            console.error(`FAILED (unexpected error): Input: ${input} | Error: ${e.message}`);
        }
    }
}