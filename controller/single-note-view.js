(function(exports) {
  function SingleNoteView(note) {
    this._single_note = note;
  }
  SingleNoteView.prototype.getHTML = function () {
    var     note_markup = "<div>";
            note_markup += this._single_note.getText();
    return  note_markup += "</div><br><a href=\"#list\">Back</a>";
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
