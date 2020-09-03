function getCurrentTime(){
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();
    sec = correctTime(sec);
    min = correctTime(min);
    hour = correctTime(hour);
    console.log(hour);
    document.getElementById("digitalclock").innerText = hour + " : " + min + " : " + sec;
    var l = setTimeout(function(){getCurrentTime()},1000);
    
}

function correctTime(t){
    if( t < 10){
        return "0"+t;
    }else{
        return t;
    }
}

getCurrentTime();