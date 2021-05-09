function flipTo(digit, n) {
  var current = digit.attr("data-num");
  digit.attr("data-num", n);
  digit.find(".front").attr("data-content", current);
  digit.find(".back, .under").attr("data-content", n);
  digit.find(".flap").css("display", "block");
  setTimeout(function () {
    digit.find(".base").text(n);
    digit.find(".flap").css("display", "none");
  }, 350);
}

function jumpTo(digit, n) {
  digit.attr("data-num", n);
  digit.find(".base").text(n);
}

function updateGroup(group, digits, n, flip) {
  if (digits >= 1) {
    var digit3 = $("." + group);
  }
  if (digits >= 2) {
    var digit2 = $(".ten" + group);
  }
  if (digits >= 3) {
    var digit1 = $(".hundred" + group);
  }
  n = String(n);

  var num1, num2, num3;

  if (digits == 3) {
    if (n.length == 1) n = "00" + n;
    if (n.length == 2) n = "0" + n;

    num1 = n.substr(0, 1);
    num2 = n.substr(1, 1);
    num3 = n.substr(2, 1);
  }
  if (digits == 2) {
    if (n.length == 1) n = "0" + n;

    num2 = n.substr(0, 1);
    num3 = n.substr(1, 1);
  }

  if (digits == 3) {
    if (digit1.attr("data-num") != num1) {
      if (flip) flipTo(digit1, num1);
      else jumpTo(digit1, num1);
    }
  }
  if (digit2.attr("data-num") != num2) {
    if (flip) flipTo(digit2, num2);
    else jumpTo(digit2, num2);
  }
  if (digit3.attr("data-num") != num3) {
    if (flip) flipTo(digit3, num3);
    else jumpTo(digit3, num3);
  }
}

function setTime(flip, d, h, m, s) {
  updateGroup("day", 3, d, flip);
  updateGroup("hour", 2, h, flip);
  updateGroup("min", 2, m, flip);
  updateGroup("sec", 2, s, flip);
}

/* $(document).ready(function () {
  setTime(false);
  setInterval(function () {
    setTime(true);
  }, 1000);
}); */
