function extend<T, U>(fir: T, sec: U): T & U {
  let res = {} as T & U

  for (let id in fir) {
    res[id] = fir[id] as any
  }

  for (let id in sec) {
    if (!res.hasOwnProperty(id)) {
      res[id] = sec[id] as any
    }
  }

  return res
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(): void
}

class ConsoleLogger implements Loggable {
  log() {}
}

let jim = extend(new Person('jim'), new ConsoleLogger())

jim.name
jim.log()
