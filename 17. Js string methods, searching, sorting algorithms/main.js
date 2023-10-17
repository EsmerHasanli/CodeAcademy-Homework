//#region 1

// let text = "hello_world, hello_js"
// let newText = text.replaceAll("_", "-")
// console.log(newText);

//#endregion

//#region 2

// const toLowerCase = text =>{
//     if(typeof text === 'string'){
//         return text.toLowerCase()
//     }
//     else{
//         console.log(`invalid input`)
//     }
// }

// let input = "I REALLY can not think of BETTER EXAMPLE"
// let result = toLowerCase(input)
// console.log(result)

//#endregion

//#region 3

// const trimAndSplit = text =>{
//     if(typeof text === 'string'){
//         return text.trim().split('');
//     }
//     else{
//         console.log(`invalid input`)
//     }
// }

// let input = prompt(`Enter the text you want to convert`)
// let result = trimAndSplit(input)
// console.log(result);

//#endregion

//#region 4

// const textConvert = text =>{
//     if(typeof text === "string"){
//         return text.toLowerCase().replaceAll(" ", "-")
//     }
// }

// let test = "Robin Singh from USA"
// let result = textConvert(test)
// console.log(result)

//#endregion

//#region  5

// const textConvert = function (text){
//     if(typeof text === "string"){
//         for (let i = 0; i < text.length; i++) {
//             text[i] = text[0].toUpperCase  //?
//         }
//         return text
//     }  
// }

// let test = ('js string exercises')
// let result = textConvert(test)
// console.log(result)

//#endregion

//#region 6

// const textConvert = function (text){
//     if(typeof text === "string"){
//         let count = 0;
//         for (let i = 0; i < text.length; i++) {
//             if(text[i] === text[i].toUpperCase()){
//                 count ++
//             }  
//         }
//         return count
//     }  
// }

// let test = "toUpperCase"
// let result = textConvert(test)
// console.log(result)

//#endregion

//#region 7. Bir function yazın, parametr olaraq bir söz və bir cümlə qəbul edir. Əgər həmin söz cümlədə tapılarsa bir object return edir. Object-də isFound və index dəyərləri olur. Əgər tapılarsa həmin söz isFound true, index isə həmin sözün indeksi olur. Əgər tapılmasa isə isFound false, index isə -1 olmalıdır.



//#endregion


//#region 8

// function Human(fname, surname, birthYear, birthCity){
//     this.fname = fname,
//     this.surname = surname,
//     this.birthYear = birthYear,
//     this.birthCity = birthCity,
//     this.getFullName = function (){
//         return this.fname + " " + this.surname 
//     }
// }

// let human1 = new Human ("Esmer", "Hasanli", 2004, "Baki")
// let human2 = new Human ("Nicat", "Mecidov", 2004, "Suraxani")
// let human3 = new Human ("Oktay", "Isgenderov", 2004, "Guba")
// let human4 = new Human ("Ayshen", "Salahova", 2004, "Agsu")

// let people = []
// people.push(human1)
// people.push(human2)
// people.push(human3)
// people.push(human4)
// console.log(people)
    

//#endregion


