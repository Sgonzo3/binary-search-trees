// stack using array
class Node {
  constructor(item) {
    this.val= item;
    this.left= null;
    this.right= null;
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

    while(pointer < array.length){
      if(pointer.left)array.push(pointer.left);
      if(pointer.right)array.push(pointer.right);
      front++;
    }

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


console.log(myTree, myTree.root.preOrder(), myTree.root.inOrder(), myTree.root.postOrder(), myTree.root.breadthFirst());
