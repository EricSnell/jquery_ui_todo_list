$((() => {

  $('#todo-list ul').sortable({
    items: "li:not('.list-title, add-item')",
    connectWith: 'ul',
    dropOnEmpty: true,
    placeholder: 'empty-space'
  });

  $('input').keydown(function(e) {
    if (e.keyCode == 13) {
      let item = $(this).val();
      $(this).parent().parent().append('<li>' + item + '</li>');
      $(this).val('');
    }
  });

  $('#trash').droppable({
    drop: function(event, ui) {
      ui.draggable.remove();
    }
  });

}));
