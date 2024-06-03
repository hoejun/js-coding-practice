const intToParse = (arr, total, count) => {
  const _arr = arr
  let _total = total
  let _count = count

  // for (let i = 0; i < _arr.length; i++) {
  //   if (_arr[i] === '0') {
  //     _arr.splice(i, 1) // 배열을 재구성하기 때문에 시간복잡도가 높다.
  //     i--
  //     _count++
  //   }
  // }

  // 역순으로 순회
  // 역순으로 순회하면 splice로 인한 인덱스 변화가 반복문의 순회에 영향을 주지 않음
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === '0') {
      arr.splice(i, 1); // '0' 제거
      _count++;
    }
  }

  _total++

  if (_arr.length.toString(2) !== '1') {
    const s = _arr.length.toString(2).split('')
    // 재귀 호출 과정에서 반환값이 처리되지 않아서... 이 호출의 결과값이 어디에도 할당되지 않았기 때문에 total과 count값이 적절히 업데이트 되지 않았음..
    const result = intToParse(s, _total, _count)
    _total = result[0]
    _count = result[1]
  }

  return [_total, _count]
}

function solution(s) {
  const arr = s.split('')
  let total = 0
  let count = 0
  const result = intToParse(arr, total, count)

  return result;
}

const s = "110010101001"

solution(s)