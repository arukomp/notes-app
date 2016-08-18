describe("Note Model", function() {

  it("can create a note", function() {
    var note = new Note("My favourite language is JavaScript");
    isTrue(note.getText() === "My favourite language is JavaScript");
  });

  it("has a unique id", function() {
    var note1 = new Note("test text 1");
    var note2 = new Note("test text 2");
    isTrue(note1.id === 1);
    isTrue(note2.id === 2);
  });

});
