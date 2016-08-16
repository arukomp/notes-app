(function(exports){
  function NoteController(view){
    this.view = view;
  }

  NoteController.prototype.insert = function(){
    var element = document.getElementById('app');
    element.innerHTML = this.view.htmlList();
  };
  exports.NoteController = NoteController;
})(this);
