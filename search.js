// 查找算法

// 二分普通
const binarySearch = function(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];
    if (guess === target) {
      return mid;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

// 二分递归
const binarySearchRecu = function(arr, low, high, target) {
  const mid = Math.floor((low + high) / 2);
  const guess = arr[mid];

  if (guess === target) {
    return mid;
  }

  if(low >= high) {
    return null
  }

  if (guess > target) {
    return binarySearchRecu(arr, low, mid, target)
  } else {
    return binarySearchRecu(arr, mid + 1, high, target)
  }
}

const beSortedList = [1, 3, 4, 5, 7, 10, 19];
console.log(binarySearch(beSortedList, 10));
console.log(binarySearchRecu(beSortedList, 0, beSortedList.length, 10));


//
