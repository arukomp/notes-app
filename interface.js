var list = new List();
list.addNote('Favourite drink: Mango juice');
list.addNote('Favourite drink: Mango juice');
list.addNote('Favourite drink: Mango juice');
list.addNote('Favourite drink: Mango juice');

var view = new ListView(list);

var noteController = new NoteController(view);
noteController.insert();
