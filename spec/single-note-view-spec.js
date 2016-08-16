describe("Single Note View", function() {
  it("returns a single note view", function() {

    var note = new Note('Hello World');
    var singleView = new SingleNoteView(note);

    isTrue(singleView.getHTML() === "<div>Hello World</div>");

    var anotherView = new SingleNoteView(new Note("something else"));
    isTrue(anotherView.getHTML() === "<div>something else</div>");

  });
});
