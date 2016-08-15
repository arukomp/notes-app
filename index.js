var noteList, noteView, noteController;

noteList = new NoteList();
noteView = new NoteListView(noteList);
noteController = new NoteController(noteView);
noteList.addNote('Favourite drink: Seltzer');
noteController.displayNotes();
