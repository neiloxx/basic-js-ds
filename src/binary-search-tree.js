const { Node } = require('../extensions/list-tree.js');
/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  rootNode = null;
  right = null;
  left = null;

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;

    while (currentNode) {
      if (currentNode.data === newNode.data) {
        return;
      }

      if (currentNode.data > newNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.data > data ? currentNode.left : currentNode.right;
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.data > data ? currentNode.left : currentNode.right;
    }
    return null;
  }

  remove(data) {
    const removeNode = (root, data) => {
      if (!root) return root;

      if (data < root.data) {
        root.left = removeNode(root.left, data);
      } else if (data > root.data) {
        root.right = removeNode(root.right, data);
      } else {
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }

        root.data = this.min(root.right);
        root.right = removeNode(root.right, root.data)
      }

      return root;
    }

    this.rootNode = removeNode(this.rootNode, data);
  }

  min(currentNode = this.rootNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data || null;
  }

  max(currentNode = this.rootNode) {
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data || null;
  }
}

module.exports = {
  BinarySearchTree
};
