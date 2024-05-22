function solution(x) {
  const arrToNum = String(x).split('').map(Number).reduce((acc, cur) => acc + cur, 0)
  const haNum = x % arrToNum // 하샤드 수 나머지 구하기
  const isBool = haNum ? false : true

  return isBool;
}

const x = 11

console.log(solution(x))