// Math 최소값 최대값 활용
function solution(n) {
  const arr = []
  for (let index = 0; index < n; index++) {
    if (n % index === 1) {
      arr.push(index)
    }
  }
  const min = Math.min.apply(null, arr)
  return min
}

const n = 10

solution(n)