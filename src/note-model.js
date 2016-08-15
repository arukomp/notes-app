(function(exports){
  function Note(note){
    _notes = note;
  };

  Note.prototype.showNote = function() {
    return _notes;
  }

  exports.Note = Note;


})(this);
