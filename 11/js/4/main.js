let num1 = Number(window.prompt("enter a number, please"));
let num2 = Number(window.prompt("enter a number, please"));
let num3 = Number(window.prompt("enter a number, please"));

if(num1 == num2 == num3){
    alert("equals")
}
else if(num1 > num2 && num1 > num3){
    alert(num1)
}
else if(num2 > num1 && num2 > num3){
    alert(num2)
}
else if(num3 > num2 && num3 > num1){
    alert(num3)
}