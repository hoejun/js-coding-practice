const getTwo = (num) => {
  return num / 2
}
const getThree = (num) => {
  return num * 3 + 1
}
function solution(num) {
  if (num === 1) return 0

  let tmp = num
  let n = 0

  while(n <= 500) {
    n++
    if (tmp % 2 === 0){
      tmp = getTwo(tmp)
    } else if (tmp % 2 === 1) {
      tmp = getThree(tmp)
    }
    if (tmp === 2) {
      n++
      break
    }
  }
  if (tmp / 2 !== 1) {
    return -1
  }
  return n;
}

const num = 1

console.log(solution(num))