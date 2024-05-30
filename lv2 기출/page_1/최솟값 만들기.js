function solution(A,B){
  let newA = [...A]
  let newB = [...B]
  var answer = 0;
  const arr = []
  let sum = 0
  for (let index = 0; index < A.length; index++) {
    const num = []
    for (let j = 0; j < B.length; j++) {
      const a = A.splice(index, 1)
      const b = B.splice(j, 1)
      const mul = a*b
      num.push(mul)
    }
    arr.push(num)
    // const min = Math.min(...newA)
    // const max = Math.max(...newB)
    // console.log(min)
    // console.log(max)
    // const mul = min*max
    // console.log('곱', mul)
    // sum+=mul
    // console.log(sum)
    // newA.shift()
    // newB.shift()
    // const mul = []
    // for (let j = 0; j < B.length; j++) {
    //   mul.push(A[index]*B[j])
    // }
    // arr.push(mul)
  }
  console.log(arr)
  // console.log(arr[0])
  // let min = []
  // for (let i = 0; i < arr.length; i++) {
  //   const minValue = Math.min(...arr[i])
  //   min.push(minValue)
  // }
  // console.log('최소', min)
  // console.log(arr)
  // console.log(sum)

  return answer;
}

const A = [1,4,2]
const B = [5,4,4]

solution(A, B)