class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront(data) {
    let new_node = new Node(data);
    if (this.head == null) {
      this.head = new_node;
      return this;
    }
    new_node.next = new_node;
    this.head = new_node;
    return this;
  }
  removeFront() {
    this.head = this.head.next;
    return this.head;
  }
  front() {
    return this.head.data;
  }
}
let sll = new SLL();
sll.addFront(1).addFront(2).addFront(3);
console.log(sll);
sll.removeFront();
console.log(sll);
console.log(sll.front());
