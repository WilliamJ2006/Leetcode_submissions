/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let ret = 9999999;
    const first_possible = nums2[0] - nums1[0];
    const second_possible = nums2[0] - nums1[1];
    const third_possible = nums2[0] - nums1[2];
    // first
    let k = 0;
    let counter = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (k === nums2.length) {
            break;
        }
        const cur = nums1[i];
        const cur_k = nums2[k];
        if (cur_k - cur !== first_possible) {
            counter++;
            continue;
        }
        k++;
    }
    if (counter <= 2) {
        ret = Math.min(ret, first_possible);
    }
    // second
    k = 0;
    counter = 1;
    for (let i = 1; i < nums1.length; i++) {
        if (k === nums2.length) {
            break;
        }
        const cur = nums1[i];
        const cur_k = nums2[k];
        if (cur_k - cur !== second_possible) {
            counter++;
            continue;
        }
        k++;
    }
    if (counter <= 2) {
        ret = Math.min(ret, second_possible);
    }
    // third
    k = 0;
    counter = 2;
    for (let i = 2; i < nums1.length; i++) {
        if (k === nums2.length) {
            break;
        }
        const cur = nums1[i];
        const cur_k = nums2[k];

        if (cur_k - cur !== third_possible) {
            counter++;
            continue;
        }
        k++;
    }
    if (counter <= 2) {
        ret = Math.min(ret, third_possible);
    }
    return ret;
};
