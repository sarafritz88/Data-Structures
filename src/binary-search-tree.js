class BinarySearchTree {
  /* Do not modify the constructor */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /* Inserts the given value
  Make sure the rules of a binary search
  tree are being adhered to */
  insert(value) {
      const node = new BinarySearchTree(value);
      const addtoTree = (val) => {
          if (val.value >= value) {
              if (!val.left) return val.left = node;
              return addtoTree(val.left);
          }
          if (val.value <= value) {
              if (!val.right) return val.right = node;
              return addtoTree(val.right);
          }
      };
      return addtoTree(this);
  }

  /* Traverses the tree until either the
  target value has been found in the true
  or the entire tree has been searched.
  Returns true or false accordingly */
  contains(target) {
      let find = false;
      const search = (node) => {
          if (node.value === target) {
              find = true;
              return;
          } else if (node.value > target && node.left) search(node.left);
          else if (node.value < target && node.right) search(node.right);
      };
      search(this);
      return find;
  }

  /* Returns the maximum value in the tree 
  Should not remove the max value from the tree */
  getMax() {
    let max = this.value;
    let node = this;
    while (node.right) {
      node = node.right;
      max = node.value;
    }
    return max;
  }

  /* Traverses the tree in a 'vertical' fashion,
  from parent to child. Executes the given callback
  on each visited tree node */
  depthFirstForEach(cb) {
      const values = [];
      const each = (node) => {
          cb(node.value);
          if (node.left) each(node.left);
          if (node.right) each(node.right);
      };
      each(this);
  }

  /* Traverses the tree in a 'horizontal' fashion,
  from sibling to sibling. Executes the given callback
  on each visited tree node */
  breadthFirstForEach(cb) {
      const queue = [];
      let node;
      queue.push(this);
      while (queue.length) {
          node = queue.shift();
          cb(node.value);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
  }
}

module.exports = BinarySearchTree;