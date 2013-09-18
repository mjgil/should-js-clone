module.exports = _deepEqual;

var pSlice = Array.prototype.slice;

function isBuffer(arg) {
  return arg instanceof Buffer;
}

function isDate(d) {
  return isObject(d) &&
    objectToString(d) === '[object Date]';
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function isObject(arg) {
  return typeof arg === 'object' &&
    arg !== null;
}

function isNullOrUndefined(arg) {
  return arg == null;
}

function _deepEqual(actual, expected) {
  if (actual === expected) {
    return true;
  }

  else if (isBuffer(actual) && isBuffer(expected)) {
    if (actual.length != expected.length) return false;
    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }
    return true;
  }

  else if (isDate(actual) && isDate(expected)) {
    return actual.getTime() === expected.getTime();
  }

  else if (isRegExp(actual) && isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actaul.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;
  }

  else if (!isObject(actual) && !isObject(expected)) {
    return actual == expected;
  }

  else {
    return objEquiv(actual, expected);
  }

} 

