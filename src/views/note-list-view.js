(function(exports) {

  function NoteListView(noteList) {
    this._noteList = noteList;
  }

  NoteListView.prototype.getNoteList = function() {
    return this._noteList;
  };

  NoteListView.prototype.getHTML = function() {
    var htmlString = "<ul><li>";
    // this._noteList.getAllNotes().forEach(function(note) {
    //   htmlString += "<li>" + note.getBody() + "</li>";
    // });

    htmlString += this._noteList.getAllNotes().map(function(note){
      return note.getBody();
    }).join("</li><li>");
    return htmlString += "</li></ul>";
  };

  exports.NoteListView = NoteListView;

})(this);
