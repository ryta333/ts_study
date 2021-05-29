let input = [1, 2];
function func([first, second]: number[]) {
  console.log(first);
  console.log(second);
}
// func(input);

let o = {
  a: "foo",
  b: 12,
  c: "bar",
};

// 对象也可以使用扩展运算符
let { a, ...b } = o;
// console.log(b);

// 重命名
let { a: newNameA, b: newNameB } = o;
// console.log(newNameA, newNameB);

// 默认值
function keepWholeObjec(wholeObject: { a: string; b?: number }) {
  let { a, b = 1001 } = wholeObject;
}

// 必须包含a; b 则有默认值 不是必要的
function fn({ a, b = 0 } = { a: "" }): void {
  
}
