//took me 15 mins

function solution(A) {
  function compare(a, b) {
    return a - b;
  }
  const sorted = A.sort(compare);
  let pointerA = 0;
  let pointerB = 1;
  while (sorted[pointerA] === sorted[pointerB]) {
    sorted[pointerA] = true;
    sorted[pointerB] = true;
    pointerA++;
    pointerA++;
    pointerB++;
    pointerB++;
  }
  return sorted[pointerA];
}

const test1 = [9, 3, 9, 3, 9, 7, 9]; //7
const test2 = [4, 8, 90, 8, 4, 90, 6]; //6
const test3 = [7, 1, 9, 9, 1, 8, 8]; //7
console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
