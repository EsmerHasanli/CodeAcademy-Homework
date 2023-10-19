//#region 1. String isBlank method

String.prototype.isBlank = function (){
    if(typeof this === 'string' && this.trim() !== ""){
        return true;
    }
    return false;
}

// let test1 = "salam";
// console.log(test1.isBlank());
// let test2 = "";
// console.log(test2.isBlank());
// let test3 = "   ";
// console.log(test3.isBlank());

//#endregion

//#region 2. String wavy method

String.prototype.wavy = function (){
    let textStyle = "";
    for (let i = 0; i < this.length; i++) {
        if(i%2===0){
            textStyle += this[i].toLowerCase();
        }
        else{
            textStyle += this[i].toUpperCase();
        }
    }
    return textStyle;
}

// let test1 = "salam";
// console.log(test1.wavy());

//#endregion

//#region 3. Array min, max methods

Array.prototype.max = function (){
    let max = this[0];
    for (let i = 1; i < this.length; i++) {
        if(this[i] > max){
            max = this[i];
        }
    }
    return max;
}

Array.prototype.min = function (){
    let min = this[0];
    for (let i = 1; i < this.length; i++) {
        if(this[i] < min){
            min = this[i];
        }
    }
    return min;
}

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.max());
// console.log(arr.min());

//#endregion 

//#region 4. Array numbers method

Array.prototype.number = function (){
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
        if(typeof this[i] === "number"){
            counter++;
        }   
    }
    return counter ;  
}

// let arr = [1,"salam",2,7,true,12,false];
// console.log(arr.number());

//#endregion

//#region 5. Array myFind method

Array.prototype.myFind = function (text){
    for (let i = 0; i < this.length; i++) {
        if(text===this[i]){
            return true;
        }
    }
    return false;
}
// let arr = [1,"salam",2,7,true,12,false];
// console.log(arr.myFind(12));

//#endregion

//#region 6. Array myFindAll method

Array.prototype.myFindAll = function (text){
    let result = [];
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
        if(text===this[i]){
            counter++;
        }
        else{
            counter = -1;
        }
    }
    return counter;
}

// let arr = [1,"salam",2,7,true,12,false];
// console.log(arr.myFindAll(12));

//#endregion

//#region 7. Array myFilter method

Array.prototype.myFilter = function (min, max){
    let arr = [];
    for (let i = 0; i<this.length; i++){
        if(this[i] >= min && this[i] <= max){
            arr.push(this[i]);
        }
    }
    return arr;
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.myFilter(3,7));

//#endregion

//#region 8. Array myIndexOf method

Array.prototype.myIndexOf = function (test){
    for (let i = 0; i < this.length; i++) {
        if(test===this[i]){
            return i;
        }
    }
    return -1;
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.myIndexOf(8));

//#endregion

//#region 9. Array myLastIndexOf method

Array.prototype.myIndexOf = function (test){
    for (let i = this.length-1; i >= 0; i--) {
        if(test===this[i]){
            return i;
        }
    }
    return -1;
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.myIndexOf(8));

//#endregion

//#region 10. Array myMap method

Array.prototype.myMap = function (test){
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(test(this[i]));
    }
    return result;
}

//#endregion
