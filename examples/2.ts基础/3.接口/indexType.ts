// 索引类型
interface StringArray {
  // 索引签名
  // 当用 number 类型去索引时, 返回一个 string 类型的值
  [x: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']
let myStr: string = myArray[0]

class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

interface NotOkay {
  // 当 number 索引 与 string 索引同时使用时, number 索引返回值必须是 string 索引返回值的 子类型
  // [x: number]: Animal 报错
  [x: number]: Dog
  [x: string]: Animal
}

interface NumberDictionary {
  [index: string]: number
  length: number
  // name: string 报错 因为上面的 string 索引类型已经定义返回为 number 类型
}

interface ReadOnlyStringArray {
  readonly [index: number]: string
}

let myArray2: ReadOnlyStringArray = ['Alice', 'Bob']
// myArray2[1] = "asd" 报错, 数字索引为只读
