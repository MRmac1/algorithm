/**
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
 * 重复出现的子串要计算它们出现的次数。
 *
 * 00110011
 *
 * 输出有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
 */

var myPow2 = function(x, n) {
  const result = [];
  x = n < 0 ? 1/x : x;
  n = Math.abs(n);

  for (let i = 0; i <= n; i++) {
      if (i === 0) {
        result[0] = 1;
      } else {
        result[i] = result[i - 1] * x
      }
  }
  return result[n]
};

// console.log(myPow2(0.00001, 2147483647))


/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 *
 * "abaccdeff" -> b
 */



const firstUniqChar = function(s) {
  const strLength = s.length;
  for (let i = 0; i < strLength; i++) {
    const char = s[i];
    let count = 0
    for (let j = 0; j < strLength; j++) {
      if (char === s[j]) {
        count ++;
      }
    }
    if (count === 1) {
      return char;
    }
  }
}

console.log('firstUniqChar', firstUniqChar('abaccdeff'));
