(function(exports){
  var noteIdCounter = 0;

  function Note(note){
    this.id = noteIdCounter++;
    this._notes = note;
  }

  Note.prototype.showNote = function() {
    return this._notes;
  };

  exports.Note = Note;

})(this);
