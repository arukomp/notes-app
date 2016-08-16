describe("Note List View", function(){
  it("returns a list view", function() {
    var noteOne = "I love Ruby";
    var noteTwo = "I love Javascript";
    var list = new List();
    list.addNote(noteOne);
    list.addNote(noteTwo);

    var html = "<ul><li><a href=\"#"
               + list.returnNotes()[0].id + "\">I love Ruby</a></li><li><a href=\"#"
               + list.returnNotes()[1].id + "\">I love Javascript</a></li></ul>";

    var listView = new ListView(list);

    isTrue(listView.htmlList() === html);

  });
  it("only returns upto 20 characters", function(){
    var noteOne = "I love Ruby and I miss writing beautiful code in the amazing ruby";

    var list = new List();
    list.addNote(noteOne);

    var html = "<ul><li><a href=\"#"  +
               + list.returnNotes()[0].id + "\">I love Ruby and I mi...</a></li></ul>";
    var listView = new ListView(list);

    isTrue(listView.htmlList() === html);
  });

  it("includes a link to a specific note", function() {
    var list = new List();
    list.addNote("Beautiful code here");
    var view = new ListView(list);

    var html = "<ul><li><a href=\"#" +
               list.returnNotes()[0].id +
               "\">Beautiful code here</a></li></ul>";
    isTrue(view.htmlList() === html);

  });
});
