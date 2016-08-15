(function(exports) {

  function Note(text) {
    this.body = text || "";
  }

  Note.prototype.getBody = function () {
    return this.body;
  };

  exports.Note = Note;
  
})(this);
