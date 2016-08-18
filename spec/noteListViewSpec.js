// Takes a note list model upon instantiation.
// Has a method that, when called, returns a string of HTML that represents the
// note list model. For example: <ul><li><div>Favourite food: pesto</div></li><li>
// <div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.

describe("Note List View", function() {

  it("takes a note list model upon instantiation", function() {
    var html = "<ul><li>Test 1</li></ul>";
    var note1 = new Note("Test 1");
    var list = new List();

    list.addNote(note1);
    var listView = new ListView(list);

    isTrue(listView.getHTML() === html);
    // isTrue(document.getElementsByTagName("li") === "li");
  });
});
