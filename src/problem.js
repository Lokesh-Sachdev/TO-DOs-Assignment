//Problem 1: Linked List is Cyclic or not ?

class Solution {
  detectLoop(head) {
    let slow = head;
    let fast = head;
    while (slow && fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        return true;
      }
    }
    return false;
  }
}

//Problem 2: Longest Palindrome from the given string ?

function printSubStr(str, low, high) {
  for (let i = low; i <= high; ++i) console.log(str[i]);
}

function longestPalindrome(str) {
  let maxLength = 1,
    start = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let flag = 1;

      for (let k = 0; k < (j - i + 1) / 2; k++)
        if (str[i + k] != str[j - k]) flag = 0;

      if (flag != 0 && j - i + 1 > maxLength) {
        start = i;
        maxLength = j - i + 1;
      }
    }
  }

  printSubStr(str, start, start + maxLength - 1);
}
