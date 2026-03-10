/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let left = 0;
    let right = heights.length-1;
    let max = -Infinity;
    while(left < right) {
        const width = right-left;
        const height = Math.min(heights[left], heights[right]);
        const area = height*width;
        max = Math.max(max, area);
        if(heights[left] < heights[right]){
            left++;
        } else {
            right--;
        }
    }
    return max;
};
