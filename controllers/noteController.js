(function(exports) {

  function NoteController(noteList) {
    this._noteList = noteList;
    this._view = new NoteListView(this._noteList);
  }

  NoteController.prototype.insertHTML = function (id) {
    var element = this.getElement(id);
    element.innerHTML = this._view.getHTML();
  };

  NoteController.prototype.getElement = function(id) {
    return document.getElementById(id);
  }

  NoteController.prototype.listenForHashChange = function() {
    var self = this;
    window.addEventListener("hashchange", function() {
      self.showNote();
    });
  }

  NoteController.prototype.listenForSubmitEvents = function() {
    var self = this;
    window.addEventListener("submit", function(event){
      event.preventDefault();
      var noteText = event.target["text"].value;
      self.addNote(noteText);
      event.target["text"].value = "";
    })
  }

  NoteController.prototype.addNote = function (note) {
    this._noteList.addNote(note)
    this.insertHTML("app")
  }

  NoteController.prototype.showNote = function() {
    var id = window.location.hash.split("#")[1];
    if (id === "list") {
      this._view = new NoteListView(this._noteList);
    } else {
      var note = this._noteList.getNoteById(parseInt(id));
      this._view = new SingleNoteView(note);
    }
    this.insertHTML("app");
  }

  exports.NoteController = NoteController;

})(this);
