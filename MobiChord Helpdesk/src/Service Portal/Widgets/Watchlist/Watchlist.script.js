(function () {
  var gr;
  if (input) {
    gr = new GlideRecord(input.table);
    if (gr.get(input.sys_id)) {
        gr.watch_list = input.watchList;
        gr.update();
        gs.addInfoMessage('Updated');
    }
  } else {
    var sys_id = $sp.getParameter("sys_id");
    var table = $sp.getParameter("table");

    gr = new GlideRecord(table);
    gr.get(sys_id);

    data.table = table;
    data.sys_id = sys_id;
    data.displayValue = gr.getDisplayValue('watch_list');
    data.value = gr.getValue('watch_list');
  }
})();