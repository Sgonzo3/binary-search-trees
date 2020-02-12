class Node {
  constructor(item) {
    this.val = item;
    this.left = null;
    this.right = null;
  }
  insert(item) {
    if(item > this.val){
      if(this.right){
        this.right.insert(item);
      } else {
        this.right = new Node(item);
      }
    } else {
      if(this.left){
        this.left.insert(item);
      } else {
        this.left = new Node(item);
      }
    }
  }
  contains(item) {
    // console.log(this.val, item, this.val === item)
    if(this.val === item){
      return true;
    }
    if(item > this.val){
      if (this.right) return this.right.contains(item);
    } else {
      if (this.left) return this.left.contains(item);
    }
    return false;
  }
  preOrder(array = []){
    array.push(this.val);

    if(this.left) {
      this.left.preOrder(array);
    }
    if(this.right) {
      this.right.preOrder(array);
    }
    return array;
  }
  inOrder(array = []){
    if(this.left) {
      this.left.inOrder(array);
    }
    array.push(this.val);
    if(this.right) {
      this.right.inOrder(array);
    }
    return array;
  }
  postOrder(array = []) {
    if(this.left) {
      this.left.postOrder(array);
    }
    if(this.right) {
      this.right.postOrder(array);
    }
    array.push(this.val);
    return array;
  }
  breadthFirst(array = [this], pointer = 0, temp) {
    // array.push(this.left.val);
    //
    // if(this.left) {
    //   array.push(this.left.val);
    //   this.left.breadthFirst(array);
    // }
    //
    // if(this.right) {
    //   array.push(this.right.val);
    //   this.right.breadthFirst(array);
    // }
    // return array;

    // while(pointer < array.length){
    //   if(pointer.left)array.push(pointer.left);
    //   if(pointer.right)array.push(pointer.right);
    //   front++;
    // }
  }
  depthFirstSearch(){
    
  }
  findMaximunHeight(){

  }

  findHeight(){

  }
  isBinarySearchTree(){

  }

}

class BNS {
  constructor(item) {
    this.root = new Node(item);
  }
}

const myTree = new BNS(7);
myTree.root.insert(5);
myTree.root.insert(3);
myTree.root.insert(10);
myTree.root.insert(2);
myTree.root.insert(12);


console.log(myTree);
console.log(myTree.root.preOrder());
console.log(myTree.root.inOrder());
console.log(myTree.root.postOrder());
console.log(myTree.root.breadthFirst());

// Alternative BST
class BST{
  constructor(item){
    this.val = item;
    this.left = null;
    this.right - null;
  }
  insert(item){
    if(this.val === undefined) return this.val = new Node(item);
    (item > this.val)
      ? (this.right) 
        ? this.right.insert(item)
        : this.right = new BST(item)
      : (this.left)
        ? this.left.insert(item)
        : this.left = new BST(item)
    return this;
  }
  contains(item){
    if(item === this.val ) return true;
    if(item > this.val){
      if (this.right) return this.right.contains(item);
    } else {
      if (this.left) return this.left.contains(item);
    }
    return false;
  }
  preOrderSearch(array = []){
    array.push(this.val);
    if(this.left) {
      this.left.preOrderSearch(array);
    }
    if(this.right) {
      this.right.preOrderSearch(array);
    }
    return array;
  }
  inOrderSearch(array = []){
    if(this.left) {
      this.left.inOrderSearch(array);
    }
    array.push(this.val);
    if(this.right) {
      this.right.inOrderSearch(array);
    }
    return array;
  }
  postOrderSearch(array = []){
    if(this.left) {
      this.left.postOrderSearch(array);
    }
    if(this.right) {
      this.right.postOrderSearch(array);
    }
    array.push(this.val);
    return array;
  }
  breadthFirstSearch(array = [this], pointer = 0, temp){
    // while (pointer < array.length) {
    //   if(array[pointer].left){
    //     array.push(array[pointer].left);
    //   }
    //   if(array[pointer].right){
    //     array.push(array[pointer].right);
    //   }
    //   pointer++;
    // }
    // return array.map( node => node.val);
  }
}

// Alternative BST Tests
myBST = new BST();
console.log(myBST);
console.log(myBST.insert(21));
console.log(myBST);
console.log(myBST.insert(22));
console.log(myBST.insert(23));
console.log(myBST.insert(24));
console.log(myBST);
console.log(myBST.insert(0));
console.log(myBST.insert(-11));
console.log(myBST.insert(-45));
console.log(myBST);
console.log(myBST.contains(22));
console.log(myBST.contains(22222));
console.log(myBST.preOrderSearch());
console.log(myBST.inOrderSearch());
console.log(myBST.postOrderSearch());
console.log(myBST.breadthFirstSearch());

/* notes
tree with n nodes will have max n-1 edges

nodes can only point to child not siblings or their own parent

only single root node

Tree Terminology
Root = first node of the tree,
Child = node pointed to by parent in direction away from root
Sibling = any node on same level of tree
Leaf = nodes at the end of a branch, have no children
edge = connection between parent and child
binary trees = each node has max 2 children
binary search tree = node values are sorted and ordered  n<parent left, n>parent right



*/
class CleanNode {
  constructor(item) {
    this.val = item;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert = (item, nodeChecked = this.root) => {
    if (!nodeChecked) return this.root = new CleanNode(item);
    if(item < nodeChecked.val) {
      if(nodeChecked.left){
        nodeChecked = nodeChecked.left;
        this.insert(val, nodeChecked);
      } else {
        nodeChecked.left = new CleanNode(item);
        return this.root;
      }
    } else {
      if(nodeChecked.right){
        nodeChecked = nodeChecked.right;
        this.insert(val, nodeChecked);
      } else {
        nodeChecked.right = new CleanNode(item);
        return this.root;
      }
    }
  }

  insertWithLoop = (item) => {
    let nodeChecked = this.root;

    if (!nodeChecked) return this.root = new CleanNode(item);

    while(nodeChecked) {
      if(item < nodeChecked){
        if(nodeChecked.left) {
          nodeChecked = nodeChecked.left;
        } else {
          nodeChecked.left = new CleanNode(item);
          return this.root;
        }
      } else {
        if(nodeChecked.right) {
          nodeChecked = nodeChecked.right;
        } else {
          nodeChecked.right = new CleanNode(item);
          return this.root;
        }
      }
    }
  }

  find = (item, nodeChecked = this.root) => {
    if(!nodeChecked) return false;
    if(nodeChecked.val === item) return true;

    if(item < nodeChecked.val) {
      if(nodeChecked.left) {
       nodeChecked = nodeChecked.left;
       return this.find(item, nodeChecked);
      }
    } else {
      if(nodeChecked.right) {
        nodeChecked = nodeChecked.right;
        return this.find(item, nodeChecked);
      }
    }

    return false;
  }

  findWithLoop = (item) => {
    let nodeChecked = this.root;
    if(!nodeChecked) return false;

    while(nodeChecked) {
      if(nodeChecked.val === item) return true;

      if(item < nodeChecked.val){
        if(nodeChecked.left) {
          nodeChecked = nodeChecked.left;
        } else {
          return false;
        }
      } else {
        if(nodeChecked.right) {
          nodeChecked = nodeChecked.right;
        } else {
          return false;
        }
      }
    }
  }

  preOrder(answer = [], nodeChecked = this.root) {
    answer.push(nodeChecked.val);
    if(nodeChecked.left) {
      this.preOrder(answer, nodeChecked.left);
    }
    if(nodeChecked.right) {
      this.preOrder(answer, nodeChecked.right);
    }
    return answer;
  }

  preOrderWithLoop = () => {

  }

  inOrder(answer = [], nodeChecked = this.root) {
    if(nodeChecked.left) {
      this.preOrder(answer, nodeChecked.left);
    }
    answer.push(nodeChecked.val);
    if(nodeChecked.right) {
      this.preOrder(answer, nodeChecked.right);
    }
    return answer;
  }

  inOrderWithLoop() {

  }

  postOrder(answer = [], nodeChecked = this.root) {
    if(nodeChecked.left) {
      this.postOrder(answer, nodeChecked.left);
    }
    if(nodeChecked.right) {
      this.postOrder(answer, nodeChecked.right);
    }
    answer.push(nodeChecked.val);
    return answer;

  }

  postOrderWithLoop() {

  }
}

let myBinarySearchTree = new BinarySearchTree();
console.log('initialized', myBinarySearchTree); 
console.log('add 5', myBinarySearchTree.insert(5)); 
console.log('add 10', myBinarySearchTree.insert(10)); 
console.log('add 2', myBinarySearchTree.insert(2)); 
console.log('find 10', myBinarySearchTree.find(10));
console.log('find 11000', myBinarySearchTree.find(11000));
console.log('add 100', myBinarySearchTree.insertWithLoop(100));
console.log('find 100', myBinarySearchTree.findWithLoop(100));
console.log('find 11000', myBinarySearchTree.findWithLoop(11000));
console.log('preOrder', myBinarySearchTree.preOrder());
console.log('preOrder', myBinarySearchTree.inOrder());
console.log('postOrder', myBinarySearchTree.postOrder());