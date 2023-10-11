let num = Number(window.prompt("enter a number, please"));

if(num > 0 && num  % 2 === 0){
    alert("positive even");
}
else if(num > 0 && num / 2 !== 0){
    alert("positive odd");
}
else{
    alert("negative number");
}
