'use strict';

const BinarySearchTree = require('./bst');

//Find Third Largest in tree function

//Find max -> go right all the ways
// If there's 1 left of max -> add to counter (starts 1); Becomes 2 at 7;
//Count increases every time you go left of max, or go up to parent. 
// Repeat left side process if count still isn't 3 (for 3rd largest);

function findThirdLargest(BinarySearchTree) {
  let max = BinarySearchTree._findMax();
  let parent = max.parent;
  let counter = 1;

  while (counter < 3) {
    if (max.left) {
      max = max.left;
      counter++;
    }
    else {
      max = parent;
      parent = max.parent;
      counter++;
    }
  }
  return max.key;
}


const main = () => {
  const test = new BinarySearchTree();
  test.insert(3);
  test.insert(5);
  test.insert(7);
  test.insert(1);
  test.insert(4);
  test.insert(6);
  findThirdLargest(test);
};

main();