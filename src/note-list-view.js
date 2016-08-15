(function(exports){

  function ListView(list){
    _listView = list;
  }

  ListView.prototype.htmlList = function() {
    var listToHtml = _listView.printNotes();
    var mappedList = listToHtml.map(function(note){
       return '<li><div>' + note.showNote() + '</div></li>';
    });
    console.log('<ul>' + mappedList.join() + '</ul>');
    return '<ul>' + mappedList.join() + '</ul>';
  };

  exports.ListView = ListView;

})(this);
