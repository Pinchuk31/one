const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
54 + 8

const findLargestNumber = numbers => Math.max(...numbers);
