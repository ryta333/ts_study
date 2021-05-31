function identity<T>(arg: T): T {
  return arg
}

let output1 = identity<string>('mystring1')
let output2 = identity('mystring2')

function loggingIdentity<T>(arg: T[]): T[] {
  arg.length && console.log(arg.length)
  return arg
}

interface GenericIdentityFn<T> {
  (arg: T): T
}

// 使用时指定泛型类型
let myIdentity: GenericIdentityFn<number> = identity
