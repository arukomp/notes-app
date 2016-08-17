describe("Note List View:", function() {

  var noteOne, noteTwo, list, firstNote, secondNote;

  function listViewSetup() {
    noteOne = "I love Ruby";
    noteTwo = "I don't love Javascr";
    list = new List();
    list.addNote(noteOne);
    list.addNote(noteTwo);
    firstNote = list.returnNotes()[0];
    secondNote = list.returnNotes()[1];
  }

  it("returns a list view", function() {
    listViewSetup();

    var html = "<ul>" +
      "<li><div><a href=\"#" + firstNote.id + "\">I love Ruby</a></div></li>" +
      "<li><div><a href=\"#" + secondNote.id + "\">I don't love Javascr</a></div></li>" +
      "</ul>";

    var listView = new ListView(list);

    isTrue(listView.htmlList() === html);

  });

  it("return a list view showing only 20 characters", function(){
    listViewSetup();
    var noteThree = "I really love node I can't wait to use it more";
    list.addNote(noteThree);
    var thirdNote = list.returnNotes()[2];
    var html = "<ul>" +
      "<li><div><a href=\"#" + firstNote.id + "\">I love Ruby</a></div></li>" +
      "<li><div><a href=\"#" + secondNote.id + "\">I don't love Javascr</a></div></li>" +
      "<li><div><a href=\"#" + thirdNote.id + "\">I really love node I</a></div></li>" +
      "</ul>";

    var listView = new ListView(list);

    console.log("expected: ", html);
    console.log("instead got:", listView.htmlList());
    isTrue(listView.htmlList() === html);
  });

});
