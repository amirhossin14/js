if (age > 18) {
    document.write("<b>Qualifies for driving</b>");
  } else {
    document.write("<b>Does not qualify for driving</b>");
  }
  //
  var book = "maths";
  if (book == "history") {
    document.write("<b>History Book</b>");
  } else if (book == "maths") {
    document.write("<b>Maths Book</b>");
  } else if (book == "economics") {
    document.write("<b>Economics Book</b>");
  } else {
    document.write("<b>Unknown Book</b>");
  }
  //
  if (temp >= 35) {
    alert("very hot");
  } else if (temp <= 10 && temp > 35) {
    alert("Good");
  } else if (temp >= 5 && temp < 10) {
    alert("cold");
  } else if (temp < 5) {
    alert("very cold");
  }
  //
  var hour = 5;

  if (hour <= 10 && hour > 15) {
    console.log(" good morning");
  } else if (hour > 15 && hour <= 18) {
    console.log("good afternoon ");
  } else if (hour > 18 && hour <= 23) {
    console.log("good afternoon ");
  } else {
    console.log("good night");
  }
  //
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }