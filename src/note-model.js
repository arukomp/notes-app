(function(exports){
  var noteIdCounter = 0;

  function Note(note){
    this.id = noteIdCounter++;
    this._note = note;
  }

  Note.prototype.showNote = function() {
    return this._note;
  };

  exports.Note = Note;

})(this);
