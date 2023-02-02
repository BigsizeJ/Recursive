const fibIterative = (n) => {
  if (n === 0) return [0];
  if (n === 1) return arr;
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};

const fibRecursive = (n) => {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const arr = fibRecursive(n - 1);
  return [...arr, arr[n - 2] + arr[n - 3]];
};

const MergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = MergeSort(arr.slice(0, mid));
  const right = MergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (leftArr, rightArr) => {
  const arr = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    const minIndex = leftArr[0] < rightArr[0] ? leftArr : rightArr;
    const sortedArr = minIndex.shift();
    arr.push(sortedArr);
  }

  return arr.concat(leftArr, rightArr);
};

console.log(fibIterative(8));
console.log(fibRecursive(8));

console.log(MergeSort([531, 1245, 12, 551, 64]));
