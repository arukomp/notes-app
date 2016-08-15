var noteList, noteListView;

function setupNoteListView() {
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
}

describe("Note List View:", function() {

  it("initializes and stores a note list", function() {
    setupNoteListView();
    assert.isTrue(noteListView.getNoteList() instanceof NoteList);
  });

  it("returns basic HTML for an empty list", function() {
    setupNoteListView();
    assert.isTrue(noteListView.getHTML() === "<ul><li></li></ul>");
  });

  it("returns corrent HTML for multiple notes", function() {
    setupNoteListView();
    noteList.addNote('I like apples.');
    var htmlString = "<ul><li>I like apples.</li>";
    assert.isTrue(noteListView.getHTML() === htmlString + "</ul>");
    noteList.addNote('I also like oranges.');
    htmlString += "<li>I also like oranges.</li>";
    assert.isTrue(noteListView.getHTML() === htmlString + "</ul>");
    noteList.addNote('But I hate peaches.');
    htmlString += "<li>But I hate peaches.</li>";
    assert.isTrue(noteListView.getHTML() === htmlString + "</ul>");
  });
  
});
