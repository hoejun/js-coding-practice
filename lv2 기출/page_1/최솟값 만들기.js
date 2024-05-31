function solution(A,B){
  // const arrA = []
  // const arrB = []
  // 이걸 왜 생각 못했을까...
  A.sort((a,b) => a-b)
  B.sort((a,b) => b-a)

  // 기존의 로직은 배열의 최소값을 구하여 배열을 재정의
  // for (let i = 0; i < A.length; i++) {
  //   const a = Math.min(...A)
  //   if(A[i] === a){
  //     A.splice(i, 1)
  //     arrA.push(a)
  //     i--
  //     if (i === 0) i--
  //   }
  // }
  // 기존의 로직은 배열의 최대값을 구하여 배열을 재정의
  // for (let i = 0; i < B.length; i++) {
  //   const b = Math.max(...B)
  //   if (B[i] === b) {
  //     B.splice(i, 1)
  //     arrB.push(b)
  //     i--
  //     if (i === 0) i--
  //   }
  // }
  // 이렇게 로직을 구현 할 필요가 없는데.....
  
  const result = A.reduce((acc, cur, index) => acc + (cur*B[index]), 0)
  return result;
}

const A = [1,4,2]
const B = [5,4,4]

solution(A, B)