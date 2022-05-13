function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

function initArray() {
this.length = initArray.arguments.length;
for (var i = 0; i < this.length; i++)
this[i+1] = initArray.arguments[i];
}

var dagArray = new initArray("zondag","maandag", "dinsdag","woensdag","donderdag","vrijdag","zaterdag");

var maandArray = new initArray("januari","februari","maart","april","mei","juni","juli", "augustus","september","oktober","november","december");

var nu = new Date();
var dagtekst = dagArray[(nu.getDay()+1)];
var dag = nu.getDate();
var maandtekst = maandArray[(nu.getMonth()+1)];
var jaar = nu.getYear();
var jaar4 = ((jaar < 1900) ? (jaar + 1900) : (jaar));

var datumweergave = "Het is vandaag " + dagtekst + " " + dag + " " + maandtekst + " " + jaar4;

document.write(datumweergave);
