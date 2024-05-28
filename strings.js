// In JavaScript, strings are immutable, which means that none of the string methods change the original string. Instead, they return a new string or a new value based on the operation performed. Here’s a detailed look at the behavior of each method in your list:

// 1. length: Returns the length of the string. Does not change the original string.
// 2. charAt(): Returns the character at the specified index. Does not change the original string.
// 3. charCodeAt(): Returns the Unicode of the character at the specified index. Does not change the original string.
// 4. at(): Returns the character at the specified index. Does not change the original string.
// 5. []: Bracket notation for character access. Does not change the original string.
// 6. concat(): Combines the text of two or more strings and returns a new string. Does not change the original string.
// 7. includes(): Determines whether one string may be found within another string. Returns a boolean. Does not change the original string.
// 8. endsWith(): Determines whether a string ends with the characters of another string. Returns a boolean. Does not change the original string.
// 9. indexOf(): Returns the index within the calling String object of the first occurrence of the specified value. Does not change the original string.
// 10. lastIndexOf(): Returns the index within the calling String object of the last occurrence of the specified value. Does not change the original string.
// 11. localeCompare(): Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order. Does not change the original string.
// 12. match(): Retrieves the result of matching a string against a regular expression. Returns an array or null. Does not change the original string.
// 13. matchAll(): Returns an iterator of all results matching a string against a regular expression. Does not change the original string.
// 14. normalize(): Returns the Unicode Normalization Form of the string. Does not change the original string.
// 15. padEnd(): Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. Returns a new string. Does not change the original string.
// 16. padStart(): Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. Returns a new string. Does not change the original string.
// 17. repeat(): Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together. Does not change the original string.
// 18. replace(): Returns a new string with some or all matches of a pattern replaced by a replacement. Does not change the original string.
// 19. replaceAll(): Returns a new string with all matches of a pattern replaced by a replacement. Does not change the original string.
// 20. search(): Executes a search for a match between a regular expression and this String object. Returns the index of the match or -1. Does not change the original string.
// 21. slice(): Extracts a section of a string and returns it as a new string. Does not change the original string.
// 22. split(): Splits a String object into an array of strings by separating the string into substrings. Does not change the original string.
// 23. startsWith(): Determines whether a string begins with the characters of another string. Returns a boolean. Does not change the original string.
// 24. substring(): Returns a new string containing the specified part of the original string. Does not change the original string.
// 25. toLocaleLowerCase(): Returns the calling string value converted to lower case, according to any locale-specific case mappings. Does not change the original string.
// 26. toLocaleUpperCase(): Returns the calling string value converted to upper case, according to any locale-specific case mappings. Does not change the original string.
// 27. toLowerCase(): Returns the calling string value converted to lower case. Does not change the original string.
// 28. toString(): Returns a string representing the specified object. Does not change the original string.
// 29. toUpperCase(): Returns the calling string value converted to upper case. Does not change the original string.
// 30. trim(): Removes whitespace from both ends of a string and returns a new string. Does not change the original string.
// 31. trimEnd() (or trimRight()): Removes whitespace from the end of a string and returns a new string. Does not change the original string.
// 32. trimStart() (or trimLeft()): Removes whitespace from the beginning of a string and returns a new string. Does not change the original string.
// 33. valueOf(): Returns the primitive value of a String object. Does not change the original string.

let string1 = "Mudassir";
let string2 = "mudassir Zaman khan abbasi ";
// console.log(string1.concat(string2));
// console.log(string1.at(2));
// console.log(string1.endsWith("r"));
// console.log(string2.localeCompare(string1));
// console.log(string2.match("u"));
// let matchAllString = string2.matchAll("s");
// console.log(matchAllString);
// console.log(string2.normalize());
console.log(string2.repeat(4));
console.log(string2.substring(1, 4));
console.log(string2.valueOf());

// console.log(obj1.toString());
// console.log(string.length);
// console.log(string.charAt(4));
// console.log(string.charCodeAt(4));
// console.log(string.includes("u"));
// console.log(string.indexOf("s"));
// console.log(string.lastIndexOf("s"));
// console.log(string.replace("s", "x"));
// console.log(string.replaceAll("s", "x"));
// console.log(string[3]);
// console.log(string.split(""));
// console.log(string.trim());
// console.log(string.trimEnd());
// console.log(string.trimStart());
// console.log(string.slice(2, 4));
// console.log(string.slice(2, 4));
