'use strict';

const BinarySearchTree = require('./bst');

function isItBst(BinarySearchTree) {
  console.log('========== I RAN ==============');
  const key = BinarySearchTree.key;
  const left = BinarySearchTree.left;
  const right = BinarySearchTree.right;

  console.log('CURR KEY: ', key);

  ///break case
  if (!BinarySearchTree) {
    console.log('========= EMPTY NODE =========', key);
    return true;
  }

  //if i have both
  if (left && right) {
    if (key > BinarySearchTree.left.key && key < BinarySearchTree.right.key) {
      console.log('========== TRAVERSING BOTH =========', key);
      return isItBst(BinarySearchTree.left) && isItBst(BinarySearchTree.right);
    }

    else {
      console.log('key > left && key < right came out false');
      return false;
    }
  }
  //if i dont have a left
  else if (right) {
    if(key < BinarySearchTree.right.key) {
      console.log('========== TRANVERSING RIGHT =========', key);
      return isItBst(BinarySearchTree.right);
    }
    else {
      console.log('======= KEY < right.key');
      return false;
    }
  }

  //if i dont have a right
  else if(left) {
    if(key > BinarySearchTree.left.key) {
      console.log('========== TRANVERSING LEFT =========', key);
      return isItBst(BinarySearchTree.left);
    }
    else {
      console.log('======= KEY > right.left');
      return false;
    }
  }

  //if i dont have any; the leaf node!
  else if(!BinarySearchTree.right && !BinarySearchTree.left) {
    console.log('========== ITS A BULBASAUR =========', key);
    return true;
  }

}


const main = () => {
  const test = new BinarySearchTree();
  test.key = 1;

  test.left = new BinarySearchTree();
  test.left.key = 0;

  test.right = new BinarySearchTree();
  test.right.key = 4;

  test.right.right = new BinarySearchTree();
  test.right.right.key = 3;
  // test.insert(6);
  // test.insert(4);
  // test.insert(2);
  // test.insert(5);
  // test.insert(9);
  // test.insert(2);
  // test.insert(5);
  // test.insert(7);
  // test.insert(9);

  console.log('is a BST?', isItBst(test));
  // console.log(test);
};

main();
