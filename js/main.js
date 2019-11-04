$(document).ready(function() {
  $("#p1").hide();
  $("#p2").hide();
  $("#p3").hide();

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
  $("#work3").hover(function() {
    $("#text3").show();
  });
  $("#work3").mouseleave(function() {
    $("#text3").hide();
  });

  $("#work2").hover(function() {
    $("#text2").show();
  });
  $("#work2").mouseleave(function() {
    $("#text2").hide();
  });

  $("#work1").hover(function() {
    $("#text1").show();
  });
  $("#work1").mouseleave(function() {
    $("#text1").hide();
  });
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
