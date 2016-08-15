(function(exports){
  function Note(note){
    _notes = []
    _notes.push(note);
  };

  Note.prototype.showNote = function() {
    return _notes[0];
  }

  exports.Note = Note;


})(this);
