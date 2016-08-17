describe("Note Controller", function(){
  it('a note controller can be instantiated', function(){
    var list = new List()
    var noteController = new NoteController(list);
    isTrue(noteController._list === list)
  })

  it('return a note in HTML', function(){
    var list = new List();
    list.addNote("Favourite Drink: Seltzer")
    var noteController = new NoteController(list);

    var appDiv = document.createElement('div', {id: 'app'});
    document.getElementById = function(){
      return appDiv;
    }

    var listView = new ListView(list);

    noteController.printList();
    isTrue(appDiv.innerHTML === listView.htmlList())

    document.getElementById = document.__proto__.getElementById;
  });
});
