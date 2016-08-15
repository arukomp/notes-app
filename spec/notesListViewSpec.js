var noteList, noteListView;

function itInstantiatesAndStoresANoteList() {
  setupNoteListView();
  assert.isTrue(noteListView.getNoteList() instanceof NoteList);
}

function itReturnsBasicHTMLForEmptyList() {
  setupNoteListView();
  assert.isTrue(noteListView.getHTML() === "<ul><li></li></ul>");
}

function itReturnsCorrentHTMLForMultipleNotes() {
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
}

function setupNoteListView() {
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
}

document.write('Notes List View: ');
itInstantiatesAndStoresANoteList();
itReturnsBasicHTMLForEmptyList();
itReturnsCorrentHTMLForMultipleNotes();
document.write('<br>');
