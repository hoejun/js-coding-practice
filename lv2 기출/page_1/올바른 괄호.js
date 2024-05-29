// 효율성 문제...
function solution(s) {
  const arr = s.split('')
  let isBool = true
  // 첫번째 ), 마지막이 (, 크기가 홀수이면 무조건 false
  if (arr[0] === ')' || arr[arr.length - 1] === '(' || arr.length % 2 === 1) {
    isBool = false
  } else {
    let countA = 0
    let countB = 0
    const newArr = [...arr]

    for (let i = 1; i <= arr.length; i++) {
      // shift()는 배열의 탐색이 필요하므로 최대 시간 복잡도가 된다. 데이터양이 많아질수록 런타임에 영향이 있음 1000이하일때만 사용
      if (arr[arr.length - i] === '(') {
        newArr.pop()
        countA++
      } else {
        // if (arr[i] === ')'){
        newArr.pop()
        countB++
      }
    }
    if (countA !== countB) isBool = false
  }
  return isBool;
}

const s = '()()'
// const s = '()())('

console.log(solution(s))