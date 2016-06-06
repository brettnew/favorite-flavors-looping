$(document).ready(function() {
  $("#submit").click(function(event){
    var flavors = ["Chocolate", "Cookies 'n Cream", "Vanilla"];
    alert(flavors);
    debugger;
    flavors.forEach(function(flavor){
      $(".favorite-flavors").append("<li>" + flavor + "</li>");

      event.preventDefault();

    });
  });
});
