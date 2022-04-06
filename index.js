// Update the count down every 1 second

// Update the count down every 1 second
function reset() {
  var x = setInterval(function () {
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    // Get today's date and time
    var date = document.getElementById("i-days").value;
    var hour = document.getElementById("i-hours").value;
    var minss = document.getElementById("i-mins").value;
    var secss = document.getElementById("i-sec").value;

    hours = hours % 12 || 12;

    const countDownDate = new Date(year,month + 1, date,hour,minss,secss, 0);
    // month -1 = jan

    console.log(countDownDate)

    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element into the span rags

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    // on the click of reset the values are set to default which is 0
    document.getElementById("reset").addEventListener("click", function () {
      document.getElementById("day").innerHTML = 0;
      document.getElementById("hour").innerHTML = 0;
      document.getElementById("min").innerHTML = 0;
      document.getElementById("sec").innerHTML = 0;
      window.location.reload();

      //to stop the running of the timer
      clearInterval(x);
    });
    if (distance < 0) {
      clearInterval(x);
      document.write("Expired");
    }
  }, 1000);
}
