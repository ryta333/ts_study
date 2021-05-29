// 实例接口
interface ClockInterface {
  tick()
}

// 构造器结构
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick toc')
  }
}

let digital = createClock(DigitalClock, 12, 40)
let analog = createClock(AnalogClock, 4, 24)
