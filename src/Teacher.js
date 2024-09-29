import Person from './Person.js';
export default class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        return('teach')
    }
}

// const teacher = new Teacher('John', 'BSc Computer Science');

// console.log(teacher.walk());