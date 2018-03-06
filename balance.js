'use strict';

const BinarySearchTree = require('./bst');

function isTreeBalanced(BinarySearchTree) {
  //break case
  if(!BinarySearchTree) {
    return 0;
  }

  //recursive case
  const rightHeight =  1 + isTreeBalanced(BinarySearchTree.right);
  const leftHeight = 1 + isTreeBalanced(BinarySearchTree.left);

  if (BinarySearchTree.parent === null) {
    if (rightHeight - leftHeight > 1 || leftHeight - rightHeight > 1) {
      return 'Tree is not balanced!';
    }
  
    else {
      return 'Tree is balanced!';
    }
  }

  return rightHeight > leftHeight ? rightHeight : leftHeight;
}

const main = () => {
  const test = new BinarySearchTree();
  // test.insert(3);
  // test.insert(1);
  // test.insert(4);
  // test.insert(6);
  // test.insert(9);
  // test.insert(2);
  // test.insert(5);
  // test.insert(7);

  test.insert(10);
  test.insert(5);
  test.insert(15);
  test.insert(3);
  test.insert(6);
  test.insert(12);
  test.insert(20);
  test.insert(2);
  // test.insert(1);
  // console.log(test);
  console.log(isTreeBalanced(test));
};

main();