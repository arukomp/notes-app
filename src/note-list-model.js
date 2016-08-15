(function(exports){
  function List(){
    _list = [];
  }

  List.prototype.addNote = function(note){
    var noteItem = new Note(note);
    _list.push(noteItem);
  };

  List.prototype.printNotes = function(){
    return _list;
  };

  exports.List = List;
})(this);
