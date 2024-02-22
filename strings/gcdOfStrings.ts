function gcdOfStrings(str1: string, str2: string) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const gcdLength = gcd(str1.length, str2.length);

  return str1.substring(0, gcdLength);
}

console.log(
  gcdOfStrings(
    "TAUXXTAUXXTAUXXTAUXXTAUXX",
    "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
  )
);
