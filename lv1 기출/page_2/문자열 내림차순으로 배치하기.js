function solution(s) {
  const arr = s.split('')
  const lowerData = []
  const upperData = []
  arr.forEach(i => {
    if (i === i.toUpperCase()) upperData.push(i)
    else lowerData.push(i)
  })
  // sort는 문자 정렬 시 기본값이 오름차순으로 정렬
  const newUpper = upperData.sort().reverse().join('')
  const newLower = lowerData.sort().reverse().join('')
  const sumArr = newLower.concat(newUpper)

  return sumArr;
}
const s = 'Zbcdefg'
// const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgHijklmnopqrstuvwxyz"
solution(s)