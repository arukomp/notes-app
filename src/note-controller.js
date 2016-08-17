(function(exports){
  function NoteController(list) {
    this._list = list;
  }

  NoteController.prototype.printList = function() {
    var listView = new ListView(this._list);
    var appDiv = document.getElementById('app')
    appDiv.innerHTML = listView.htmlList()
  }

  exports.NoteController = NoteController;
})(this);
