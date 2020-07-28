// 递归 & 分治算法

// 划分田地问题，长为1680，宽为640，怎么划分相等且每块面积最大
const divideSquare = function(width, height) {
  if (width === height) {
    return width;
  } else {
    if (width > height) {
      width = width - height;
    } else {
      height = height - width;
    }
    return divideSquare(width, height);
  }
}

console.log('divideSquare length', divideSquare(3, 4))

// sum([1, 2, 3, 6]) 求和使用递归
const tobeRecuedArr = [1, 2, 3, 6];

const recuSum = function(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    const [fristValue, ...rest] = arr;
    return fristValue + recuSum(rest);
  }
}

console.log('RecuedArr', recuSum(tobeRecuedArr))

// 递归找出列表最大数

const tobeMaxFoundArr = [100, -1, 300, 458, 1023]

const findArrMaxmiumRecu = function(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    const [firstValue, ...rest] = arr;
    const restMaxmium = findArrMaxmiumRecu(rest);
    if (firstValue > restMaxmium) {
      return firstValue;
    } else {
      return restMaxmium;
    }
  }
}

console.log('findArrMaxmium', findArrMaxmiumRecu(tobeMaxFoundArr))

