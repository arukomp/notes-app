function canCreateAlistOfNotes(){
  var noteOne = "I love Ruby";
  var noteTwo = "I don't love Javascript";

  var list = new List();

  list.addNote(noteOne);
  list.addNote(noteTwo);
  var testList = list.printNotes();
  isTrue(testList.length == 2);

}

canCreateAlistOfNotes();
