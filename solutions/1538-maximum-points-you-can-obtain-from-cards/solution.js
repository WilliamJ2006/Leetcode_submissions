/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const totalPoints = cardPoints.reduce((sum, n) => sum + n, 0)
    const n = cardPoints.length

    if (n === k) return totalPoints

    let score = 0

    // take all k cards from the front
    for (let i = 0; i < k; i++) {
        score += cardPoints[i]
    }

    let best = score

    // give back the innermost front card, take the next back card
    for (let i = 0; i < k; i++) {
        score -= cardPoints[k-1-i] 
        score += cardPoints[n-1-i]
        best = Math.max(best, score)
    }

    return best
};
