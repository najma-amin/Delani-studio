$(document).ready(function() {
  $("#p1").hide();
  $("#p2").hide();
  $("#p3").hide();
  $(".port1").hide();
  $("#image1").click(function() {
    $("#p1").show();
  });
  $("#image1").click(function() {
    $("#image1").hide();
  });
  $("#p1").click(function() {
    $("#image1").show();
  });
  $("#p1").click(function() {
    $("#p1").hide();
  });
  $("#image2").click(function() {
    $("#p2").show();
  });
  $("#image2").click(function() {
    $("#image2").hide();
  });
  $("#p2").click(function() {
    $("#image2").show();
  });
  $("#p2").click(function() {
    $("#p2").hide();
  });
  $("#image3").click(function() {
    $("#p3").show();
  });
  $("#image3").click(function() {
    $("#image3").hide();
  });
  $("#p3").click(function() {
    $("#image3").show();
  });
  $("#p3").click(function() {
    $("#p3").hide();
  });

  $(".port1").hover(
    function() {
      $(this)
        .find(".txt")
        .fadeIn(500);
    },
    function() {
      $(this)
        .find(".txt")
        .fadeOut(500);
    }
  );
});
function validate() {
  var name = document.getElementById("inputname").value;
  var email = document.getElementById("inputemail").value;
  var text = document.getElementById("inputmessage").value;
  if (name == "") {
    alert("Insert name!");
  } else if (email == "") {
    alert("Insert email!");
  } else if (text == "") {
    alert("There is no message!");
  } else {
    alert(
      "we have recieved your message dear " +
        name +
        ", " +
        " we will get back to you"
    );
  }
}
