/*initial implementation. 
I had a quick look at some previous exercises as a reminder.
I finished this in 30 mins. */

const isPalindrome = function (x) {
  let string = x.toString();
  if (string.length === 1) {
    return true;
  } else if (string.length % 2 === 0) {
    return false;
  } else {
    let leftPointer = 0;
    let rightPointer = string.length - 1;

    while (string[leftPointer] === string[rightPointer]) {
      leftPointer++;
      rightPointer--;
      if (leftPointer === rightPointer) {
        return true;
      }
    }
    if (leftPointer !== rightPointer) {
      return false;
    }
  }
};

console.log(isPalindrome(42424)); //true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(12154)); //false
console.log(isPalindrome(10)); //false
console.log(isPalindrome(0)); //true

/* follow up: can you solve it without converting the integer to a string?
Convert number to an array then use splice/slice? 
But that would take longer than current method
*/
