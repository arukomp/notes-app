function returnsListView() {
  var noteOne = "I love Ruby";
  var noteTwo = "I don't love Javascript";
  var list = new List();
  list.addNote(noteOne);
  list.addNote(noteTwo);

  var html = "<ul><li><div>I love Ruby</div></li><li><div>I don't love Javascript</div></li></ul>";
  
  var listView = new ListView(list);

  isTrue(listView.htmlList() === html);

}

returnsListView();
