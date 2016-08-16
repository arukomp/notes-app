(function(exports){
  function NoteController(view){
    this.view = view;
  }

  NoteController.prototype.insert = function(){
    var element = document.getElementById('app');
    element.innerHTML = this.view.htmlList();
  };

  NoteController.prototype.setupNoteListeners = function(){
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  NoteController.prototype.showNoteForCurrentPage = function(){
    this.showNote(this.getNoteFromUrl(window.location));
  };

  NoteController.prototype.getNoteFromUrl = function(location){
    return location.hash.split('#')[1];
  };

  NoteController.prototype.showNote = function(id){
    var singleView = new SingleNoteView(this.view.list.getNoteById(id));
    document
      .getElementById('id')
      .innerHTML = singleView.getHTML;
  };

  exports.NoteController = NoteController;
  exports.showNoteForCurrentPage = NoteController.prototype.showNoteForCurrentPage;
  // exports.getNoteFromUrl = NoteController.prototype.getNoteFromUrl;
  // exports.showNote = NoteController.prototype.showNote;
})(this);
