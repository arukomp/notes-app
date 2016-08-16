(function(exports){
  function Note(note){
    this._notes = note;
  }

  Note.prototype.showNote = function() {
    return this._notes;
  };

  exports.Note = Note;

})(this);
