class Animal {
  private name: string
  public constructor(name: string) {
    this.name = name
  }

  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}

class Rhino extends Animal {
  constructor() {
    super('Rhino')
  }
}

class Employee {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')

animal = rhino
// animal = employee  报错

class Person {
  // readonly 只读 可获取 不可修改 
  // protected 标记为受保护类型, 可在子类中使用 单不能在实例对象中获取
  protected name: string
  protected constructor(name: string) {
    this.name = name
  }
}

class Employee2 extends Person {
  private department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  getElevatorPitch() {
    return `Hello, my name is ${this.name}, and i work in ${this.department}`
  }
}

let howard = new Employee2('Howard', 'Sales')
console.log(howard.getElevatorPitch())
