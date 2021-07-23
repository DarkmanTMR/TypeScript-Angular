interface Car {
    model: string;
    power: number;
    volume?: number;
    drive?: (speed: number) => void
}


class User {
    name: string;
    age: number;
    status: boolean;


    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting(): string {
        return 'hello my name is ' + this.name;
    }
}

function test(
    str: string,
    num: number,
    bool: boolean,
    arr: [],
    arrAny: any[],
    arrNum: number[],
    arrStr: string[],
    obj: {},
    objCar: { model: string, power: number },
    objICar: Car,
    carsArr: Car[],
    objICar3: Car,
    user: User
): void {
}


// let car = new Car();
test(
    'asdasd',
    10500,
    true,
    [],
    [1, 2, 3, true, 'afdhagd', []],
    [1, 2],
    ['asd'],
    {
        name: 'vasya', age: 31, greeting: function () {
        }
    },
    {model: 'ashdahsd', power: 123},
    {model: 'ashdahsd', power: 123, drive: (x) => console.log(x)},
    [{model: 'ashdahsd', power: 123}, {model: 'ashdahsd', power: 123, volume: 123}],
    {
        model: 'adsa', power: 123, volume: 5.6, drive: (y) => {
            let number = y / 2 * 4;
        }
    },
    new User('vasya', 31, true)
);


interface IRunner {
    speed: number;
    avgSpeed: (time: number) => number
}

let runner: IRunner = {speed: 12, avgSpeed: (time) => this.speed / time}

class Sportsman {
    private name: string;
    private age: number;

    speed: 14;

    avgSpeed(time: number): number {
        return (this.speed + 2) / time;

    }

    setAge(age) {
        if (age > 0) {
            this.age = age;
        }
    }
}

let sportsman1 = new Sportsman();

// sportsman1.age = -100;
sportsman1.setAge(-100);

class Policeman implements IRunner {
    rang: string;
    status: boolean;


    speed: number;

    avgSpeed(time: number): number {
        return this.speed * time;
    }


    constructor(rang: string, status: boolean, speed: number) {
        this.rang = rang;
        this.status = status;
        this.speed = speed;
    }
}

let sportsman = new Sportsman();
// sportsman.age = 10050;
let runners: IRunner[] = [
    runner,
    sportsman,
    new Policeman('general', true, 2)
];

let iSprotsman = runners[1];
// iSprotsman.name

let polimena = runners[2];
polimena.avgSpeed(10);


interface IGeo {
    lat: string;
    lng: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo
}

interface ICompany {
    name: string;
    catchPhrase: string
    bs: string
}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress
    phone: string;
    website: string;
    company: ICompany
}

let jphUser: IUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232'
        }
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models'
    }
}





