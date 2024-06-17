function solution(participant, completion) {
  const hashMap = new Map();

  // 참가자 이름을 해시 맵에 저장
  for (const name of participant) {
    hashMap.set(name, (hashMap.get(name) || 0) + 1);
  }
  // // 완료자 이름을 해시 맵에서 제거
  for (const name of completion) {
    hashMap.set(name, hashMap.get(name) - 1);
  }

  // // 해시 맵에서 값이 1인 참가자 이름 반환
  for (const [name, count] of hashMap) {
    if (count === 1) {
      return name;
    }
  }
}

const participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
const completion = 	["josipa", "filipa", "marina", "nikola"]

console.log(solution(participant, completion))