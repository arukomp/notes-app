(function(exports) {
  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      document.write('<span style="color:red;font-weight:bold;">X</span> ');
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    document.write('<span style="color:green;font-weight:bold;">.</span> ');
  }

  function isFalse(assertionToCheck) {
    if (assertionToCheck) {
      document.write('<span style="color:red;font-weight:bold;">X</span> ');
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsy");
    }
    document.write('<span style="color:green;font-weight:bold;">.</span> ');
  }

  exports.assert = {
    isTrue: isTrue,
    isFalse: isFalse
  };
})(this);
