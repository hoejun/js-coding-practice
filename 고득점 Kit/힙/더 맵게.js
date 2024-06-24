const getScovil = () => {
  
}
function solution(scoville, K) {
  scoville.sort((a, b) => a - b)
  let scovilleData = 0
  let sum = 0
  let count = 0
  // sort 필요
  const s = scoville.map((i, index) => {
    if (index === 0 && scoville[index] < K) {
      scovilleData = scoville[index]
    } else {
      sum = scoville[index + 1]
    }

    if (scoville[index + 1] <= K - 1) {
      if (scovilleData > scoville[index + 1]) {
        scovilleData = scoville[index + 1] + (scovilleData * 2)
      } else {
        scovilleData = scovilleData + (scoville[index + 1] * 2)
      }
      count++
    } else {
      return scoville[index + 1]
    }
    console.log(scovilleData);
    if (scovilleData >= K) {
      return scovilleData
    } else {
      return 0
    }
  })
  console.log(s);
  console.log(count);
  if (count === 0) return -1
  else return count
}

const scoville = [1, 2, 3, 9, 10, 12]
const K = 10

solution(scoville, K)