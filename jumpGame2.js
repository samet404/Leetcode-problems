/**
 * NOT SOLVED YET - https://leetcode.com/problems/jump-game-ii
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let minimumJump = 0
    let currentIndex = 0
    let maxIndexToJump = nums[0]
    
    loop1: while (true) {
        if (maxIndexToJump < 0) break
        for (let i = maxIndexToJump; maxIndexToJump >= 0 ; i--) {
            console.log('i: ', i)
            if (i === 0) break loop1

            if (currentIndex + i < nums.length && currentIndex + i > 0 ) {
                currentIndex = currentIndex + i
                maxIndexToJump = nums[currentIndex + i] 
                if (i < minimumJump || minimumJump === 0) minimumJump = i
                break
            }
        }

        console.log(minimumJump)
        console.log(currentIndex)
        console.log(maxIndexToJump)
        console.log("\n------\n")
    }

    return minimumJump
};