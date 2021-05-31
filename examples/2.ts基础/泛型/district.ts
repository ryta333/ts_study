interface Lengthwise {
  length: number
}

// 泛型约束 给T约束
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

// keyof 检查T中的key
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

function create<T>(c: { new (): T }): T {
  return new c()
}
