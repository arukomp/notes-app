(function(exports) {

  function NoteController(noteView) {
    this._noteView = noteView;
  }

  NoteController.prototype.displayNotes = function () {
    this._getAppDiv().innerHTML = this._noteView.getHTML();
  };

  NoteController.prototype._getAppDiv = function () {
    return document.getElementById('app');
  };

  exports.NoteController = NoteController;

})(this);
