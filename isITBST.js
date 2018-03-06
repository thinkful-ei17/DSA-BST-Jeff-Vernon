const BinarySearchTree = require('./bst');

function isItBst(BinarySearchTree) {
  const key = BinarySearchTree.key;
  ///break case
  if (!BinarySearchTree) {
    return true;
  }

  if (key < BinarySearchTree.left.key & key > BinarySearchTree.right.key){
    console.log('traversing again!');
    isItBst(BinarySearchTree.left);
    isItBst(BinarySearchTree.right);
  }

  //running min & running findMaxHeight
  //changing!
  
  else {
    return false;
  }

}


const main = () => {
  const test = new BinarySearchTree();
  test.insert(3);
  test.insert(1);
  test.insert(4);
  test.insert(6);
  test.insert(9);
  test.insert(2);
  test.insert(5);
  test.insert(7);
  test.insert(9);


  console.log('is a BST?', isItBst(test));
  console.log(test);
};

main();
