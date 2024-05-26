// 음수를 생각해라
function solution(num) {
  let s = ''
  if (num % 2 === 0 || num === 0) s = 'Even'
  else s = 'Odd'

  return s
}

const num = -3

console.log(solution(num))