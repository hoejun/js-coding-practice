// 루트 값 sqrt, 제곱 pow, isInteger 정수 판별
function solution(n) {
  Math.sqrt(n)
  let num = 0
  if (Number.isInteger(Math.sqrt(n))) {
    num = Math.pow(Math.sqrt(n) + 1, 2)
  } else {
    num = -1
  }
  return num;
}
const n = 3