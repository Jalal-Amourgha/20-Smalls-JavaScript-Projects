window.addEventListener("load", time);

function time() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var dayName = date.getDay();

  hour = hour;
  minute < 10 ? (minute = "0" + minute) : minute;
  hour < 10 ? (hour = "0" + hour) : hour;
  second < 10 ? (second = "0" + second) : second;

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = month + 1;
  document.getElementById("year").innerHTML = year;
  setTimeout(time, 500);
}
