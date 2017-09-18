/**
 * Name:       Blair Muraoka
 * Assignment: E26
 */

const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

function sumRecursion(nums) {
  const temp = nums.slice();
  if (temp.length === 0) {
    return 0;
  }
  return temp.pop() + sumRecursion(temp);
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) {
    return memo + num;
  }, 0);
}

console.log(sumFor(testNums));
console.log(sumWhile(testNums));
console.log(sumRecursion(testNums));
console.log(sumTheSimpleWay(testNums));
