// reduce 함수
function solution(n) {
  const arr = []
  if (!(0 <= n && n <= 3000)) return
  for (let index = 0; index <= n; index++) {
    if (n%index === 0) arr.push(index)
  }
  const sum = arr.reduce((acc, currentNumber) => acc + currentNumber, 0)

  return sum
}

const n = 5