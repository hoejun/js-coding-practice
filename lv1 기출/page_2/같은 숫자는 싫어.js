function solution(arr) {
  const answer = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== answer[answer.length -1]) answer.push(arr[index])
  }

  return answer;
}

const arr = [1, 1, 3, 3, 0, 1, 1]

solution(arr)