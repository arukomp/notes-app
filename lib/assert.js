(function(exports){
  function isTrue(assertToCheck){
    if(!assertToCheck){
      throw new Error("Assertion failed: " + assertToCheck + "is not truthy");
    }
  }

  function isFalse(assertToCheck){
    if(!assertToCheck){
      throw new Error("Assertion failed " + assertToCheck + "is not falsely");
    }
  }

  exports.isTrue = isTrue;
  exports.isFalse = isFalse;
  
})(this);
