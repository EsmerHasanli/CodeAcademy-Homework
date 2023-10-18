//#region Device
class Device {
    //properties
    brand;
    model;
    screenSize;
    batteryLevel;
    #price;
    salePrice;
    discountPercentage=0
    saleCount;
    stockCount;
    //constructor
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, saleCount,stockCount){
        this.brand = brand;
        this.model = model;
        this.screenSize = screenSize;
        this.batteryLevel = batteryLevel;
        this.#price = price;
        this.salePrice = salePrice;
        this.discountPercentage = discountPercentage;
        this.saleCount = saleCount;
        this.stockCount = stockCount;
    }
    //getter
    get profit(){
        return this.calculateProfit();
    }
    //methods
    checkProfitability(){
        if (this.salePrice < this.#price) {
            let profitLose = this.#price - this.salePrice;
            console.log(`You are going to lose ${profitLose}. Change the sale price it is not profitable for you.`);
        }
    }
    calculateProfit(){
        return (this.salePrice - this.#price)*this.saleCount;
    }
    pricePercentage(){
        if(this.discountPercentage > 0){
            this.salePrice = this.salePrice*this.discountPercentage/100;
        }
    }
    displayBatteryLevel(){
        console.log(`Your current battery level is: ${this.batteryLevel}`);
    }
    sellProduct(saleData){
        if(saleData < this.stockCount){
            this.stockCount = this.stockCount - saleData;
            this.saleCount = this.saleCount + saleData
        }
        else{
            console.log(`we do not have product in stock`);
        }
    }
    displayDetails(){
        console.log(`${this.brand}, ${this.model}, ${this.screenSize}`);
    }
}
//#endregion

//#region Phone
class Phone extends Device{
    isSmart;
    ring;  //"beep beep","ring ring"
    //constructor
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, saleCount,stockCount, isSmart, ring){
        super(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, saleCount,stockCount);
        this.isSmart = isSmart;
        this.ring = ring;
    }
    //methods
    displayDetails(){
        super.displayDetails();
        if (this.isSmart) {
            console.log("This is a Smartphone");
        } 
        else {
            console.log("This is not a Smartphone");
        }
    }
} 
//#endregion  

//#region Laptop
class Laptop extends Device{
    isRGBkeyboard;
    operatingSystem;
    //constructor
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, saleCount,stockCount, isRGBkeyboard, operatingSystem){
        super(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, saleCount,stockCount);
        this.isRGBkeyboard = isRGBkeyboard;
        this.operatingSystem = operatingSystem;
    }
    //methods
    displayDetails(){
        super.displayDetails();
        if (this.isRGBkeyboard) {
            console.log("This laptop has an RGB keyboard");
        } 
        else {
            console.log("This laptop does not have an RGB keyboard");
        }
    }
}
//#endregion


let iphone  = new Phone("Apple", "iPhone 14 Pro Max", "6.1 inches", 90, 2899, 3000, 0, 2, 150, true, "beep-beep");
iphone.sellProduct(2)
// console.log(iphone)
let lenovo = new Laptop("lenovo", "22H2", "15.6` inches", 100, 1149, 1500, 5, 1,25, false, "Windows");


//#region 
// let arr = [
//     {name:"Iphone", price:3000},
//     {name:"Samsung", price:2000},
//     {name:"Samsung", price:2000},
//     {name:"Samsung", price:2000},
//     {name:"Xiaomi", price:500}, 
// ]

// const filterByPrice = (arr, price) => {
//     const filteredArr = [];
//     arr.forEach((data) => {
//         if (data.price > price) {
//             filteredArr.push(data.name)
//         }
//     })
//     console.log(filteredArr)
// }
// filterByPrice(arr, 600)

// const filterbyName = (arr, name) => {
//     const filteredArr = []
//     arr.forEach((data) => {
//         if(data.name === name){
//             filteredArr.push(data.name)
//         }
//     })

// }

// const getTotalProfit = (arr) => {
//     let totalProfit = 0;
//     for (let i = 0; i < arr.length; i++) {
//         totalProfit += arr[i].price;
//     }
//     return totalProfit;
// }
//#endregion

