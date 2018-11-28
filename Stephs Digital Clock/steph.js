function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";

    if (hours == 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        session = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById("myStephDisplay").innerText = time;
    document.getElementById("myStephDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();