export class User {
    name: string;
    age: number;
    city: string;
    status: boolean;

    constructor(name:string, age: number, city: string, status: boolean){
        this.name = name;
        this.age = age;
        this.city = city;
        this.status = status;
    }
    greeting(): string{
        return 'hello my name is ' + this.name;
    }
}