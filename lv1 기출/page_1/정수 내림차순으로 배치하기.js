// sort, concat 활용
function solution(n) {
  const arr = String(n).split('').sort((a, b) => b-a)
  let so = ''
  arr.forEach(i => {
    so = so.concat(i)
  })

  return Number(so);
}

const n = 118372

solution(n)