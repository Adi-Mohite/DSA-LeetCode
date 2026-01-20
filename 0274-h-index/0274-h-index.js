/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);

    let n = citations.length;

    for (let i = 0; i < n; i++) {
        let h = n - i;   // number of papers left
        if (citations[i] >= h) {
            return h;
        }
    }
    return 0;
};
