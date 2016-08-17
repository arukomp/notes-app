var list = new List();
list.addNote("I love node more than I love Ruby")
list.addNote("I will be a coding genius one day I promise")
var noteController = new NoteController(list);
noteController.printList();
