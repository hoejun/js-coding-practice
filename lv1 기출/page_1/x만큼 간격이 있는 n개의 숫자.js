function solution(x, n) {
  const arr = []
  for (let index = 1; index <= n; index++) {
    arr.push(x * index)
  }
  return arr;
}

const x = -4
const n = 2

solution(x, n)