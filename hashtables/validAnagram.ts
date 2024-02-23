function isAnagram(s: string, t: string): boolean {
  let mapS = new Map<string, number>();
  let mapT = new Map<string, number>();

  if (s.length != t.length) {
    return false;
  }

  for (let char of s) {
    if (mapS.has(char)) {
      mapS.set(char, mapS.get(char)! + 1);
    } else {
      mapS.set(char, 1);
    }
  }

  for (let char of t) {
    if (mapT.has(char)) {
      mapT.set(char, mapT.get(char)! + 1);
    } else {
      mapT.set(char, 1);
    }
  }

  for (let char of s) {
    if (mapS.get(char) != mapT.get(char)) {
      return false;
    }
  }

  return true;
}
