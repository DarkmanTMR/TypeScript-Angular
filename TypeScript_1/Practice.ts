// создать класс юзера с полями name, age, city, status
// и методами:
// getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus
// status boolean

class User {
   private name: string;
   private age: number;
   private city: string;
   status: boolean;


    constructor(name: string, age: number, city: string, status: boolean) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.status = status;
    }

    getName(){
        return this.name;
    }

    setName(name:string){
         this.name = name
    }

    getAge (){
        return this.age;
    }

    setAge (age:number){
        if (age > 0){
            this.age = age;
        }
    }

    getCity (){
        return this.city;
    }

    setCity (city:string) {
         this.city = city;
        }


    changeStatus(status: boolean){
        this.status = status;
    }
}



// написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal

interface Animal {
    typeOfMove: string;
    speakFraze: string;

    about:() => void

}

class Cat implements Animal {
    name: string;
    color: string
    typeOfMove: string;
    speakFraze: string;

    about(): void {
        console.log(this.name + 'say' + this.speakFraze + 'and move by' + this.typeOfMove)
    }


    constructor(name: string, color: string, typeOfMove: string, speakFraze: string) {
        this.name = name;
        this.color = color;
        this.typeOfMove = typeOfMove;
        this.speakFraze = speakFraze;
    }
}

class Bird implements Animal {
    name: string;
    typeOfMove: string;
    speakFraze: string;

    about(): void {
        console.log(this.name + 'say' + this.speakFraze + 'and move by' + this.typeOfMove)
    }

    constructor(name: string, typeOfMove: string, speakFraze: string) {
        this.name = name;
        this.typeOfMove = typeOfMove;
        this.speakFraze = speakFraze;
    }
}

class Fish implements Animal {
    name: string;
    typeOfMove: string;
    speakFraze: string;

    about(): void {
        console.log(this.name + 'say' + this.speakFraze + 'and move by' + this.typeOfMove)
    }

    constructor(name: string, typeOfMove: string, speakFraze: string) {
        this.name = name;
        this.typeOfMove = typeOfMove;
        this.speakFraze = speakFraze;
    }
}
