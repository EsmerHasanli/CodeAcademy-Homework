// ! task1
// ! task2
// ! task3

// ! task4
let numbers = [1,4,2,6,8,2,1,7,7];
let count = 0;
for(let i=0 ; i<numbers.length ; i++) {
    if(numbers[i] === numbers[i]){   //? bir birine beraber olan ededler
        count++
    }

}
console.log(count) //? 9

// ! task5
let numbers = [1,4,2,6,8,2,1,7,7];
let sum
let result
for(let i=0; i<numbers.lenght; i++ ){
    sum += numbers[i] 
    result = sum / numbers.lenght
} 
console.log(result) //? undefiend


// ! task6
let names = ["Ali","Vali","Ahmad","Muhammed","Yusif"];
for(let i=0 ; i<names.length ; i++) {
    if(names[i].length > 4 ){   
        console.log(names[i]) 
    }
}



// ! task7