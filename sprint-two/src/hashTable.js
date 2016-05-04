

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if ( tuple[0] === k ) {
      var oldTupleVal = tuple[1];
      tuple[1] = v;
      return oldTupleVal;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);

  return undefined;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if ( tuple[0] === k ) {
      return tuple[1];
    }
  }
  return undefined;
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if ( tuple[0] === k ) {
      bucket.splice(i, 1);
      return tuple[1];
    }
  }

  return undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


