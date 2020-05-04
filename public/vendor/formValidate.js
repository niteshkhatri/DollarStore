$(document).ready(function() {
  var pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@.$%&]).*$/;
  var noEmail = false;
  $("input").after("<span></span>");
  $("input")
    .next()
    .css("color", "red");
  $("input.email")
    .next()
    .text("Please Enter Email address");
  $("input.email")
    .next()
    .after("<p></p>");
  $("input.email")
    .next()
    .next()
    .css("color", "red");
  $("input.email")
    .next()
    .next()
    .text("Email address already exists");
  $("input[type=password]")
    .next()
    .text(
      "Password must contain at least 8 characters,1 number, 1 lowercase, 1 uppercase letter and 1 special character from @.$%&"
    );
  $("input.confpass")
    .next()
    .after("<p></p>");
  $("input.confpass")
    .next()
    .next()
    .css("color", "red");
  $("input.confpass")
    .next()
    .next()
    .text("Passwords doesn't match,Please check");
  $("input.confpass")
    .next()
    .next()
    .hide();
  $("span").hide();
  $("p").hide();
  $("input").focusin(function() {
    $(this)
      .next()
      .hide();
    if (
      $(this)
        .next()
        .next()
        .show()
    ) {
      $(this)
        .next()
        .next()
        .hide();
    }
  });
  $("input").focusout(function() {
    if ($(this).val() == "") {
      $(this)
        .next()
        .show();
    }
    if (!$(this).hasClass("email")) {
      if (!pattern.test($(this).val())) {
        $(this)
          .next()
          .show();
      } else {
        $(this)
          .next()
          .hide();
      }
      if ($("input.pass").val() == $("input.confpass").val()) {
        $("input.confpass")
          .next()
          .next()
          .hide();
      } else {
        $("input.confpass")
          .next()
          .next()
          .show();
      }
    } else {
      var boolmail = "/isRegistered/" + $(this).val();
      $.getJSON(boolmail, function(result) {
        if (result.alreadyRegistered == true) {
          $("input.email")
            .next()
            .next()
            .show();
        } else {
          $("input.email")
            .next()
            .next()
            .hide();
        }
      });
    }
  });
  $("button.regcheck").click(function(event) {
    if ($("input.email").val() == "") {
      $("input.email")
        .next()
        .show();
      event.preventDefault();
    } else {
      var boolemail = "/isRegistered/" + $("input.email").val();
      $.getJSON(boolemail, function(result) {
        if (result.alreadyRegistered == true) {
          $("input.email")
            .next()
            .next()
            .show();
          event.preventDefault();
        } else {
          noEmail = true;
        }
      });
      if ($("input[type=password]").val() == "") {
        $("input[type=password]")
          .next()
          .show();
        event.preventDefault();
      }
      if (!pattern.test($("input[type=password]").val())) {
        $("input[type=password]")
          .next()
          .show();
        event.preventDefault();
      }
      if ($("input.pass").val() != $("input.confpass").val()) {
        $("input.confpass")
          .next()
          .next()
          .show();
        event.preventDefault();
      }
      if (
        $("input.pass").val() == $("input.confpass").val() &&
        $("input.email").val() != "" &&
        $("input[type=password]").val() != "" &&
        pattern.test($("input[type=password]").val()) &&
        noEmail == true
      ) {
        $(this).trigger("click");
      }
    }
  });
});
