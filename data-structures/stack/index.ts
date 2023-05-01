class Stack<T> {
  private items: T[]

  constructor () {
    this.items = []
  }

  push (item: T) {
    this.items.unshift(item)
  }

  pop () {
    return this.items.shift()
  }

  peek () {
    return this.items[0]
  }

  isEmpty () {
    return this.items.length === 0
  }
}