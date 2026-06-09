/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    if(suits.every(value => value === suits[0])) return 'Flush';
    const freq = {};
    for(const rank of ranks) freq[rank] = (freq[rank] || 0) + 1;
    let max = Math.max(...Object.values(freq));
    console.log(freq);
    if(max >= 3) return 'Three of a Kind';
    if(max === 2) return 'Pair';
    return 'High Card';
};
