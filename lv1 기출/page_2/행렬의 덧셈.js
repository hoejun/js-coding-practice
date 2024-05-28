
function solution(arr1, arr2) {
  const answer = []
  for (let i = 0; i < arr1.length; i++) {
    const arr3 = []
    for (let j = 0; j < arr1[i].length; j++) {
      arr3.push(arr1[i][j] + arr2[i][j])
    }
    answer.push(arr3)
  }
  return answer;
}

const arr1 = [[1, 2], [2, 3]]
const arr2 = [[3, 4], [5, 6]]
// const arr1 = [[1],[2]]
// const arr2 = [[3],[4]]

solution(arr1, arr2)