describe( "Note Model", function () {
  it( "Can create a note", function () {
    var note = new Note("Ruby trumps javascript");
    assert.isTrue( note.text === "Ruby trumps javascript" );
    });

    it( "Can display its text", function () {
    var note = new Note("Ruby trumps javascript");
    assert.isEqual(note.getText(), "Ruby trumps javascript");
  });
});
