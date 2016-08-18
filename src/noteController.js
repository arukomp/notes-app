(function(exports) {
  function NoteController(list) {
    this.listView = new ListView(list);
  }

  NoteController.prototype.getAppDiv = function() {
    return document.getElementById("app");
  };

  NoteController.prototype.insertHTML = function() {
    var html = this.listView.getHTML();
    var element = this.getAppDiv();
    element.innerHTML = html;
  };

  exports.NoteController = NoteController;
})(this);
