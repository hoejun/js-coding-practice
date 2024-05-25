// Math.max 배열을 비교할때는 ...tmp
function solution(arr) {
  const answer = [];
  const minValue = Math.min(...arr)
  for(let i = 0; i <= arr.length; i++) {
    if (minValue < arr[i]) {
      answer.push(arr[i])
    }
  }
  if (answer.length === 0) answer.push(-1)

  return answer;
}

const arr = [10]

solution(arr)