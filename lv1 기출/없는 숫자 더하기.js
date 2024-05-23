function solution(numbers) {
  let num = 0
  let sum = 0

  // 1~9까지의 합
  for (let index = 0; index <= 9; index++) {
    num+=index
  }
  numbers.forEach(i => {
    sum+=i
  })
  const result = num - sum
  return result;
}

const numbers = [5,8,4,0,6,7,9]

solution(numbers)