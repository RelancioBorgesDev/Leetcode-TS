function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let p1 = 0;
  let p2 = 0;
  const charIndexMap: { [char: string]: number } = {};

  while (p2 < s.length) {
    const currentChar = s.charAt(p2);
    if (currentChar in charIndexMap && charIndexMap[currentChar] >= p1) {
      p1 = charIndexMap[currentChar] + 1;
    }
    charIndexMap[currentChar] = p2;
    maxLength = Math.max(maxLength, p2 - p1 + 1);
    p2++;
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("aab"));
