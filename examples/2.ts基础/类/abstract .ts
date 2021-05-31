// 抽象类不可实例化 抽象方法只能由派生类实现
abstract class Department {
  name: string
  constructor(name: string) {
    this.name = name
  }

  printName(): void {
    console.log('Department name' + this.name)
  }

  abstract printMeeting(): void
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting ad Auditing')
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am')
  }

  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}

let deparment: AccountingDepartment
deparment = new AccountingDepartment()
deparment.printName()
deparment.printMeeting()
deparment.generateReports()

class Greeter {
  static standardGreeting = 'Hello, there'
  greeting: string
  constructor(message?: string) {
    this.greeting = message
  }

  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}

let greeter: Greeter
greeter = new Greeter()

console.log(greeter.greet())

// typeof 表示取类的静态类型, 而非实例类型
let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hey there'

let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())
