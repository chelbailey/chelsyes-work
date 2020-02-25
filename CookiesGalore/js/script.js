function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name field must be filled out.");
      return false;
    }  
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email field must be filled out.");
      return false;
    }
}

$(document).ready(function(){
  $("#myCarousel").carousel();
  $(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#myCarousel").carousel("next");
  });
});