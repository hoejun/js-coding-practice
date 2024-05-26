function solution(a, b) {
  const arr = []
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (i === j) arr.push(a[i]*b[j])
    }
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}

const a = [1, 2, 3, 4]
const b = [-3, -1, 0, 2]

solution(a, b)