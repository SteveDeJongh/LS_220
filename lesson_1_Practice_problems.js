// LS 220 Introduction to Data Structures and Algorithms

// Practice Problems

// 1

function test(n) {
  for (let i = 0; i < n; i++) {
    console.log("Hello!");
  }
}

// time complexity: O(N), space complexitiy: O(1)

// 2

function test(n) {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      console.log("Hello!");
    }
  }
}


// Time Complexity: O(N^2), space complexity: O(1)

// 3

function test(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}

// Time complexitiy: O(N), space complexity: O(N)

// 4

function test(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      sum += 1;
    }
  }
  return sum;
}


// Time Complexity: O(N^2), space complexity: O(1)

// 5

function test(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
    for (let j = 0; j < n; j++) {
      result[i] += j;
    }
  }
  return result;
}

// Time complexity: O(N^2), space complexity: O(N)

// 6 

function test(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log("Hello!");
      }
    }
  }
}

// Time complexity: O(N^3), space complexity: O(1)

// 7 

function test(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(new Array(n).fill(0));
  }
  return result;
}

// Time complexity: O(N^2), space complexity: O(N^2)

// 8

function test(n) {
  for (let i = n; i >= 1; i /= 2) {
    console.log("Hello!");
  }
}

// Time complexity: O(logN) Space complexity: 0(1)

// 9

function test(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}

// Time complexity: O(N^2), space complexity: O(N^2)

// 10

function test(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      console.log("Hello!");
    }
  }
}

// Time complexity: O(NlogN), space complexity O(1)

// 11

function test(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 100; j++) {
      console.log("Hello!");
    }
  }
}

// Time complexity: O(N), space complexity: O(1)

// 12

function test(n, m) {
  for (let i = 0; i < n; i++) {
    console.log("Hello!");
  }
  for (let j = 0; j < m; j++) {
    console.log("World!");
  }
}

// Time complexity: O(N) + O(M), space complexity: O(1)

// 13

function test(n) {
  for (let i = 0; i < 2 * n; i++) {
    console.log("Hello!");
  }
}

// Time complexity: O(N), space complexity: O(1)

// 14

function test(n) {
  let count = 0;
  for (let i = n; i > 0; i /= 2) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}

// Time complexity: O(NlogN), space complexity: O(1);