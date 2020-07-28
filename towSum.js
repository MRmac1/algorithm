/**
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/two-sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

const twoSum = function(nums, target) {
    const matchTarget = function(leftNum, arr) {
      const targetRightNum = target - leftNum;
      for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        if (currentValue === targetRightNum) {
          console.log('[leftNum, targetRightNum]', [leftNum, targetRightNum]);
          return [leftNum, targetRightNum];
        }
      }
    }

    for (let index = 0; index < nums.length; index++) {
      const leftNum = nums[index];
      const restNums = nums.slice(index + 1, nums.length)
      if (matchTarget(leftNum, restNums)) {
        break;
      }
    }
};

const nums = [2, 7, 11, 15];
const target = 9;

twoSum(nums, target)
