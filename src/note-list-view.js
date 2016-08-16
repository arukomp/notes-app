(function(exports){

  function ListView(list){
    this._listView = list;
  }

  ListView.prototype.htmlList = function() {
    var listToHtml = this._listView.returnNotes();
    self = this;
    var mappedList = listToHtml.map(function(note){
      return '<li><a href="#' + note.id + '">' + self.getNoteSnippet(note) + '</a></li>';
    });
    return '<ul>' + mappedList.join('') + '</ul>';
  };

  ListView.prototype.getNoteSnippet = function(note) {
    if(this.isTooLong(note)){
      return note.showNote().slice(0,20) + '...';
    }
    return note.showNote();
  };

  ListView.prototype.isTooLong = function(note) {
    return note.showNote().length > 20;
  };

  exports.ListView = ListView;

})(this);
