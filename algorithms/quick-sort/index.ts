const quickSort = (array: number[]): number[] => {
  if (array.length <= 1) return array

  let pivotIndex = Math.floor(array.length / 2)
  let pivot = array.splice(pivotIndex, 1)[0]
  let left: number[] = []
  let right: number[] = []

  array.forEach((item: number) => {
    if (item <= pivot) {
      left.push(item)
    } else {
      right.push(item)
    }
  })

  return [...quickSort(left), pivot, ...quickSort(right)]
}

export default quickSort
