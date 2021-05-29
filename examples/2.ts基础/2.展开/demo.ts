// 对象展开
// 后面的会覆盖前面的
let defaults = {
  food: "spicy",
  price: "$10",
  ambiance: "noisy",
}

let search = { ...defaults, food: "rich" }
console.log(search)
