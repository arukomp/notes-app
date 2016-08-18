(function(exports) {

  function ListView(list) {
    this.currentList = list;
  }

  ListView.prototype.getHTML = function() {

    var listToHtml = this.currentList.getAllNotes();
    var mappedList = listToHtml.map(function(note) {
      var text = note.getText();
      return "<li><a href='#" + note.id + "'>" + text.slice(0, 20) + "</a></li>";
    });

    return '<ul>' + mappedList.join('') + '</ul>';
  }

  exports.ListView = ListView

})(this);
