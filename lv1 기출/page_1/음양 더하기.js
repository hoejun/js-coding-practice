function solution(absolutes, signs) {
  const arr = []
  for (let i = 0; i < absolutes.length; i++) {
    for (let j = 0; j < signs.length; j++) {
      if (i === j) {
        const num = signs[j] ? 1 : -1
        arr.push(absolutes[i]*=num)
      }
    }
  }
  const sum = arr.reduce((acc, cur) => acc +cur, 0)
  return sum;
}

const absolutes = [1, 2, 3]
const signs = [false, false, true]
solution(absolutes, signs)