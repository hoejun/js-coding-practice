function solution(n) {
  const arr = []
  let i = n

  while (i) {
    const three = i % 3
    arr.push(three)
    i = parseInt(i / 3)
  }
  const sum = arr.reduce((acc, cur, index) => {
    index++
    return acc + cur * Math.pow(3, arr.length - index)
  }, 0)

  return sum;
}

const n = 45

solution(n)