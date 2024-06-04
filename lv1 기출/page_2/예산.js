function solution(d, budget) {
  let result = 0
  let _budget = budget
  let arr = [...d]

  for (let index = 0; index < d.length; index++) {
    const min = Math.min(...arr)
    const x = arr.find(i => i === min)
    for (let i = arr.length - 1; i>=0; i--) {
      if(arr[i] === x) {
        arr.splice(i, 1)
        break
      }
    }
    _budget -= x

    if (_budget < 0) return result
    result++
  }
  return result;
}

const d = [1,3,2,5,4]
const budget = 9

console.log(solution(d, budget))