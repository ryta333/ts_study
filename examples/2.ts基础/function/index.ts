// 完整表达式
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y
}

// 可选,默认参数
function buildName(firstName = 'Bob', lastName?: string): string {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}

// 传入undefined 默认使用默认参数
let result1 = buildName(undefined)
console.log(result1)
