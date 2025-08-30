/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) return s

    let currentChar = s.length - 1
    let largestResult = s[0]

    loop1: while (true) {
        if (currentChar < 0 || currentChar < largestResult.length - 1) break

        loop2: for (let i = 0; i <= currentChar; i++) {
            if (currentChar - i < largestResult.length - 1) {
                currentChar--
                continue loop1
            }

            console.log('currentChar: ', currentChar)
            const splitedText = s.substring(0 + i, currentChar + 1)
            console.log('splitedText: ', splitedText)
            if (splitedText === splitedText.split('').reverse().join('')) {
                largestResult = splitedText
            }
        }

        currentChar--
    }

    return largestResult
};
