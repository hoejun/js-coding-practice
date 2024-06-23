function solution(arr) {
  const newArr = []
  // splice를 사용하여 원본 배열을 제거하면 첫 인덱스부터 다시 탐색해야하기 때문에 시간 복잡도에 안 좋음
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== arr[index + 1]) newArr.push(arr[index])
  }
  return newArr
}

// const arr = [1,1,3,3,0,1,1]
const arr = [4,4,4,3,3]

solution(arr)