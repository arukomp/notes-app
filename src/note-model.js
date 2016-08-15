(function(exports){
  function Note(){
    _notes = []
  };

  Note.prototype.addNote = function(noteItem) {
    _notes.push(noteItem);
  };


  Note.prototype.showNote = function() {
    return _notes[0];
  }

  exports.Note = Note;


})(this);
