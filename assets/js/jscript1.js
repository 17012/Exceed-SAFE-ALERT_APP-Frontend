function display_c(){
    var refresh=1000;
    mytime=setTimeout('display_ct()',refresh)
    }

function display_ct() {
    var today = new Date();
    var seconds = today.getSeconds();
    seconds = ("0" + seconds).slice(-2);
    var time = today.getHours() + ":" + today.getMinutes() + ":" + seconds;
    document.getElementById("current-time").innerHTML = time;
    display_c();
}
