var list = new List();
list.addNote('Favourite drink: Mango juice');
list.addNote('Favourite drink: Apple juice');
list.addNote('Favourite drink: Appletizer');
list.addNote('Favourite drink: Beer');

var view = new ListView(list);

var noteController = new NoteController(view);
noteController.insert();

function showNoteForCurrentPage(){
  noteController.showNote(noteController.getNoteFromUrl(window.location));
};
window.addEventListener("hashchange", showNoteForCurrentPage);
