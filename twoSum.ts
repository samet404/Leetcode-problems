/**
 * SOLVED - https://leetcode.com/problems/two-sum/
 */
function twoSum(nums: number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] + nums[i] === target) return [i, j]
      }
    }
  }
  