function solution(s) {
  const filterE = s.split('').filter(i => i === 'e')
  const strToNum = Number(s)
  const size = [4, 6]
  let isBool = false
  if (filterE.length === 0) {
    if (size.some(i => i === s.length) && Number.isInteger(strToNum)) {
      isBool = true
    }
  }
  return isBool;
}

const s = '3e33' // js에서 문자e 뒤에 오는 숫자는 문자가 아닌 지수로 인식

solution(s) 