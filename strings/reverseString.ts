/* function reverseString(s: string[]): void {
    s.reverse()
}; */ //68ms

function reverseString(s: string[]): void {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let aux = s[start];
    s[start] = s[end];
    s[end] = aux;
    start++;
    end--;
  }
} // 75ms

reverseString(["h", "e", "l", "l", "o"]);
