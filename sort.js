/**
 * file 排序算法练习
 *
 */
const tobeSortedArr = [1, 3, 2, 8, 100, 101, 4, 2];

/** 冒泡排序 非递归 */
const bubbleSort = function(arr) {
  const swap = function(i) {
    let tmp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = tmp;
  }

  // 外层决定循环多少遍
  for(var i = 0; i < arr.length - 1; i ++) {
    for(var j = 0; j < arr.length - 1; j ++) {
      if (arr[j] < arr[j + 1]) {
        swap(j)
      }
    }
  }
  return arr
}

console.log('bubbleSort', bubbleSort([...tobeSortedArr]));


const bubbleSortRecu = function(arr, count) {
  if (count === 0) {
    return arr;
  } else {
    for(var j = 0; j < arr.length - 1; j ++) {
      if (arr[j] < arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    count --;
    return bubbleSortRecu(arr, count);
  }
}

console.log('bubbleSortRecu', bubbleSortRecu([...tobeSortedArr], tobeSortedArr.length));


/** 选择排序 - 所有集合里选出最大元素，*/

const sortedByMax = function(arr) {
  const newArr = [];
  const len = arr.length;

  const findMaxmium = function (arr) {
    let maxmiumNum = arr[0];
    let maxmiumIndex = 0;

    for (const i in arr) {
      if (arr[i] > maxmiumNum) {
        maxmiumNum = arr[i];
        maxmiumIndex = i;
      }
    }
    return maxmiumIndex;
  }

  for (let i = 0; i < len; i ++) {
    const maxmiumIndex = findMaxmium(arr);
    newArr.push(arr[maxmiumIndex]);
    // 构造除最大数外的 arr
    arr.splice(maxmiumIndex, 1)
  }

  return newArr;
}

console.log('sortedByMax', sortedByMax([...tobeSortedArr]))

/** 选择排序 递归版本*/
const sortByFindMaxRecu = function(arr, count, sortedArr = []) {
  if (count === 0) {
    return sortedArr;
  } else {
    const findMaxmium = function (arr) {
      let maxmiumNum = arr[0];
      let maxmiumIndex = 0;

      for (const i in arr) {
        if (arr[i] > maxmiumNum) {
          maxmiumNum = arr[i];
          maxmiumIndex = i;
        }
      }
      return maxmiumIndex;
    }

    const maxmiumIndex = findMaxmium(arr);
    sortedArr.push(arr[maxmiumIndex]);
    arr.splice(maxmiumIndex, 1);
    count --;

    return sortByFindMaxRecu(arr, count, sortedArr)
  }
}

console.log('sortByFindMaxRecu', sortByFindMaxRecu([...tobeSortedArr], tobeSortedArr.length))

/** 快速排序 */
const quickSort = function(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    const baseValue = arr[0]; // 基准值
    const leftArr = [];
    const rightArr = [];

    for(var i = 1; i < arr.length; i++) {
      if (arr[i] > baseValue) {
        rightArr.push(arr[i]);
      }
      if (arr[i] <= baseValue) {
        leftArr.push(arr[i]);
      }
    }

    return [...quickSort(rightArr), baseValue, ...quickSort(leftArr)]
  }
}

console.log('quickSort', quickSort([...tobeSortedArr]));
