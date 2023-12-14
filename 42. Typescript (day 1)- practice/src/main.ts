// let fname: string = 'esmer';
// let age: number = 3;

// fname = ' esmer hasanli';
// age = 19;

// console.log(fname, age);

// let id: number | string //union type

//Primitive types - string, number, boolean, null, undefined, symbol(represents a unique constant value)
//Object types - functions, arrays, classes

//Type inference - TypeScript guesses the type
//Type annotations - You explicitly tell TypeScript the type

//The number type
// let a: number;
// a=5

//Big Integers
//let b: bigint;
//b = 9007199254740991n;

//TypeScript String
//let firstName: string = 'John';

//Boolean types
// let pending: boolean;
// pending = true;

//object types
// let employee: object;

// let employee: {
//     firstName: string;
//     lastName: string;
//     age: number;
// };

// employee = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25
// };

// let employee: {
//     firstName: string;
//     lastName: string;
//     age: number;
//     jobTitle: string;
// } = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     jobTitle: 'Web Developer'
// };

//The object type represents all non-primitive values while the Object type describes the functionality of all objects.
//the Object type has the toString() and valueOf() methods that can be accessible by any object.

//The empty type {}
// let vacant: {};
// vacant.firstName = 'John';

//TypeScript array type
//let arrayName: type[];

//Storing values of mixed types
// let scores : (string | number)[];
// scores = ['Programming', 5, 'Software Design', 4]; 

//tuple
// let skill: [string, number];
// skill = ['Programming', 5];

//TypeScript enum type
// enum Month {
//     Jan,
//     Feb,
//     Mar,
//     Apr,
//     May,
//     Jun,
//     Jul,
//     Aug,
//     Sep,
//     Oct,
//     Nov,
//     Dec
// };

// function isItSummer(month: Month) {
//     let isSummer: boolean;
//     switch (month) {
//         case Month.Jun:
//         case Month.Jul:
//         case Month.Aug:
//             isSummer = true;
//             break;
//         default:
//             isSummer = false;
//             break;
//     }
//     return isSummer;
// }


//any type
// let result: any;
// result = 10.123;
// result = 'result'

//void type
// function log(message): void {
//     console.log(messsage);
// }

//never type
// function raiseError(message: string): never {
//     throw new Error(message);
// }


//union type
// let result: number | string;
// result = 10; // OK
// result = 'Hi'; // also OK
// result = false; // a boolean value, not OK


//alias type
// type alphanumeric = string | number;
// let input: alphanumeric;
// input = 100; // valid
// input = 'Hi'; // valid
// input = false; // Compiler error


//Literal Types
// let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
// mouseEvent = 'click'; // valid
// mouseEvent = 'dblclick'; // valid
// mouseEvent = 'mouseup'; // valid
// mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error