// reverse(), map 함수 활용
function solution(n) {
  const arr = String(n).split('').reverse().map(Number)

  return arr;
}

const n = 12345

solution(n)