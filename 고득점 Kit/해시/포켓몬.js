function solution(nums) {
  const len = Math.floor(nums.length / 2)
  const uniqueArr = [...new Set(nums)]
  let result = 0
  if (len < uniqueArr.length) result = len
  else result = uniqueArr.length

  return result
}

const nums = [3, 1, 2, 3]

solution(nums)