// ######### Syntax & data types

// // ###### let / const — differences & scoping
// let matric = 6789337;

// let examDate; // undefined

// matric = 5739392;

// // ###### Primitive types: string, number, bigint, boolean, null, undefined, symbol
// // const name = "Abdulkabir Musa"; // String
// // const matricNumber = "2023/B/SENG/0230"; // String
// // const studentId = 30067077; // e.g 300.78 Number
// // const isPresent = true; // Boolean
// // const hasDriversLicense = false; // Boolean
// const balance = 10_000_000; // Number
// const age = null; // Empty
// let endDate = undefined; // undefined
// // Big Int
// const a = 4567890987654567898765n;
// const b = BigInt("4567890987654567898765");
// // console.log(a);

// // Type coercion & typeof operator
// console.log(typeof balance); // Number

// // Falsy Values: 0, false, "", null, undefined, NaN
// // Truthy Values: Everything else

// // Template literals & string methods
// const surname = "Musa";

// const fullStatement0 = "My surname is " + surname + ". My best food is Rice & Beans"; // Concatenation

// const fullStatement1 = `My surname is ${surname}. My best food is Rice & Beans`; // Template literals
// // console.log(fullStatement0);
// // console.log(fullStatement1);

/////// String Methods
// Transforming
const fullName = "Abdulqodir Adeboye";

const upper = fullName.toUpperCase();
console.log(upper);

const lower = fullName.toLowerCase();
console.log(lower);

const localUpper = fullName.toLocaleUpperCase();
console.log(localUpper);

const localLower = fullName.toLocaleLowerCase();
console.log(localLower);

console.log(fullName.normalize("NFKC"));

const a = "é"; // single character
const b = "e\u0301"; // "e" + combining accent
const z = "😘";

console.log(a.normalize());
console.log(b);

// const checkingReplace = fullName.replace("o", "a");
const checkingReplace = fullName.replaceAll("o", "a");
console.log(checkingReplace);
