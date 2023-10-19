//#region greet
function greet(name, clb){
    console.log("Hello " + name);
    clb();
}
function sayHello(name){
    console.log("Hello " + name);

}
//#endregion


//#region sum
function displaySum(sum) {
    console.log(`sum is: ${sum}`);
}
function sum(num1,num2,clb) {
    let result = num1+num2;
    clb(result)
    return result;
}
//#endregion


//#region multiply

function displayMultiply(multiply) {
    console.log(`multiply is: ${multiply}`);
}
function multiply(num1,num2,clb) {
    let result = num1*num2;
    clb(result)
    return result;
}

//#endregion


//#region rectanfle area 

function displayArea(area) {
    console.log(`The area is: ${area}`);
}
function findArea(a, b, clb){
    let area = a*b;
    clb(area)
}

findArea(3, 4, displayArea)

//#endregion
