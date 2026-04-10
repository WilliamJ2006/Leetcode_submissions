function isMonotonic(nums: number[]): boolean {
    let increasing = false;
    let decreasing = false;
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] < nums[i+1]) {
            increasing = true;
        } 
        if(nums[i] > nums[i+1]) {
            decreasing = true;
        }
    }
    return increasing && decreasing ? false : true;
};
