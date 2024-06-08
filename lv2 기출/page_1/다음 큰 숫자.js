function solution(n) {
  let num = n
  let result = n + 1
  let two = []
  let resulTwo = []
  let count = 0
  let count2 = 0
  
  // 2진수 구하기
  while (count < 1) {
    if (Math.floor(num/2) !== 0) {
      const s = num % 2
      two.push(s)
      num = Math.floor(num/2)
    } else {
      two.push(num)
      count++
    }
  }
  let countResult = 0
  two.forEach(i => {
    if (i === 1) countResult++
  })

  let countReulst2 = 0
  let des = 0
  while (count2 < 1) {
    if (Math.floor(result/2) !== 0) {
      const s = result % 2
      resulTwo.push(s)
      result = Math.floor(result/2)
    } else {
      resulTwo.push(result)
      resulTwo.forEach(i => {
        if (i === 1) countReulst2++
      })
      if (countReulst2 === countResult) {
        count2++
      } else {
        n++
        result = n
        des = n
        countReulst2 = 0
        resulTwo = []
      }
    }
  }
  console.log(des);
  return des;
}

const n = 15

solution(n)