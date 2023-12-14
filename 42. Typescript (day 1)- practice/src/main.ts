// // //greating console
// // let message: string = 'hello world';
// // console.log(message);
 
// // //greating html
// // let heading = document.createElement('h1');
// // heading.textContent = message;

// // document.body.appendChild(heading);

// // //ts types - primitive - string, number, boolean,null, undefined, symbol(represents a unique constant value)
// // //ts types - object - functions, arrays, classes

// // let fname: string = 'esmer';
// // let age:number = 19;
// // console.log(`${fname} is ${age} years old`);

// // let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
// // let ages: number[] = [1,2,3,4,5,6,7,8,9,10]

// // let person: {
// //     fname: string,
// //     age: number
// // }

// // person ={
// //     fname:'Esmer',
// //     age:19,
// // }

// // let greeting: (fname: string)=> string

// // greeting = function(fname: string){
// //     return `Hi ${fname}`
// // }

// // let items = [0, 1, null, 'Hi']; // ne vosprinimaet null, type idet kak [number | string]

// // let bin: bigint = 9007199254740991n;
// // //type inference - ts guesses the type (default values)
// // //type annotation - you give a type


// // let employee: object;

// // employee ={
// //     firstName :'John',
// //     lastName: 'Adam',
// //     age:25,
// //     job: 'Web Developer',
// // }

// // console.log(employee);

// // let employee2: {
// //     fname: string,
// //     age:number,
// //     job: string
// // } = {
// //     fname: 'Esmer',
// //     age: 19,
// //     job: 'frontend developer'
// // }


// // //The object type represents all non-primitive values.
// // //The Object type describes the functionality of all objects. - For example, the Object type has the toString() and valueOf() methods that can be accessible by any object.

// // //The empty type {} -The empty type {} describes an object that has no property on its own. If you try to access a property on such object, TypeScript will issue a compile-time error:
// // let vacant: {} = [];
// // console.log(vacant); //[]

// // let vacant2: {} = {};
// // console.log(vacant2); //{}

// // let vacant3: {} = {};
// // console.log(vacant3.toString()); //[object Object]


// // //array types and Storing values of mixed types
// // let hobbies: string[];
// // hobbies = ['football']


// // let scores: (string | number)[] 
// // scores = ['Programming', 5, 'Software Design', 4]; 

// // //tuple
// // let skill: [string, number];
// // skill = ['Programming', 5]; //nelza menyat mestami

// // //enum - An enum is a group of named constant values. Enum stands for enumerated type.
// // enum Month {
// //     Jan,
// //     Feb,
// //     Mar,
// //     Apr,
// //     May,
// //     Jun,
// //     Jul,
// //     Aug,
// //     Sep,
// //     Oct,
// //     Nov,
// //     Dec
// // };

// // function isItSummer(month: Month) {
// //     let isSummer: boolean;
// //     switch (month) {
// //         case Month.Jun:
// //         case Month.Jul:
// //         case Month.Aug:
// //             isSummer = true;
// //             break;
// //         default:
// //             isSummer = false;
// //             break;
// //     }
// //     return isSummer;
// // }

// // console.log(isItSummer(Month.Jun)); // true


// // //It is a good practice to use the constant values defined by enums in the code.
// // //However, the following example passes a number instead of an enum to the isItSummer() function. And it works.

// // console.log(isItSummer(6)); // true

// // //For example, you can use an enum for the approval status:
// // enum ApprovalStatus {
// //     draft,
// //     submitted,
// //     approved,
// //     rejected
// // };

// // const request = {
// //     id: 1,
// //     status: ApprovalStatus.approved,
// //     description: 'Please appprove this request'
// // }

// // if(request.status === ApprovalStatus.approved){
// //     console.log(request.description);
// // }


// // const dataFromApi = { id:'1', name:'esmer', age: 19}  //for ex. this is object from api and i dont what type will come from api 

// // const currentPerson = JSON.stringify(dataFromApi);
// // console.log(currentPerson);

// // //the void type used as the return type of functions 
// // //that do not return a value. 

// // function log(message: string): void {
// //     console.log(message);
// // }

// // //The never type is a type that contains no values. 
// // //You cannot assign any value to a variable with a never type.

// // function raiseError(message: string): never{
// //     throw new Error(message);
// // }

// // //union type 
// // function add (a:number | string, b:number | string){
// //     if(typeof a === 'number' && typeof b === 'number'){
// //         return a+b;
// //     }else if(typeof a === 'string' && typeof b === 'string'){
// //         return a.concat(b);
// //     }else{
// //         throw new Error ('Parameters must be numbers or strings');
// //     }
// // }

// // //aliases - Type aliases allow you to create a new name for an existing type. The following shows the syntax of the type alias:

// // type alphanumeric = string | number;
// // let input: alphanumeric;
// // input = 100; // valid
// // input = 'Hi'; // valid
// // //input = false; // Compiler error


// //greating console
// let message: string = 'hello world';
// console.log(message);
 
// //greating html
// let heading = document.createElement('h1');
// heading.textContent = message;

// document.body.appendChild(heading);

// //ts types - primitive - string, number, boolean,null, undefined, symbol(represents a unique constant value)
// //ts types - object - functions, arrays, classes

// let fname: string = 'esmer';
// let age:number = 19;
// console.log(`${fname} is ${age} years old`);

// let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
// let ages: number[] = [1,2,3,4,5,6,7,8,9,10]

// let person: {
//     fname: string,
//     age: number
// }

// person ={
//     fname:'Esmer',
//     age:19,
// }

// let greeting: (fname: string)=> string

// greeting = function(fname: string){
//     return `Hi ${fname}`
// }

// let items = [0, 1, null, 'Hi']; // ne vosprinimaet null, type idet kak [number | string]

// let bin: bigint = 9007199254740991n;
// //type inference - ts guesses the type (default values)
// //type annotation - you give a type


// let employee: object;

// employee ={
//     firstName :'John',
//     lastName: 'Adam',
//     age:25,
//     job: 'Web Developer',
// }

// console.log(employee);

// let employee2: {
//     fname: string,
//     age:number,
//     job: string
// } = {
//     fname: 'Esmer',
//     age: 19,
//     job: 'frontend developer'
// }


// //The object type represents all non-primitive values.
// //The Object type describes the functionality of all objects. - For example, the Object type has the toString() and valueOf() methods that can be accessible by any object.

// //The empty type {} -The empty type {} describes an object that has no property on its own. If you try to access a property on such object, TypeScript will issue a compile-time error:
// let vacant: {} = [];
// console.log(vacant); //[]

// let vacant2: {} = {};
// console.log(vacant2); //{}

// let vacant3: {} = {};
// console.log(vacant3.toString()); //[object Object]


// //array types and Storing values of mixed types
// let hobbies: string[];
// hobbies = ['football']


// let scores: (string | number)[] 
// scores = ['Programming', 5, 'Software Design', 4]; 

// //tuple
// let skill: [string, number];
// skill = ['Programming', 5]; //nelza menyat mestami

// //enum - An enum is a group of named constant values. Enum stands for enumerated type.
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

// console.log(isItSummer(Month.Jun)); // true


// //It is a good practice to use the constant values defined by enums in the code.
// //However, the following example passes a number instead of an enum to the isItSummer() function. And it works.

// console.log(isItSummer(6)); // true

// //For example, you can use an enum for the approval status:
// enum ApprovalStatus {
//     draft,
//     submitted,
//     approved,
//     rejected
// };

// const request = {
//     id: 1,
//     status: ApprovalStatus.approved,
//     description: 'Please appprove this request'
// }

// if(request.status === ApprovalStatus.approved){
//     console.log(request.description);
// }


// const dataFromApi = { id:'1', name:'esmer', age: 19}  //for ex. this is object from api and i dont what type will come from api 

// const currentPerson = JSON.stringify(dataFromApi);
// console.log(currentPerson);

// //the void type used as the return type of functions 
// //that do not return a value. 

// function log(message: string): void {
//     console.log(message);
// }

// //The never type is a type that contains no values. 
// //You cannot assign any value to a variable with a never type.

// function raiseError(message: string): never{
//     throw new Error(message);
// }

// //union type 
// function add (a:number | string, b:number | string){
//     if(typeof a === 'number' && typeof b === 'number'){
//         return a+b;
//     }else if(typeof a === 'string' && typeof b === 'string'){
//         return a.concat(b);
//     }else{
//         throw new Error ('Parameters must be numbers or strings');
//     }
// }

// //aliases - Type aliases allow you to create a new name for an existing type. The following shows the syntax of the type alias:

// type alphanumeric = string | number;
// let input: alphanumeric;
// input = 100; // valid
// input = 'Hi'; // valid
// //input = false; // Compiler error
