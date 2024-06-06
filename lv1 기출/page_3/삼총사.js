function solution(number) {
  var answer = 0;
  let count = 0
  for (let index = 0; index < number.length; index++) {
    console.log(number[index]);
    console.log(number[index+1]);
    console.log(number[index+2]);
    console.log('합계');
    const num = number[index] + number[index + 1] + number[index + 2]

    if (num === 0) count++
    // for (let j = 0; j < array.length; index++) {
    //   const s = number[index] + 

    // }

  }
  console.log(count);
  return answer;
}

const number = [-2, 3, 0, 2, -5]

solution(number)