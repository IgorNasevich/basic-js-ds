const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root1 = null; 
  root() {
    return this.root1;
  }

  add( data ) {
    if(this.root1 === null){
      this.root1 = {
        data : data,
        left : null,
        right: null
      }
    }
    else{
      let tempNode = this.root1;
      let child = null;
      do {
        
        if(tempNode.data < data){
          child = tempNode.right;
        }
        else if(tempNode.data > data){
          child = tempNode.left;
        }
        else return;
        if(child !==null){
          tempNode = child;
        }
      } while (child !== null);

      if(tempNode.data < data){
        tempNode.right ={
          data : data,
          left : null,
          right: null
        };
      }
      else if(tempNode.data > data){
        tempNode.left = {
          data : data,
          left : null,
          right: null
        };
      }
    }
  }

  has( data ) {
    if(this.root1 === null){
      return false;
    }
    if(this.root1.data === data){
      return true;
    }
    
    let tempNode = this.root1;
    let nextNode = null;
    do {
      
      if(tempNode.data < data){
        nextNode = tempNode.right;
      }
      else if(tempNode.data > data){
        nextNode = tempNode.left;
      }
      else return true;
      if(nextNode !== null){
        tempNode = nextNode;
      }
    } while (nextNode !== null);
    return false;
  }

  find( data ) {
   
  }

  remove( data ) {
    
  }

  min() {
    
  }

  max() {
   
  }
}

// const tree = new BinarySearchTree();
// tree.add(2);
// tree.add(3);
// tree.add(4);
// console.log(tree.root().data);

module.exports = {
  BinarySearchTree
};