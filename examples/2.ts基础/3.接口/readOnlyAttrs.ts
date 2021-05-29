interface Point {
  readonly x: number
  readonly y: number
}

// 一旦创建就不能改变
let p1: Point = { x: 10, y: 20 }
// p1.x = 5 报错

let a: number[] = [1, 2, 3, 4, 5]
let ro: ReadonlyArray<number> = a
// ro[0] = 1 报错
// ro.push(5) 报错
// ro.length = 5 报错
// a = ro 报错

// as 类型断言
a = ro as number[]
