function firstUniqChar(s: string): number {
  const sArr = s.split("");
  const map = new Map<string, number>();

  for (let str of sArr) {
    if (map.has(str)) {
      map.set(str, map.get(str)! + 1);
    } else {
      map.set(str, 1);
    }
  }

  for (let i = 0; i < sArr.length; i++) {
    if (map.get(sArr[i]) === 1) {
      return i;
    }
  }

  return -1;
}

//110ms

console.log(firstUniqChar("loveleetcode"));
