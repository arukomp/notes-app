
function canCreateANote() {
  var myNote = "My favorite language is Ruby";
  var note = new Note(myNote);
  isTrue(note.showNote() === myNote );
}

canCreateANote();
