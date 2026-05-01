type UserType = {
    name: string;
    age: number;
    hello(): void;
};

class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    hello(): void {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}

const anotherUser: UserType = new User("pavel", 21);
anotherUser.hello();