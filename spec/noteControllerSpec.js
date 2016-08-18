describe("Note Controller", function() {

  it("can be instantiated", function() {
    var list = new List();
    var noteController = new NoteController(list);
    isTrue(noteController.listView instanceof ListView);
  });

  it("#insertHTML inserts list view in the element", function() {
    var element = document.createElement("div")
    element.id = "app"
    var list = new List();
    var noteController = new NoteController(list);
    noteController.getAppDiv = function() {
      return element;
    };
    noteController.insertHTML();
    isTrue(noteController.listView.getHTML() ===
           noteController.getAppDiv().innerHTML);
  })
;
});
