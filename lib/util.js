exports.isPrimitiveType = function(obj) {
  return 
    obj instanceof Number ||
    obj instanceof String ||
    obj instanceof Boolean;
}

// why no hasOwnProp here?
exports.merge = function(a, b) {
  if (a && b) {
    for (var key in b) {
      a[key] = b[key];
    }
  }
  return a;
}