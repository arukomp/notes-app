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

  List.prototype.getNoteById = function(id){
    var noteFound;
    this._list.forEach(function(note){
      if(note.id == id){
        noteFound = note;
      }
    });
    return noteFound;
  };

  exports.List = List;
})(this);
