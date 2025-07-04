function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

// Example usage:
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber

function addNumbers(a, b) {
    if (a === undefined || b === undefined || a === null || b === null) {
        throw new Error('Both inputs must be defined and not null.');
    }
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Both inputs must be valid numbers.');
    }
    return a + b;
}

// Example usage:
// console.log(addNumbers(5, 3)); // 8
// console.log(addNumbers('5', 3)); // Throws error


/*
Prompt: Improve the toCamelCase function to make it more robust. It should:
- Handle empty strings, null, undefined, and non-string inputs gracefully (throw an error for invalid types).
- Remove leading/trailing whitespace.
- Handle multiple consecutive separators (spaces, underscores, hyphens).
- Ignore non-alphanumeric characters except separators.
- Preserve numbers in the string.
- Add thorough error handling and clear documentation.
- Include comprehensive example usages and edge case tests.
*/