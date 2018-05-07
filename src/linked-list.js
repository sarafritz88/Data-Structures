class LinkedList {
  /* Do not modify the constructor */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /* Add the given value to the tail
  of the list. The `tail` pointer
  should be updated accordingly */
  addToTail(value) {
      const node = {
          value,
          next: null
      };
      if (this.head === null) {
          this.head = node;
          this.tail = node;
      } else {
          this.tail.next = node;
          this.tail = node;
      }
  }


  /* Remove the list's `head` value 
  The `head` pointer should be updated
  accordingly */
    removeHead() {
        if (this.head === null) {
            return null;
        }
        if (this.head === this.tail) {
            const value = this.head.value;
            this.head = null;
            this.tail = null;
            return value;
        }
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

  /* Searches the list for the given value
  Returns true or false accordingly */
  contains(value) {
      if (this.head === null) {
          return false;
      }
      const searchLinkedList = (node) => {
          if (node.value === value) {
              return true;
          }
          if (node.next === null) {
              return false;
          }
          return searchLinkedList(node.next);
      };
      return searchLinkedList(this.head);
  }

  /* Finds and returns the maximal value
  of all the values in the list */
  getMax() {
      let store = null;
      let currentNode = this.head;
      while (currentNode) {
          if (currentNode.value > store) store = currentNode.value;
          currentNode = currentNode.next;
      }
      return store;
  }
}

module.exports = LinkedList;