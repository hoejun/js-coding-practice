function solution(number) {
  let count = 0
  // 3중 for문은 되도록이면 사용하지말자.. 로직 이해하기 힘들다..
  for (let index = 0; index < number.length; index++) {
    for(let j = index+1; j < number.length; j++) {
      for (let k = j+1; k < number.length; k++) {
        const num = number[index] + number[j] + number[k]
        if (num === 0) count++
      }
    }
  }
  return count;
}

const number = [-2, 3, 0, 2, -5]

solution(number)