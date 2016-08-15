var noteList, noteView, noteController;

function setupNoteController() {
  noteList = new NoteList();
  noteView = new NoteListView(noteList);
  noteController = new NoteController(noteView);
}

describe("Note List Controller", function() {

  it("starts with the note list", function() {
    setupNoteController();
    assert.isTrue(noteController._noteView === noteView);
  });

  it("displays the notes on the page", function() {
    setupNoteController();
    element = document.createElement("div", {id: "app"});
    noteController._getAppDiv = function() {
      return element;
    };
    noteList.addNote('Blueberries');
    noteController.displayNotes();
    assert.isTrue(noteController._getAppDiv().innerHTML === noteView.getHTML());
  });
  
});
