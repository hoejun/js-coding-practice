const fin = (num, n) => {
  let sum = 0
  for (let index = num; index <= n; index++) {
    sum+=index
    if (sum > n) return
    if (sum === n) {
      return sum
    }
  }
}
function solution(n) {
  let count = 0
  
  for (let index = 1; index <= n; index++) {
    const sum = fin(index, n)
    if (sum === n) {
      count++
    }
  }
  return count;
}

const n = 14

solution(n)