// ######### Syntax & data types

// ###### let / const — differences & scoping
let matric = 6789337;
const name = "Musa";
let examDate; // undefined

matric = 5739392;

// ###### Primitive types: string, number, bigint, boolean, null, undefined, symbol
// const name = "Abdulkabir Musa"; // String
// const matricNumber = "2023/B/SENG/0230"; // String
// const studentId = 30067077; // e.g 300.78 Number
// const isPresent = true; // Boolean
// const hasDriversLicense = false; // Boolean
const balance = 10_000_000; // Number
const age = null; // Empty
let endDate = undefined; // undefined
// Big Int
const a = 4567890987654567898765n;
const b = BigInt("4567890987654567898765");
// console.log(a);

// Type coercion & typeof operator
console.log(typeof balance); // Number

// Falsy Values: 0, false, "", null, undefined, NaN
// Truthy Values: Everything else
