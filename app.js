(function () {
  var notes = [];
  var form = document.getElementById('form');
  var input = document.getElementById('text');
  var list = document.getElementById('list');
  var search = document.getElementById('search');
  function render() {
    list.innerHTML = '';
    window.Notes.searchNotes(notes, search.value).forEach(function (n) {
      var li = document.createElement('li');
      li.textContent = n.text;
      var button = document.createElement('button');
      button.type = 'button';
      button.textContent = 'Hapus';
      button.addEventListener('click', function () {
        notes = window.Notes.removeNote(notes, n.id);
        render();
      });
      li.appendChild(button);
      list.appendChild(li);
    });
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    notes = window.Notes.addNote(notes, input.value);
    input.value = '';
    render();
  });
  search.addEventListener('input', render);
  render();
})();
