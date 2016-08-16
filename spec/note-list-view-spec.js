describe("Note List View", function(){
  it("returns a list view", function() {
    var noteOne = "I love Ruby";
    var noteTwo = "I love Javascript";
    var list = new List();
    list.addNote(noteOne);
    list.addNote(noteTwo);

    var html = "<ul><li><div>I love Ruby</div></li><li><div>I love Javascript</div></li></ul>";

    var listView = new ListView(list);

    isTrue(listView.htmlList() === html);

  });
  it("only returns upto 20 characters", function(){
    var noteOne = "I love Ruby and I miss writing beautiful code in the amazing ruby";

    var list = new List();
    list.addNote(noteOne);

    var html = "<ul><li><div>I love Ruby and I mi...</div></li></ul>";
    var listView = new ListView(list);

    isTrue(listView.htmlList() === html);
  });
});
