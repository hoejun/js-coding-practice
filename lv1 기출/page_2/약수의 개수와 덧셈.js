function solution(left, right) {
  const rangeNum = right - left + 1
  const newArr = Array(rangeNum).fill(left).map((x, y) => x + y) // Array().fill() 지정된 크기만큼 배열을 채워나가는 것
  const arr = []
  for (let index = 0; index < newArr.length; index++) {
    let count = 0
    for (let j = 1; j <= newArr[index]; j++) { // 약수 구하기
      if (newArr[index] % j === 0) count++ // 약수 개수
    }
    if (count % 2 === 0) arr.push(newArr[index])
    else arr.push(-newArr[index])
  }
  const answer = arr.reduce((acc, cur) => acc + cur, 0)

  return answer;
}

const left = 24
const right = 27

solution(left, right)