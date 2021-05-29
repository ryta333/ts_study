// 函数类型接口
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
// mySearch = function (source: string, subString: string): boolean {
//   let result = source.search(subString)
//   return result > -1
// }

// 可以简写 , 只要能对应就行
// mySearch = function (src: string, sub: string): boolean {
//   let result = src.search(sub)
//   return result > -1
// }

// 也可以让 ts 自行检查
mySearch = function (src, sub) {
  let result = src.search(sub)
  return result > -1
}
