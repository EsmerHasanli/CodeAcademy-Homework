let num = Number(prompt("enter the number of employees:  "))

while(num < 0 || isNaN(num)){
    alert("invalid input")
    num = Number(prompt("try again"))
}

console.log(num)

let i = 1
let employees = []

while(i < num+1){
    let name = prompt(`Enter the name of employee ${i} `)
    let age = prompt(`Enter the age of employee ${i} `)
        while (age < 18) {
            age = Number(prompt(`You are not old enough! Enter age of employee #${i}`));
        }
    
    let isMarried = prompt(`Are you married?`)
    let isMale = prompt(`Are you male or female?`)
    let department = prompt("Your department?: ")
    let salary = Number(prompt(`Enter salary ${i}`))
    
    let employee = {
        name,
        age,
        isMarried,
        isMale,
        salary,
        department
    }

    employees.push(employee)
    i++

}

console.log(employees)

let avgAge=0
for (let i= 0; i<employees.length ; i++){
    avgAge += employees.age[i]
}
alert(`Avarage age: ${avgAge/employees.age.length}`)


