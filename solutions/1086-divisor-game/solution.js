/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    let aliceTurn = true
    let i = 1;
    for(i; i < n; i++) {
        if(n%i === 0) {
            n = n-i;
            aliceTurn = !aliceTurn;
            i = 0;
        };
    };
    return !aliceTurn
};
