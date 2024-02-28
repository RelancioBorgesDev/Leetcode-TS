function isValid(s: string): boolean {
  let map = new Map<string, string>();
  let stack = [];
  map.set(")", "(");
  map.set("}", "{");
  map.set("]", "[");

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(" || s.charAt(i) === "[" || s.charAt(i) === "{") {
      stack.push(s.charAt(i));
    } else {
      let el = stack.pop();
      if (el !== map.get(s.charAt(i))) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
