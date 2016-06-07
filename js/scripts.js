$(document).ready(function() {
  $("#submit").click(function(event){
    var flavors = ["Chocolate", "Cookies 'n Cream", "Vanilla"];
    alert(flavors);
    // debugger;
    for (var index = 0; index < flavors.length; index++){
      $(".favorite-flavors").append("<li>" + flavors[index] + "</li>");

      event.preventDefault();

    };
  });
});
