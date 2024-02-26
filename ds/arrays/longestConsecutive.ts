function longestConsecutive(nums: number[]): number {
    if(nums.length == 0){
        return 0;
    }
    nums.sort((a, b) => a - b);

    let qnt = 1; 
    let max = 1; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            qnt++; 
            max = Math.max(max, qnt); 
        } else if (nums[i] !== nums[i - 1]) {
            qnt = 1; 
        }
    }
    
    return max;
}
