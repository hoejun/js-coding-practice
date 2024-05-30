// 효율성 문제...
function solution(s) {
  const arr = s.split('')
  // let isBool = true
  let counter = 0
  // 첫번째 ), 마지막이 (, 크기가 홀수이면 무조건 false
  if (arr[0] === ')' || arr[arr.length - 1] === '(' || arr.length % 2 === 1) {
    // isBool = false
    return false
  } else {
    // let countA = 0
    // let countB = 0
    // const newArr = [...arr]
    // for (let i = 0; i < arr.length; i++) {
    // shift()는 배열의 탐색이 필요하므로 최대 시간 복잡도가 된다. 데이터양이 많아질수록 런타임에 영향이 있음 1000이하일때만 사용
    // shift()와 pop() 메소드는 시간 복잡도가 엄청 증가한다.
    // if (arr[newArr.length - i] === ')') {
    //   arr.pop()
    //   countA++
    // } else {
    //   arr.pop()
    //   countB++
    // }
    // }
    // if (countA !== countB) isBool = false
    for (let char of arr) {
      if (char === '(') counter++
      else counter--

      // 여기서 괄호 닫힘이 올바르지 않은것으로 끝이 났는데, return을 하지 않으면
      // 뒤에 괄호 검사는 의미가 없어서 불필요한 반복을 계속 하게 된다.
      // if (counter < 0) isBool = false
      if (counter < 0) return false // 반복문에서 return false은 불필요한 반복문을 줄일 수 있다.
    }
  }
  // return isBool = false
  return counter === 0;
}
// const s = '()))((()'
const s = '()())(()'
// ()())(()
// const s = '()())('

console.log(solution(s))