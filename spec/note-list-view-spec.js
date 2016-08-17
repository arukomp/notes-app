describe("Note List View:", function() {

  var noteOne, noteTwo, list;

  function listViewSetup() {
    noteOne = "I love Ruby";
    noteTwo = "I don't love Javascr";
    list = new List();
    list.addNote(noteOne);
    list.addNote(noteTwo);
  }

  it("returns a list view", function() {
    listViewSetup();

    var html = "<ul><li><div>I love Ruby</div></li><li><div>I don't love Javascr</div></li></ul>";

    var listView = new ListView(list);

    isTrue(listView.htmlList() === html);

  });

  it("return a list view showing only 20 characters", function(){
    listViewSetup();
    var noteThree = "I really love node I can't wait to use it more";
    list.addNote(noteThree);

    var html = "<ul><li><div>I love Ruby</div></li><li><div>I don't love Javascr</div></li><li><div>I really love node I</div></li></ul>";

    var listView = new ListView(list);

    isTrue(listView.htmlList() === html);
  });
});
