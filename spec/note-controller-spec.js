describe("Note Controller", function() {
  it("instantiates note contrller", function(){
    var noteController;
    var list;
    var view;

    list = new List();
    view = new ListView(list);

    noteController = new NoteController(view);

    isTrue(noteController.view === view);

  });

  it("inserts HTML into page", function(){
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
  });

  it("displays a note on click", function(){
    var noteController;
    var list;
    var view;
    var singleNote;

    list = new List();
    list.addNote('Apple makes the best computers');
    view = new ListView(list);
    singleNote = new SingleNoteView(list.returnNotes()[0]);

    var appDiv = document.createElement('div', {id: 'app'});
    document.getElementById = function() {
      return appDiv;
    };

    noteController = new NoteController(view);
    noteController.insert();
    function showNoteForCurrentPage(){
      noteController.showNote(noteController.getNoteFromUrl(window.location));
    };
    window.addEventListener("hashchange", showNoteForCurrentPage);

    appDiv.getElementsByTagName('a')[0].click();

    // needed a timeout because this code was being executed before the actual
    // click above occurs.
    window.setTimeout(function(){
      var htmlOutput = singleNote.getHTML();
      var element = appDiv;

      console.log("expected: ", htmlOutput);
      console.log("got: ", element.innerHTML);

      isTrue(htmlOutput === element.innerHTML);
      document.getElementById = document.__proto__.getElementById;
    }, 500);
  });
});
