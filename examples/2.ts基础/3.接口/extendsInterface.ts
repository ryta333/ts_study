interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

// 类继承接口
// 多继承
interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0

// 混合类型
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = function (star: number) {} as Counter
  counter.interval = 123
  counter.reset = () => {}
  return counter
}

let c = getCounter()

// 接口继承类
class Control {
  private state: any
}

// 该接口继承了类的私有成员
interface SelectableControl extends Control {
  select()
}

// 类要实现SelectableControl必须先继承Control
class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}
