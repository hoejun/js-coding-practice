// 1 카운터
const getCharCount = (char) => {
  let count = 0
  char.forEach(i => {
    if (i === 1) count++
  })
  return count
}
// 2진수 구하기
const getLow = (n) => {
  let count = 0
  let num = n
  let two = []
  while (count < 1) {
    if (Math.floor(num / 2) !== 0) {
      const s = num % 2
      two.push(s)
      num = Math.floor(num / 2)
    } else {
      two.push(num)
      count++
    }
  }
  return two
}
function solution(n) {
  let result = 0
  let lowNum = getLow(n)
  let countResult1 = getCharCount(lowNum)
  result = ++n
  let highNum = getLow(result)
  let countResult2 = getCharCount(highNum)
  let isBool = true

  while (isBool) {
    if (countResult1 === countResult2) isBool = false
    else {
      result = ++n
      highNum = getLow(result)
      countResult2 = getCharCount(highNum)
    }
  }
  return result
}

const n = 78

solution(n)