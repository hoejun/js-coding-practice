function solution(s) {
  const str = Number(s)
  if (s.length >= 1 && s.length <= 5) {
    const splitStr = s.split('')

    if (splitStr[0] === '0') return
    else return str
  }  
}

const s = '-1234'

console.log(solution(s))