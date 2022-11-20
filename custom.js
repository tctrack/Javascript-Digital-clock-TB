function getCurrentTime(){
    var curTime = new Date().toLocaleTimeString();
    var curDate = new Date().toLocaleDateString('en-GB');
    var curDay = new Date().toLocaleDateString('en-US', {weekday: "long"});

    //console.log(curDate);

    document.getElementById('CurrentTime').innerHTML = curTime;
    document.getElementById('currentDayDate').innerHTML = `${curDate} (${curDay})`;
}


setInterval(() => {
    getCurrentTime()
}, 1000);