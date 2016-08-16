function instantiatingNoteController(){
  var noteController;
  var list;
  var view;

  list = new List();
  view = new ListView(list);

  noteController = new NoteController(view);

  isTrue(noteController.view === view);

}

function insertsHTMLintoPage(){
  var noteController;
  var list;
  var view;

  list = new List();
  list.addNote('Pomodoro');
  view = new ListView(list);

  var appDiv = document.createElement('div', {id: 'app'});
  document.getElementById = function() {
    return appDiv;
  };

  noteController = new NoteController(view);
  noteController.insert();

  var htmlOutput = view.htmlList();
  var element = document.getElementById('app');

  isTrue(htmlOutput === element.innerHTML);
  document.getElementById = document.__proto__.getElementById;
}

instantiatingNoteController();
insertsHTMLintoPage();
