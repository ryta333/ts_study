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
