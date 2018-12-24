// singly linked list


class Node {
  constructor(value, next=null, previous=null){
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.current = null;
    this.length = 0;
  }
  addNode(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      this.current = this.head;
    } else {
      let temp = this.current;
      temp.next = node;
      node.previous = temp;
      this.current = node;
    }
    this.length++;
  }
  deleteNode(value){

  }
  reverseList(){
    if(this.head === null){
      return;
    }
    let currentNode = this.head;
    let newNext = null;
    let newPrevious = null;
    while(currentNode !== null){
      newPrevious = currentNode.next;
      currentNode.next = newNext;
      currentNode.previous = newPrevious;
      newNext = currentNode;
      currentNode = newPrevious;
    }
    this.head = newNext;
  }
  removeDuplicates(){
    if(!this.head || !this.head.next){
      return "No duplicates found - empty or single element linked list";
    }
    let current;
    let next;
    let nodes = {};
    current = this.head;
    next = current.next;
    nodes[current.value] = true;
    while(next){
      let data = next.value;
      if(nodes[data]){
        current.next = next.next;
        this.length--;
      } else {
        nodes[data] = true;
        current = next;
      }
      next = next.next;
    }
  }
}

let newList = new LinkedList;
newList.addNode("item1");
newList.addNode("item2");
newList.addNode("item3");
newList.removeDuplicates(); // no duplicates yet
newList.addNode("item2"); // added a duplicate
newList.removeDuplicates(); // new duplicate removed 
