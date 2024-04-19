kiwi

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

banana / 52
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
85,64,44,25,42,35,96,48,1,62,60,25,61,10,14,64,9,43,86,13,41,76,43,3,10,98,44,97,91,35,49,86,34,37,1,58,30,22,36,37,61,54,59,90,76,26,38,50,65,66,54,14,84,18,27,11,53,75,18,64,45,94,12,18,64 / 84,57,87,9,24,10,12,83,3,89,23,93,11,39,82,83,32,24,18,70,30,82,18,72,33,85,63,0,10
const isPalindrome = str => str === str.split("").reverse().join("");

true + false
const filterEvenNumbers = numbers => numbers.filter(isEven);

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
class MyClass { constructor() { this.property = getRandomString(); } }
57,6,72,17,62,62,37,0,72,77,79,40,12,3,88,43,8,28,90,79 / 35,58,89,24,12,70,12,84,60,48,52,82,43,70,97,79,26,78,7,40,87,34,23,2,62,51,10
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
banana

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

banana

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
banana + false
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const greet = name => `Hello, ${name}!`;

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
false / false
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
40,47,68,36,81,4,94,33,60,42,37,25,8,27,38,87,35,5,0,0,9,17,35,46,3,25,66,77,86,52,0,53,59,86,1,60,36,86,22,84,85,89,98,74,60,14,90,38,22,69,61 + false

const deepClone = obj => JSON.parse(JSON.stringify(obj));
77,28,91,89,20,77,0,49,20,24,74,13,90,65,63,39,78,5,64,79,29,91,76,69,62,94,90,59,96,53,27,72,86,71,71,11,77,43,75,41,2,44,17,70,53,39,75,84,44,22,30,15,93,68,28,30,65,2,61,13,96,63,48,35,2,51,3,30,20,14,23,52,27,49,16,64,12,0,24,54,32,41,13 / 50,6,10,2,38,86,2,54,99,92,52,89,84,9,0,23,21,58,65,59,3,10,60,2,85,99,53,94,25,95,97,45,29,31,21,50,89,0,78,11,88,63,93,76,14,96,44,66,53,63,14,91,13,21,50,92,4,74,46,52,15,23,56,1,7,30,68,51

const getUniqueValues = array => [...new Set(array)];
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
77,99,31,82,78,9,44,68,87,18,88,42,83,93,79,41,17,8,49,56,23,72,35,11,68,70,56,68,27,17,25,95,89,84,89,87,26,11,4,27,3,41,55,22,22,93,47,51,91,32,23,33,81,54,53,47,80,26 - grape
const fetchData = async url => { const response = await fetch(url); return response.json(); }
11 / 86
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const sum = (a, b) => a + b;

const sum = (a, b) => a + b;
orange + false
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
false * false
const squareRoot = num => Math.sqrt(num);

const getRandomSubset = (array, size) => array.slice(0, size);

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
true / false

const getRandomIndex = array => Math.floor(Math.random() * array.length);

45,75,26,68,67,54,71,98,21,10,99,2,12,68,79,45,73,13,36,28,50,15,52,75,67,3,11,3,70,59,58,29,14,76,39,85,26,48,37,92,91,56,36,74,54,77,86,96,19,33,24,71,50,73,53,70,17,41,7,54,80,88,56,46,52,71,10,57,31,95,5,48,41,24,23 / grape
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
console.log(getRandomString());
const filterEvenNumbers = numbers => numbers.filter(isEven);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
13 + 9

class MyClass { constructor() { this.property = getRandomString(); } }
banana - 85
const getRandomElement = array => array[getRandomIndex(array)];
banana

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
class MyClass { constructor() { this.property = getRandomString(); } }
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
true / 20,64,65,79,58,18,57,77,61,59,24,54,86,42,27,67,85,56,21,78,6,70,81,83,38,39,43,92,87,91,7,67,72,98,96,28,27,99,3,96,98,32,56,25,36,58,78,88,33,8,80,85,49,34,50,59,46
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
false * 47
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
grape / 19
const sum = (a, b) => a + b;
true * 45,55

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const getRandomIndex = array => Math.floor(Math.random() * array.length);
28,34,56,57,53,77,62,79,12,61,21,33,86,60,31,89,22,68,28,4,22,58,82,36,83,91,12,68,97,23,90,36,70,66,32,56,17,31,19,7,44,78,76,35,22,70,21,64,26,25,90,97,21,91,99,28,90,89,17,51,53,95,15,88,18,35,40,97,82,33,84,95,77,87,83,59,55,20,91,63,85,56,36,21,63,3,2 + kiwi

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const getRandomSubset = (array, size) => array.slice(0, size);

kiwi

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

function addNumbers(a, b) { return a + b; }
const getRandomElement = array => array[getRandomIndex(array)];
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const capitalizeString = str => str.toUpperCase();
true + 5
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
