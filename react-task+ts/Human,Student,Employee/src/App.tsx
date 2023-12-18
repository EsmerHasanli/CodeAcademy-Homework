import React from "react";

//enums
// enum Position {
//   dev,
//   designer,
//   marketing,
//   smm,
//   hr,
//   ceo,
// }

//interfaces
interface IHuman {
  fname: string;
  surname: string;
  age: number;
  getInfo: () => string;
}

interface IEmployee<T> {
  salary: number;
  skills: T;
  position: string;
}

interface IStudent<Type> {
  groupName: string;
  hobbies: Type;
  GPA: number;
  hasPassed: () => boolean;
}

//classes
abstract class Human implements IHuman {
  age: number;

  constructor(private _fname: string, private _surname: string, age: number) {
    if (age < 0) {
      throw new Error("age cannot be negative!");
    } else { 
      this.age = age;
      this._fname = _fname;
      this._surname = _surname;
    }
  }


  //getters
  get fname() {
    return this._fname;
  }
  get surname() {
    return this._surname;
  }
  get fullName() {
    return this._fname + " " + this._surname;
  }

  //setters
  set fname(fname) {
    this._fname = fname;
  }
  set surname(surname) {
    this._surname = surname;
  }

  //methods
  getInfo(): string {
    return `${this.fullName} is ${this.age} years old`;
  }
}

class Student extends Human implements IStudent<string[]> {
  private _GPA: number;
  public groupName: string;
  public hobbies: string[];

  constructor(
    fname: string,
    surname: string,
    age: number,
    GPA: number,
    groupName: string,
    hobbies: string[]
  ) 
  {
    super(fname, surname, age);
    if (GPA < 0 || GPA > 100) {
      this._GPA = 0;
    } else {
      this._GPA = GPA;
    }
    this.groupName = groupName;
    this.hobbies = hobbies;
  }

  //getters
  get GPA() {
    return this._GPA;
  }
  //setters
  set GPA(value: number) {
    if (value >= 0 && value <= 100) {
      this._GPA = value;
    }
  }

  //methods
  hasPassed(): boolean {
    if (this._GPA < 50) {
      return false;
    } else {
      return true;
    }
  }
  //method override
  public getInfo(): string {
    return `${this.fullName} studies in ${this.groupName} & has GPA: ${this._GPA}`;
  }
}

class Employee extends Human implements IEmployee<string[]> {
  salary: number;
  skills: string[];
  position: string;

  constructor(
    fname: string,
    surname: string,
    age: number,
    salary: number,
    skills: string[],
    position: string
  ) {
    super(fname, surname, age);
    this.salary = salary;
    this.skills = skills;
    this.position = position;
  }

  //method override
  getInfo(): string {
    return `${this.fullName} is ${this.position} & get paid: ${
      this.salary
    }`;
  }
}

function App() {
  const [type, setType] = React.useState("");
  const [position] = React.useState("");
  const [data, setData] = React.useState<any>({ fname: "", surname: "", age: "", salary: "", skills: "", position: "", groupName: "", gpa: "", hobbies: "" });
  const [dataList, setDataList] = React.useState<string[]>([]);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
    console.log(event.target.value);
  };

  const resetForm = () => {
    setData({ fname: "", surname: "", age: "", salary: "", skills: "", position: "", groupName: "", gpa: "", hobbies: "", });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(type == '0'){
      console.log(data)
      const hobbiesArray: string[] = data.hobbies.split(',');
      console.log(hobbiesArray)
      const student = new Student(
        data.fname,
        data.surname,
        Number(data.age),
        Number(data.gpa),
        data.groupName,
        hobbiesArray,
      );
      setDataList([...dataList, student.getInfo()]);

    } else{
      const skillsArray: string[] = data.skills.split(',');
      console.log(skillsArray)
      console.log(data)
      const employee = new Employee(
        data.fname,
        data.surname,
        Number(data.age),
        Number(data.salary),
        skillsArray,
        data.position,
      );
      setDataList([...dataList, employee.getInfo()]);
    }
    resetForm();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={data.fname} onChange={(e) => setData({ ...data, fname: e.target.value })} type="text" placeholder="Name" />
        <input value={data.surname} onChange={(e) => setData({ ...data, surname: e.target.value })} type="text" placeholder="Surname" />
        <input value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })} type="number" placeholder="Age" />
        <select value={type} onChange={handleTypeChange}>
          <option value="default">Human</option>
          <option value="0">Student</option>
          <option value="1">Employee</option>
        </select>
        <br />
        {type && type == "0" && (
          <>
            <input value={data.groupName} onChange={(e) => setData({ ...data, groupName: e.target.value })} type="text" placeholder="Group Name" />
            <input value={data.gpa} onChange={(e) => setData({ ...data, gpa: e.target.value })} type="number" placeholder="GPA" />
            <input  onChange={(e) => setData({ ...data, hobbies: e.target.value})} type="text" placeholder="Hobbies" />
          </>
        )}
        {type && type == "1" && (
          <>
            <input onChange={(e) => setData({ ...data, salary: e.target.value })} type="number" placeholder="Salary" />
            <input onChange={(e) => setData({ ...data, skills: e.target.value })} type="text" placeholder="Skills" />
            <select onChange={(e) => {
              setData({ ...data, position: e.target.value})
              console.log(e.target.value.toString());
            }} 
              value={position}>
              {/* <option value={Position[0]}>dev</option>
              <option value={Position[1]}>designer</option>
              <option value={Position[3]}>marketing</option>
              <option value={Position[3]}>smm</option>
              <option value={Position[4]}>hr</option>
              <option value={Position[5]}>ceo</option> */}
              <option value="dev">dev</option>
              <option value="designer">designer</option>
              <option value="marketing">marketing</option>
              <option value="smm">smm</option>
              <option value="hr">hr</option>
              <option value="seo">ceo</option>
            </select>
          </>
        )}
        <br />
        <button type="submit"> Add </button>
        <button type="reset"> Cancel </button>
      </form>
      <br />
      <hr />
      <ul>
        {dataList && dataList.map((obj:string, idx:number) => <li key={idx}>{obj}</li>)} 
      </ul>
    </>
  );
}

export default App;