var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  for (var i = 0; i < this.children.length; i++) {
    if ( this.children[i].value === target ) {
      return true;
    } 
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
