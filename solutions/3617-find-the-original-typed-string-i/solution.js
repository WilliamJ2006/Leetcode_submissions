/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let possible = 1;
    const obj = {};
    // for (let i = 0; i < word.length; i++){
    //     if (obj[i]){
    //         obj[i]++;
    //     } else {
    //         obj[i] = 0;
    //     }
    // }
    const arr = word.split('');
    arr.forEach(letter => obj[letter] = (obj[letter] || 0) + 1)
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]] > 1){
            if (arr[i] === arr[i+1]){
                obj[arr[i]]--;
                possible++;
            }
        }
    }
    return possible;
};
