describe('NoteList Model', function() {

  it("returns an empty array at start", function() {
    var noteList = new NoteList();
    assert.isTrue(Array.isArray(noteList.getAllNotes()));
  });

  it("adds a new note", function() {
    var noteList = new NoteList();
    noteList.addNote('My favourite language is Fortran 77');
    noteList.addNote('My favourite language is Javascript');
    testNote = noteList._allNotes[0];
    assert.isTrue(testNote instanceof Note);
    assert.isTrue(testNote.getBody() === 'My favourite language is Fortran 77');
  });
  
});
