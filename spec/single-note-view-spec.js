describe("Singe Note View", function() {

  var note, singleView;

  function setupSingleView() {
    note = new Note("Hello there");
    singleView = new SingleNoteView(note);
  }

  it("can be instantiated with a single note instance", function() {
    setupSingleView();
    isTrue(singleView._note === note);
  });

  it("returns an HTML for that note", function() {
    setupSingleView();
    var expectedHtml = "<div>Hello there</div>";
    isTrue(singleView.getHTML() === expectedHtml);
  });

});
