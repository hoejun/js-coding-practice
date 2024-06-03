function solution(t, p) {
  const pSize = p.length
  const pArr = t.split('')
  let count = 0

  pArr.forEach((i, index) => {
    const strPSize = t.substr(index, pSize)

    if (strPSize.length !== pSize) return
    if (Number(strPSize) <= p) count++
  })

  return count;
}
const t = "3141592"
const p = "271"

solution(t, p)