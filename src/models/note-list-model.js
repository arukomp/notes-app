(function(exports) {

  function NoteList() {
    this._allNotes = [];
  }

  NoteList.prototype.getAllNotes = function () {
    return this._allNotes;
  };

  NoteList.prototype.addNote = function (text) {
    var note = new Note(text);
    this._allNotes.push(note);
  };

  exports.NoteList = NoteList;

})(this);
