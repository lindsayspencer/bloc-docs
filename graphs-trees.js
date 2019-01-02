// each node can have a left child and a right child
// resource 1: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
// resource 2: https://medium.com/algorithm-problems/distance-between-2-nodes-in-a-bst-8be78f71871e

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  createNode(data){
    let newNode = new Node(data);
    if(this.root === null){
      this.root = newNode;
    } else {
      this.addLeaf(this.root, newNode)
    }
  }
  addLeaf(node, newNode){
    if(newNode.data < node.data){
      if(node.left === null){
        node.left = newNode;
      } else {
        this.addLeaf(node.left, newNode);
      }
    } else {
      if(node.right === null){
        node.right = newNode;
      } else {
        this.addLeaf(node.right, newNode);
      }
    }
  }
  findNode(data){
    let node = this.root;
    let doesContain = false;
    if(!node){
      return "Tree is empty";
    }
    while(node){
      if(data === node.data){
        console.log("Node found");
        doesContain = true;
        return doesContain;
      } else if(data > node.data){
        console.log(data + " is greater than " + node.data);
        node = node.right;
      } else if(data < node.data){
        console.log(data + " is less than " + node.data);
        node = node.left;
      } else {
        return "error";
      }
    }
    return doesContain;
  }
  getDistanceBetweenNodes(n1, n2){
    let distance = 0;
    let lca = this.findLCA(n1, n2);
    if(lca){
      return (this.getDistanceFromLCA(lca, n1, distance) + this.getDistanceFromLCA(lca, n2, distance));
    } else {
      lca = this.root;
      let pathOne = this.getDistanceFromLCA(lca, n1, distance);
      let pathTwo = this.getDistanceFromLCA(lca, n2, distance);
      return Math.max(pathOne, pathTwo) - Math.min(pathOne, pathTwo);
    }
  }
  getDistanceFromLCA(ancestor, node, distance){
    while(ancestor){
      if(ancestor.data === node){
        return distance;
      } else if ((node == ancestor.left) || (node == ancestor.right)){
        distance = distance + 1;
        return distance;
      } else if (node < ancestor.data){
        distance = distance + 1;
        ancestor = ancestor.left;
      } else {
        distance = distance + 1;
        ancestor = ancestor.right;
      }
    }
  }
  findLCA(n1, n2){
  let lca = null;
  if(!this.root){
    return "Tree is empty";
  } else if(n1 === this.root.data || n2 === this.root.data){
    lca = this.root;
    return lca;
  } else {
    let node = this.root;
    while(node !== null){
      if(n1 > node.data && n2 > node.data){
        node = node.left;
      } else if(n1 < node.data && n2 < node.data){
        node = node.right;
      } else if((n1 < node.data && n2 > node.data) || (n1 > node.data && n2 < node.data)){
        lca = node;
        return lca;
      }  else {
          return lca;
      }
    }
  }
 }
}


let newTree = new BinarySearchTree();
newTree.createNode(8);
newTree.createNode(3);
newTree.createNode(10);
newTree.createNode(1);
newTree.createNode(6);
newTree.createNode(14);
newTree.createNode(13);
newTree.createNode(4);
newTree.createNode(7);
