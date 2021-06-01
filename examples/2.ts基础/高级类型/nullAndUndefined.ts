let s = 'foo'
s = null
let sn: string | null = 'bar'
sn = null
sn = undefined

// --strictNullChecks

function f(x: number, y?: number) {
  return x + (y || 0)
}

f(1, 2)
f(1)
f(1, undefined)
f(1, null) // 编译报错

function broken(name: string | null): string {
  function postfix(epither: string) {
    //  name! 告诉编译器不为null 否则编译报错
    return name!.charAt(0) + '. the ' + epither
  }

  name = name || 'Bob'
  return postfix(name)
}

// type定义类型, 必须是右边三种
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      // ...
    } else if (easing === 'ease-out') {
    } else if (easing === 'ease-in-out') {
    } else {
    }
  }
}

let button = new UIElement()
button.animate(0, 0, 'ease-in')
// button.animate(0, 0, 'uneasy') // 报错 uneasy不属于Easing中的其中一种 
