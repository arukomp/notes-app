describe("Notes Model: ", function() {

  it("can create a note", function() {
    var note = new Note("My favourite language is Ruby");
    assert.isTrue(note.getBody() === "My favourite language is Ruby");
  });

  it("can create an empty note", function() {
    var note = new Note();
    assert.isTrue(note.getBody() === "");
  });
  
});
