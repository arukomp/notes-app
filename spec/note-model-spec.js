describe("Note Model", function() {
  it("can create a note", function() {
    var myNote = "My favorite language is Ruby";
    var note = new Note(myNote);
    isTrue(note.showNote() === myNote );
  });

  it("has a unique ID when created", function() {

    var noteOne = new Note("first one");
    isTrue(noteOne.id !== undefined);

    var noteTwo = new Note("second one");
    isTrue(noteTwo.id === noteOne.id + 1);
  });
});
