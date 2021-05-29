// 定义接口
// 只要存在相应的属性 并且类型相同 则不会报错
interface LabelledValue {
  // 结构
  label: string
}

// 给 labelledObj 传入接口类型
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj = { size: 10, label: "Size 10 Object" }
printLabel(myObj)

