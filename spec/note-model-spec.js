describe("Note Model", function() {
  it("can create a note", function() {
    var myNote = "My favorite language is Ruby";
    var note = new Note(myNote);
    isTrue(note.showNote() === myNote );
  });
});
