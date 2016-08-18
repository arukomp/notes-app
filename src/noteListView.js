(function(exports) {

  function ListView(list) {
    this.currentList = list;
  }

  ListView.prototype.getHTML = function() {

    var listToHtml = this.currentList.getAllNotes();
    var mappedList = listToHtml.map(function(note) {
      var text = note.getText();
      return "<li>" + text.slice(0, 20) + "</li>";
    });

    return '<ul>' + mappedList.join('') + '</ul>';
  }

  exports.ListView = ListView

})(this);
