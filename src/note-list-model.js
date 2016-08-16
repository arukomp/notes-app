(function(exports){
  function List(){
    this._list = [];
  }

  List.prototype.addNote = function(note){
    var noteItem = new Note(note);
    this._list.push(noteItem);
  };

  List.prototype.returnNotes = function(){
    return this._list;
  };

  exports.List = List;
})(this);
