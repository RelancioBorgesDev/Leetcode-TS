function twoSum(numbers: number[], target: number): number[] {
  let p1 = 0;
  let p2 = 1;
  let size = numbers.length;
  while (p1 < size && p2 < size) {
    let sum = numbers[p1] + numbers[p2];

    if (sum == target) {
      return [p1 + 1, p2 + 1];
    } else {
      p2++;
    }

    if (p2 == size) {
      p1++;
      p2 = p1 + 1;
    }
  }

  return [];
}
//1000 ms solution



//52 ms sol
function twoSumOptimal(numbers: number[], target: number): number[] {
    let size = numbers.length;
    let p1 = 0;
    let p2 = size - 1;
    
    while(p1 < p2){
        let sum = numbers[p1] + numbers[p2];

        if(sum == target){
            return [p1+1, p2+1]
        }else if(sum > target) {
            p2--;
        }else if(sum < target){
            p1++;
        }
    }

    return [];
};