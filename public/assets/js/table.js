
    // Set the date we're counting down to
    var countDownDate = new Date("May 16, 2024 11:00:00").getTime();
    
    // Update the count down every 1 second
    var countdownfunction = setInterval(function() {
    
      // Get todays date and time
      var now = new Date().getTime();
      
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      document.getElementById("demo2").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      document.getElementById("demo3").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      document.getElementById("hours").innerHTML = hours

      
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("demo").innerHTML = "In Progress";
        document.getElementById("demo2").innerHTML = "In Progress";
        document.getElementById("demo3").innerHTML = "In Progress";
      }
    }, 1000);


    
    