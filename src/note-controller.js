(function(exports){
  function NoteController(view){
    this.view = view;
  }

  NoteController.prototype.insert = function(){
    var element = document.getElementById('app');
    element.innerHTML = this.view.htmlList();
  };

  NoteController.prototype.getNoteFromUrl = function(location){
    return location.hash.split('#')[1];
  };

  NoteController.prototype.showNote = function(id){
    var singleView = new SingleNoteView(this.view._listView.getNoteById(id));
    document.getElementById('app').innerHTML = singleView.getHTML();
  };

  exports.NoteController = NoteController;
  // exports.showNoteForCurrentPage = NoteController.prototype.showNoteForCurrentPage;
  // exports.getNoteFromUrl = NoteController.prototype.getNoteFromUrl;
  // exports.showNote = NoteController.prototype.showNote;
})(this);
