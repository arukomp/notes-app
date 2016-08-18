(function(exports) {

  var counter = 0;

  function Note(text) {
    this.text = text;
    this.id = counter++;
    console.log(this.id);
  }

  Note.prototype.getText = function() {
    return this.text;
  };

  exports.Note = Note;

})(this);
