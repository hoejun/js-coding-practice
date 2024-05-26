// reduce 활용
function solution(arr) {
  let sum = 0
  let average = 0
  if (arr.length <= 100) {
    sum = arr.map(Number).reduce((acc, cur) => acc + cur, 0)
    average = sum / arr.length
  }
  return average
}

const arr = [1,2,3,4]

solution(arr)