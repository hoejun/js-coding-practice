// split함수와 toLowerCase(), toUpperCase()함수를 사용하여 문제 풀이
function solution(s){
  const isScount = s // 'pPoooyY'
  const words = isScount.split('') // 'p p o o o y y'
  let pCount = 0
  let yCount = 0
  words.forEach(element => {
    const el = element.toLowerCase()
    if (el === 'p') pCount++
    if (el === 'y') yCount++
  });

  if (pCount === yCount || pCount === 0 && yCount === 0) return true
  else return false
}

const isBool = solution('PPPyy')
console.log(isBool)