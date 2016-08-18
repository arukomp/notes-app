describe("Single Note View", function() {

  var note;
  var singleNoteView;

  function setUpNoteView() {
    note = new Note('Favourite drink: seltzer');
    singleNoteView = new SingleNoteView(note);
  }


  it("can be instantiated with a note", function() {
    setUpNoteView();
    isTrue(singleNoteView.note === note);
  });

  it("#getHTML returns the note in a string", function() {
    setUpNoteView();
    singleNoteView.getHTML();
    var htmlString = "<div>Favourite drink: seltzer</div>";
    isTrue(singleNoteView.getHTML() === htmlString);
  });
});
