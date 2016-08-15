(function(exports) {
  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }

  function isFalse(assertionToCheck) {
    if (assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsy");
    }
  }

  exports.assert = {
    isTrue: isTrue,
    isFalse: isFalse
  }
})(this)
