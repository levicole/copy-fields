// usage: $("#element").copyFields("#to", "#from")
(function($) {
  $.fn.copyFields =  function(to, from) {
    // find all the inputs in to
    var to = $(to + " input");
    // find all the inputs in from
    var from = $(from + " input");
    // when you click on the element
    $(this).click(function() {
      //loop through all the from inputs and put the value in the to input...
       for (var i = 0; i < from.length; i++) {
         to[i].value = from[i].value
       };
    }); 
  };
})(jQuery)