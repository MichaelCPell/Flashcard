
//This function adds fields in _form
$(document).ready(function(){
  $('form').on('click', '.add_fields', function(event) {
    var regexp, time;
    time = new Date().getTime();
    regexp = new RegExp($(this).data('id'), 'g');
    $(this).before($(this).data('fields').replace(regexp, time));
    return event.preventDefault();
  });
});



//This function allows the users to control with the keyboard arrows
$(document).keydown(function(e){
      if (e.keyCode == 37) {
         $("#previous-button").click();
         return false;
      }

      if (e.keyCode == 38) {
         $("#card-partial").click();
         return false;
      }

      if (e.keyCode == 39) {
         $("#next-button").click();
         return false;
      }

      return false;
});