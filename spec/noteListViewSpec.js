describe("Note List View", function() {

  it("takes a note list model upon instantiation", function() {
    var note1 = new Note("Test 1");
    var html = "<ul><li><a href='#" + note1.id + "'>Test 1</a></li></ul>";
    var list = new List();
    var listView = new ListView(list);
    list.addNote(note1);
    isTrue(listView.getHTML() === html);
  });

  it("only displays first 20 characters of a note", function() {
    var long = "asdfgasdfgasdfgasdfgasdfasdfasdfasdfasdfasdfadsfadfasdf";
    var note = new Note(long);
    var list = new List();
    var listView = new ListView(list);
    list.addNote(note);
    isTrue(listView.getHTML() === "<ul><li><a href='#" + note.id + "'>asdfgasdfgasdfgasdfg</a></li></ul>");
  });
});
