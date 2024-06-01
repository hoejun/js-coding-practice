function solution(n, m) {
  const arr = []
  const leftNum = Math.min(n, m)
  const rightNum = Math.max(n, m)
  let max = 0
  let min = 0

  if (rightNum % leftNum !== 0 && leftNum % 2 !== 0 && rightNum % 2 !== 0) {
    max = 1
  } else {
    for (let index = 1; index <= leftNum; index++) {
      if (leftNum % index === 0 && rightNum % index === 0) arr.push(index)
    }
    max = Math.max(...arr)
  }

  if (rightNum % leftNum === 0) {
    min = rightNum
  }
  else {
    const s1 = leftNum / max
    const s2 = rightNum / max
    min = max * s1 * s2
  } 

  return [max, min];
}

const n = 24
const m = 18
console.log(solution(n, m))