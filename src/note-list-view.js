(function(exports){

  function ListView(list){
    this._listView = list;
  }

  ListView.prototype.htmlList = function() {
    var listToHtml = this._listView.returnNotes();
    var mappedList = listToHtml.map(function(note){
       return '<li><div>' + note.showNote() + '</div></li>';
    });
    return '<ul>' + mappedList.join('') + '</ul>';
  };

  exports.ListView = ListView;

})(this);
