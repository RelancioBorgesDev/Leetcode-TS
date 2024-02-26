function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n == 0) {
    return true;
  }

  let count = 0;
  let fbedLastEl = flowerbed.length - 1;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] == 0 &&
      (i == 0 || flowerbed[i - 1] == 0) &&
      (i === fbedLastEl || flowerbed[i + 1] == 0)
    ) {
      count++;

      if (count == n) {
        return true;
      }
      i++;
    }
  }
  return false;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 4));
