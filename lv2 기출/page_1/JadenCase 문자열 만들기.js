function solution(s) {
  const arr = s.split(' ')
  const result = []

  arr.forEach(item => {
    const s1 = item.slice(0, 1).toUpperCase()
    const s2 = item.slice(1, item.length).toLowerCase()
    const sum = s1.concat(s2)

    result.push(sum)
  })
  return result.join(' ')
}

const s = "1HELLO 1Lee"

console.log(solution(s))