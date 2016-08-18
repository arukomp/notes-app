var note = new Note("Favourite drink: seltzer");
var list = new List();
var noteController = new NoteController(list);
list.addNote(note);
noteController.insertHTML();
