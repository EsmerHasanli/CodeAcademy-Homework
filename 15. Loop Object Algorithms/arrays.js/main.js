//! 1. Son rəqəmi 7 olan bütün iki rəqəmli ədədləri çapa verən proqram tərtib edin.

// for(let i = 10 ; i<=99 ; i++){
//     if(i%10==7){                    //& cislo kotoroye delitsa na 10 s ostatkom 7
//         console.log(i)
//     }
// }

//! 2. Rəqəmləri eyni olan bütün iki rəqəmli ədələrin çapa verən proqram tərtib edin.

// for(i=11 ; i<=99 ; i++ ){
//     if(i%11==0){                      //& cislo kotoroye delitsa na 11 bez ostatka
//         console.log(i)
//     }
// }

//! 3. Verilmiş ədədi rəqəmlərinə ayıran proqram tərtib edin.

// let num="827"
// for(i=0; i<1 ; i++){
//     console.log(num[0], num[1], num[2])
// }

//! 4. Verilmiş ədədin rəqəmlərindən ən böyük olanı təyin edən proqram tərtib edin.

// let num=prompt("enter a number ")
// let max=num[0]                              //& dopustim pervaya cifra cisla samoe bolwoe

// for(i=1; i<num.length ; i++){
//     if(max<num[i]){                     //& sravnivayem so vsemi elementami num-a
//         max=num[i]                      //& prisvaivayem znaceniye bolweqo cisla num max-u
//     } 
// }
// console.log(max)

//! 5. Verilmiş ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin. 

// let num=prompt("enter a number ")
// let sum = 0                      
// let multiply = 1
// let avg = 1


// for(let i=0 ; i<num.length ; i++){
//    sum += Number(num[i])                      //& summa vsex elementov
// }
// console.log(`sum is: ${sum} `)

// for(let i=0 ; i<num.length ; i++){
//     multiply *= Number(num[i])             //& proizvedeniye vsex elementov
// }
// console.log(`multiply is: ${multiply} `)

// for(let i=0 ; i<num.length ; i++){
//     avg = Number(sum / num.length)           //& sredneye arifmiticeskoye
// }
// console.log(`avg of num: ${avg}`)

//! 6. Verilmiş ədədin bütün bölənlərini tapan proqram tərtib edin.

// let num=prompt("enter a number ")

// for(let i=1; i<num ; i++){
//     if(num%i==0){                     //& esli cislo delitsa na i bez ostatka to on i yavlayetsa delitelem cisla
//         console.log(i)
//     }
// }

//! 7. Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

// let num=prompt("enter a number ")

// for(let i=1; i<num ; i++){
//     if(num%i==0){
//         console.log(i)
//     }
// }



//! 8. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.

// let arr=[10, 15, 22, 24, 55, 50]

// for(let i=0 ; i<arr.length ; i++){
//     if(arr[i]%2==1){                    
//         console.log(i)
//     }
// }

//! 9. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.

// let arr=[2, 5, 8, 7, 5, 3, 10]

// for(let i=0 ; i<arr.length ; i++){
//     if(i%2==0){
//         console.log(arr[i])
//     }
// }

//! 10. Verilmiş array-in max elementini çapa verən proqram tərtib edin.

// let arr = [10, 15, 22, 24, 55, 50]
// let max = arr[0]

// for(let i=1 ; i<arr.length ; i++ ){
//     if(max < arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max)

//! 11. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.

// let arr = [73, 15, 22, 24, 55, 50, 35, 500]
// let max = 0

// for(let i=1 ; i<arr.length ; i++ ){
//     if(max < arr[i] && arr[i]%2==0){          //& i maksimalniy i cetniy element
//         max = arr[i]
//     }
// }
// console.log(max)

//! 12. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.

// let arr = [40, 15, 22, 24, 55, 50]
// let min = arr[0]

// for(let i=1 ; i<arr.length ; i++ ){
//     if(min > arr[i]){
//         min = arr[i]
//     }
// }
// console.log(min)

//! 13. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

// let arr = [20, 1, 3, 6, 9, 11, 30, 40, 15]
// let minIndex = 0                                //& dopustim indeks min i maks cisla = 0
// let maxIndex = 0

// for(let i=1 ; i<arr.length ; i++ ){
//     if(arr[i] < arr[minIndex]){              //& sravnivayem indeksi array s nulevim indeksom
//         minIndex = i                         //& prisvaivaem znaceniye indeksa 
//     }
//     if(arr[i] > arr[maxIndex]){
//         maxIndex = i
//     }
// }

// let temp = arr[maxIndex]              //& sozdayem peremennuyu kotoroy dayem znaceniye 
// arr[maxIndex] = arr[minIndex]
// arr[minIndex]=temp

// console.log(arr)

//! 14. Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin

// let arr = [3, 2, 3, 6, 9, 11, 30, 40, 15]
// let minEven = 0;                                        
// let minEvenIdx = 0;
// let maxOdd = 0;
// let maxOddIdx = 0;

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         minEven = arr[i];
//         minEvenIdx = i;
//     }
//     else if (arr[i] % 2 == 1) {
//         maxOdd = arr[i];
//         maxOddIdx = i
         
//     }

//     if (maxOdd && minEven) {
//         break;                       //& tak kak mi uje nawli bolwoe i menwee cislo mojem ne prodoljat cikl
    
// }
// console.log(minEven, maxOdd) 
// if (maxOdd && minEven) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0 && minEven > arr[i]) {
//             minEven = arr[i]       //& teper naxodim min cetnoe            
//             minEvenIdx = i;
//             continue;
//         }
        
//         if (arr[i] % 2 == 1 && maxOdd < arr[i]) {
//             maxOdd = arr[i]            //& naxodim max necetnoe 
//             maxOddIdx = i;

//         }
        
//     }
// }

// console.log(minEven, maxOdd)

// arr[minEvenIdx] = maxOdd;          //& menayem mestami 
// arr[maxOddIdx] = minEven;
// console.log(arr)

//! 15. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

// let arr = ["Banana", 4, "Apple", 5, 7, 9, "Paris"]
// let random = prompt("Enter the data")
// let check = false
// for(let i= 0 ; i<arr.length ; i++){
//     if(arr[i]===random){
//         check = true                      //& esli vvedennoye znaceniye sovpadayet so znaceniyem massiva to true 
//         break
//     }
// }
// if(check){
//     console.log(`${random} belongs to this array`)                //& esli true 
// }
// else{
//     console.log(`${random} does not belongs to this array`)         //& esli false
// }

//! 16. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.

// let arr = [1, 2, 3, 4]
// let min = arr[0]
// let max = arr[0]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     if(min >  arr[i]){
//         min = arr[i]                   //& nawli min
//     }
//     else if(max < arr[i]){
//         max = arr[i]                 //& nawli max
//     }
//     sum += arr[i]         //&naxodim summu 
// }

// sum = sum - min - max     //& otnimayem ot summi min i max tk oni nam ne nujni 
// console.log(`sum is: ${sum}`)


    //! let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]

//! 17. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin

// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]

// for(let i = 0 ; i<arr.length ; i++){
//     if(typeof arr[i]=="boolean"){
//         console.log(arr[i-1], arr[i+1])                 //& esli boolean tyoeof data toqda vivodim element do neqo i posle neqo
//     }
// }

//! 18. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın

// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
// let maxLength = []
// for(let i = 0 ; i<arr.length ; i++){
//     if( typeof arr[i]=="string"){                          //&esli element string
//         if(arr[i].length > maxLength.length){              //& i esli dlina elementa arr bolwe cem dlina maxlength
//             maxLength = arr[i]
//         }
//    }
// }

// console.log( maxLength )

//! 19. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]

// for(let i = 0 ; i<arr.length ; i++){
//     if( typeof arr[i]=="string" && arr[i] == arr[i].toUpperCase()){        //& esli el string i esli vse bukvi uppercase
//         console.log(arr[i], "i=", i)
//     }
// }

//! 20. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın

// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]

// for(let i = 0 ; i<arr.length ; i++){            //& perebirayem massiv
//     let count = 0
//     for(let j=0 ; j<arr[i].length ; j++){      //& perebirayem elementi massiva
//         if( typeof arr[i] == "string" && arr[i][j]==arr[i][j].toUpperCase()){    
//             count++
//         }

//         if(count==2){
//             break;
//         }
//     }
//     if(count>=2){
//         console.log(arr[i])
//     }
// }
