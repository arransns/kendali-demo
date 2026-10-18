// Logika catatan murni. Dipakai browser (window.Notes) dan tes Node (module.exports).
(function (root) {
  function addNote(list, text) {
    var t = String(text || '').trim();
    if (!t) return list;
    var maxId = list.reduce(function (m, n) { return n.id > m ? n.id : m; }, 0);
    return list.concat([{ id: maxId + 1, text: t }]);
  }
  function removeNote(list, id) {
    return list.filter(function (n) { return n.id !== id; });
  }
  function searchNotes(list, query) {
    var q = String(query || '').trim().toLowerCase();
    return list.filter(function (n) { return String(n.text).toLowerCase().indexOf(q) !== -1; });
  }
  var api = { addNote: addNote, removeNote: removeNote, searchNotes: searchNotes };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Notes = api;
})(this);
