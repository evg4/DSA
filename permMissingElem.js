//took me 10 mins

function solution(A) {
  function compare(a, b) {
    return a - b;
  }

  const sorted = A.sort(compare);
  let i = 0;
  while (sorted[i] === i + 1) {
    i++;
  }
  return i + 1;
}

const test1 = [2, 3, 1, 5]; //4
const test2 = [7, 6, 4, 3, 2, 1]; //5
const test3 = [2, 4, 3, 6, 5]; //1
console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
