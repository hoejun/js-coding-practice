// Math 함수
function solution(a, b) {
  const maxValue = Math.max(a, b)
  const minValue = Math.min(a, b)
  let sum = 0
  for (let index = minValue; index <= maxValue; index++) {
    sum+=index  
  }
  return sum
}

const a = 3
const b = 3

solution(a,b)