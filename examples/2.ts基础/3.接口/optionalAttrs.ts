interface Square {
  color: string
  area: number
}

interface SquareConfig {
  // ? 表示可选
  color?: string
  width?: number

  // 索引名字为一个字符串, 为任何类型
  // [propName: string]: any
}

// 传入阐述为 SquareConfig 接口类型, 返回值为 Square 接口类型
function createSquare(config: SquareConfig): Square {
  let newSquare = { color: "white", area: 100 }
  config.color && (newSquare.color = config.color)
  config.width && (newSquare.area = config.width * config.width)
  return newSquare
}

let mySquare = createSquare({ color: "black" })
