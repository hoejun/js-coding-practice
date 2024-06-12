function solution(s) {
  let _s = s.split('')
  let str = s
  for (let index = 0; index < _s.length; index++) {
    // console.log(_s.splice(index, 2));
    // console.log(object);
    // console.log('크기', index);
    // console.log(_s[index]);
    // console.log(_s[index + 1]);
    if (_s[index] === _s[index + 1]) {
      // console.log('들어옴');
      // console.log(_s.splice(index, 2));
      _s.splice(index, 2)
      console.log(_s);
      index--
    }
    // for (let j = 1; j < _s.length; j++) {
    //   if (_s[index] !== _s[j]) break
    //   else 
    // }
  }
  console.log(_s);
  const result = _s ? 0 : 1
  // console.log(result);
  var answer = -1;

  return answer;
}

// const s = 'cdcd'
const s = 'baabaa'

solution(s)