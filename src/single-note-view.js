(function(exports){

  function SingleNoteView(note){
    this._note = note;
  }

  SingleNoteView.prototype.getHTML = function() {
    return "<div>" + this._note.showNote() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
