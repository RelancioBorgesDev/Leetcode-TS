function strStr(haystack: string, needle: string): number {
  const needleLength = needle.length;

  if (needleLength === 0) {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    const newS = haystack.substring(i, i + needle.length);
    if (newS === needle) {
      return i;
    }
  }

  return -1;
}

//59ms

console.log(strStr("leetcode", "leet"));
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("", ""));
