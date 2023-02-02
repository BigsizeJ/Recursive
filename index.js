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

console.log(fibIterative(8));
console.log(fibRecursive(8));
