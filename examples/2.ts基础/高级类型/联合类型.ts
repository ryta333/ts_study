// string | number 联合类型 其中之一
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number got ${padding}`)
}

interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

function getSmallPet(): Fish | Bird {
  return {} as Fish
}

// 使用is进行类型保护 会在下文if之后的块级作用域中生效
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim() !== undefined
}

let pet = getSmallPet()
pet.layEggs()
// pet.swim() // 不可直接调用不存在两者中的方法
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

class Bird2 {
  fly() {
    console.log('bird fly')
  }
  layEggs() {
    console.log('bird lay eggs')
  }
}

class Fish2 {
  swim() {
    console.log('fish swim')
  }
  layEggs() {
    console.log('fish lay eggs')
  }
}

function getRandomPet(): Fish | Bird {
  return Math.random() > 0.5 ? new Bird2() : new Fish2()
}

let pet2 = getRandomPet()

// instanceof类型保护
if (pet instanceof Bird2) {
  pet.fly()
}

if (pet instanceof Fish2) {
  pet.swim()
}
