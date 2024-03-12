const squareRoot = num => Math.sqrt(num);

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

48 - 28
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
