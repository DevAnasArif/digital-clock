var show = document.getElementById("show");

function time() {
    var date = new Date();
    var hours = date.getHours();
    var Min = date.getMinutes();
    var Second = date.getSeconds();
    
    var ampm;
    var originalHours = hours;
    
    if (hours >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    if (hours > 12) {
        originalHours = hours - 12;
    } else if (hours === 0) {
        originalHours = 12; 
    }

    show.innerHTML = originalHours + ":" + Min + ":" + Second + " " + ampm;
}
time();
setInterval(time, 1000);
