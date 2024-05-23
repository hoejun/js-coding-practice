function solution(arr, divisor) {
  const element = []
  arr.forEach(i => {
    if (i % divisor === 0) element.push(i)
  })
  // const sortData = element.length === 0 ? element.push(-1) : element.sort((a, b) => a - b)
  // console.log(element.push(-1))의 반환값인 1은 단순히 배열의 새로운 길이를 나타내기 때문에 1로 출력된다...
  if (element.length === 0) {
    element.push(-1)
  } else {
    element.sort((a, b) => a - b)
  }
  return element;
}

const arr = [3, 2, 6]
const divisor = 10

solution(arr, divisor)