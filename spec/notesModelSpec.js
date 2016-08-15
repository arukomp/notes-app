function createsANote() {
  var note = new Note("My favourite language is Ruby");
  assert.isTrue(note.getBody() === "My favourite language is Ruby");
}

function createsAnEmptyNote() {
  var note = new Note();
  assert.isTrue(note.getBody() === "");
}

createsANote();
createsAnEmptyNote();
