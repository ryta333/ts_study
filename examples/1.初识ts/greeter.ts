class User{
    fullName: string
    firstName: string
    lastName: string
    constructor(firstName:string, lastName:string){
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' + lastName
    }
}

// 接口
interface Person{
    firstName: string
    lastName: string
}

function greeter(person: Person){
    return person.firstName + ' ' + person.lastName
};

const user = new User('Yee', 'Huang')

console.log(greeter(user))