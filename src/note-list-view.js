(function(exports){

  function ListView(list){
    _list = list;
  }

  ListView.prototype.htmlList = function() {
    var listToHtml = _list.printNotes();
    console.log(listToHtml);
    var mappedList = listToHtml.map(function(note){
       return '<li><div>' + note.shotNote() + '</div></li>'
    });
    return '<ul>' + mappedList.join() + '</ul>';
  };

  exports.ListView = ListView;

})(this);
