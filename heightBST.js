'use strict';

const BinarySearchTree = require('./bst');

function findMaxHeight(BinarySearchTree) {

  ///break case
  if(!BinarySearchTree) {
    return 0;
  }

  //go to the right

  const rightHeight =  1 + findMaxHeight(BinarySearchTree.right);
  console.log('went to the right', rightHeight);
  //go to the left
  const leftHeight = 1 + findMaxHeight(BinarySearchTree.left);
  console.log('went to the left', leftHeight);

  return rightHeight > leftHeight ? rightHeight : leftHeight;
}






/*     1
  -1 --- 7
 22  3  6  9
            11


*/


const main = () => {
  const test = new BinarySearchTree();
  test.insert(3);
  // test.insert(1);
  // test.insert(4);
  // test.insert(6);
  // test.insert(9);
  // test.insert(2);
  // test.insert(5);
  // test.insert(7);
  // test.insert(9);


  console.log('height is', findMaxHeight(test));
  console.log(test);
};

main();
