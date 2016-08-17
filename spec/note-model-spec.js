describe("Note Model:", function() {
  it("can create a note", function() {
    var myNote = "My favorite language is Ruby";
    var note = new Note(myNote);

    isTrue(note.showNote() === myNote );
  });

  it("has a unique id", function() {
    var noteOne = new Note("first note");
    var noteTwo = new Note("second note");

    isTrue(noteOne.id !== undefined);
    isTrue(noteTwo.id === noteOne.id + 1);
  });
});
