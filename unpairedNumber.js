//took 48 mins
//66% total score - timed out for larger arrays

function solution(A) {
  let i = 0;
  let j = 1;
  while (i < A.length && j < A.length) {
    console.log(`i=${i} and j=${j}`);
    if (A[i] === A[j]) {
      A[i] = true;
      A[j] = true;
      i++;
      while (i === true) {
        i++;
      }
      j = i + 1;
      while (j === true) {
        j++;
      }
    } else {
      j++;
      if (j === A.length) {
        i++;
        j = i + 1;
      }
    }
  }
  const unpaired = A.find((num) => num !== true);
  return unpaired;
}
