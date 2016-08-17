describe("Note List Model", function() {
  it("can create a list of notes", function() {
    var noteOne = "I love Ruby";
    var noteTwo = "I don't love Javascript";

    var list = new List();

    list.addNote(noteOne);
    list.addNote(noteTwo);
    var testList = list.returnNotes();
    isTrue(testList.length == 2);
    isTrue(testList[0].showNote()=== noteOne);
    isTrue(testList[1].showNote()=== noteTwo);
  });
});
