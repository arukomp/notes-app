var noteList, noteView, noteController;

function itStartsWithTheNoteList() {
  setupNoteController();
  assert.isTrue(noteController._noteView === noteView);
}

function itDisplaysTheNotesOnThePage() {
  setupNoteController();
  element = document.createElement("div", {id: "app"});
  noteController._getAppDiv = function() {
    return element;
  };
  noteList.addNote('Blueberries');
  noteController.displayNotes();
  assert.isTrue(noteController._getAppDiv().innerHTML === noteView.getHTML());
}

function setupNoteController() {
  noteList = new NoteList();
  noteView = new NoteListView(noteList);
  noteController = new NoteController(noteView);
}

document.write('Notes List Controller: ');
itStartsWithTheNoteList();
itDisplaysTheNotesOnThePage();
document.write('<br>');
