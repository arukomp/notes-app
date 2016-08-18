describe("Note List View", function() {

  it("takes a note list model upon instantiation", function() {
    var html = "<ul><li>Test 1</li></ul>";
    var note1 = new Note("Test 1");
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
    console.log(listView.getHTML());
    isTrue(listView.getHTML() === "<ul><li>asdfgasdfgasdfgasdfg</li></ul>");
  });
});
