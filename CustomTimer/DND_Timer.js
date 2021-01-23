var sekunden;
var minuten;
var stunden;
var tage;
var wochen;
var monate;
var jahr;
var Ferienmonat=6;
var Ferientag=29;
var Ferienyear=2019;
var start = new Date(2020, 6, 4);
//var myVar = setInterval(function() {time()}, 1);
var myFont;
var mode=0;
var i=0;
var r=0;
var g=242;
var b=163;
var rcheck=0;
var gcheck=1;
var bcheck=0;
var responsive1=" ";
var Zweck = "zu den Sommerferien";

var inputFieldElements = {};
var LinkUrl;
var LinkIsOpen = false;

function preload() {
    myFont = loadFont('data/CourierPrime.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#00F2A3');
    textFont(myFont);
    const queryString = window.location.search;
    console.log(queryString.length);
    const urlParams = new URLSearchParams(queryString);
    if (queryString.length>0) {
        const year = urlParams.get('y') || 2020;
        const month = urlParams.get('mon') || 1;
        const day = urlParams.get('d') || 1;
        const hour = urlParams.get('h') || 0;
        const min = urlParams.get('min') || 0;
        const second = urlParams.get('s') || 0;
        const display = urlParams.get('mode') || "standard";
        Zweck = urlParams.get('t') || Zweck;
        console.log(Zweck);
        if(display=="sec"){
            i=1;
        } else if(display=="min"){
            i=2;
        } else if(display=="hour"){
            i=3;
        } else if(display=="day"){
            i=4;
        } else if(display=="week"){
            i=5;
        } else {
            i=0;
        }
        start = new Date(year, month-1, day, hour, min, second);
        console.log(start);
    }

    inputFieldElements = {
        year: document.getElementById("idyear"),
        month: document.getElementById("idmonth"),
        day: document.getElementById("idday"),
        hour: document.getElementById("idhour"),
        minute: document.getElementById("idminute"),
        second: document.getElementById("idsecond"),
        text: document.getElementById("ZweckInput"),
        mode: document.getElementById("disp-mode")
    }

    inputFieldElements.year.value=year();
    inputFieldElements.month.value=month();
    inputFieldElements.day.value=day();
    inputFieldElements.hour.value=hour();
    inputFieldElements.minute.value=minute();
    inputFieldElements.second.value=second();

    UpdateLink();

    document.getElementById("share").onclick  = function(){
        // console.log(linkBoxDisp);
        document.getElementById("generate-link-box").style.display="flex";
        LinkIsOpen=true;
    }
    
    document.getElementById("close").onclick  = function(){
        // console.log(linkBoxDisp);
        document.getElementById("generate-link-box").style.display="none";
        setTimeout(() => {LinkIsOpen=false}, 10);
    }

    
    document.getElementById("copy-button").onclick = function(){
        copyStringToClipboard(LinkUrl);
    }
}

function mouseClicked() {
    if(!LinkIsOpen){
        if (i==5) {
            i=-1;
        }
        i++;
    }

    UpdateLink();
}

function keyReleased() {
    UpdateLink();   
}

function UpdateLink(){
    LinkUrl = window.location.href + "?";
    LinkUrl += "y="+inputFieldElements.year.value;
    LinkUrl += "&mon="+inputFieldElements.month.value;
    LinkUrl += "&d="+inputFieldElements.day.value;
    LinkUrl += "&h="+inputFieldElements.hour.value;
    LinkUrl += "&min="+inputFieldElements.minute.value;
    LinkUrl += "&s="+inputFieldElements.second.value;
    LinkUrl += "&t="+inputFieldElements.text.value;
    LinkUrl += "&mode="+inputFieldElements.mode.value;
    LinkUrl=replaceUmlaute(LinkUrl);
    document.getElementById("link-field").value = LinkUrl;
}


function draw() {
    if (floor(millis()/10)%10==0) {
        hintergrund();
    }
    background(r, g, b);
    sekunden=second();
    minuten=minute();
    stunden=hour();
    tage=day();
    //wochen=wochen();
    monate=month();
    jahr=year();
    textSize(50);
    textAlign(CENTER, CENTER);
    fill(0);
    // text(jahr+":"+monate+":"+tage+":"+stunden+":"+minuten+":"+sekunden, width/2, height/2);
    Berechnung();
    textSize(20);
    text("Tippe um die Zeiteinheit" + responsive1 + " zu ändern", width/2, height/1.1);
    
}

function Berechnung() {
    responsive1=" ";
    if (width<1000) {
        textSize(55);
        responsive1="\n";
    }
    var akt = new Date();

    var diff = abs(start.getTime() - akt.getTime());
    var timediff = convertMS(diff);
    var tag = timediff.d;
    var std = timediff.h;
    var min = timediff.m;
    var sec = timediff.s;
    /*print(diff);
   var tag = Math.floor(diff / (1000*60*60*24));
   diff = diff % (1000*60*60*24);
   var std = Math.floor(diff / (1000*60*60));
   diff = diff % (1000*60*60);
   var min = Math.floor(diff / (1000*60));
   diff = diff % (1000*60);
   var sec = Math.floor(diff / 1000);
   var mSec = diff % 1000;*/
    fill('#363030');
    text("Noch", width/2, height/3);
    fill(0);
    switch (i) {
        case 0:
            text(tag + " Tage " + std + " Stunden "+ responsive1  + min+" Minuten " + sec + " Sekunden", width/2, height/2);
            break;
        case 1:
            var InsgesamtSekunden=int(diff/1000);
            text(InsgesamtSekunden + " Sekunden", width/2, height/2);
            break;
        case 2:
            var InsgesamtMinuten=tag*1440+std*60+min;
            text(InsgesamtMinuten + " Minuten", width/2, height/2);
            break;
        case 3:
            var InsgesamtStunden=tag*24+std;
            text(InsgesamtStunden + " Stunden", width/2, height/2);
            break;
        case 4:
            var InsgesamtTage=tag;
            text(InsgesamtTage + " Tage", width/2, height/2);
            break;
        case 5:
            var InsgesamtWochen=Math.floor(tag/7);
            text(InsgesamtWochen+ " Wochen", width/2, height/2);
            break;
    }
    fill('#363030');
    text("bis " + Zweck, width/2, height/1.5);
}

function hintergrund() {
    if (r>=255) {
        rcheck=1;
    } else if (r<=50) {
        rcheck=0;
    }
    if (g>=255) {
        gcheck=1;
    } else if (g<=50) {
        gcheck=0;
    }
    if (b>=255) {
        bcheck=1;
    } else if (b<=50) {
        bcheck=0;
    }

    if (rcheck==0) {
        r++;
    } else {
        r-=2;
    }
    if (gcheck==0) {
        g++;
    } else {
        g--;
    }
    if (bcheck==0) {
        b+=2;
    } else {
        b--;
    }
}

function convertMS(ms) {
    /*    var neg = 1;
    if(ms<0){
        neg = -1;
    }
    var datdiff=new Date(ms);
    console.log(datdiff);
     var d, h, m, s;
    s = datdiff.getSeconds()*neg;
    m = datdiff.getMinutes()*neg;
    h = datdiff.getHours()*neg;
    d = datdiff.getDay()*neg + datdiff.getMonth();*/
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;

    return { 
        d: 
        d, h: 
        h, m: 
        m, s: 
        s 
    };
}

function copyStringToClipboard(copText) {
    //copys string to clipboard by creating a textarea and copying it with document.executeCommand
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = copText;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

const umlautMap = {
  '\u00dc': 'UE',
  '\u00c4': 'AE',
  '\u00d6': 'OE',
  '\u00fc': 'ue',
  '\u00e4': 'ae',
  '\u00f6': 'oe',
  '\u00df': 'ss',
}

function replaceUmlaute(str) {
  return str
    .replace(/[\u00dc|\u00c4|\u00d6][a-z]/g, (a) => {
      const big = umlautMap[a.slice(0, 1)];
      return big.charAt(0) + big.charAt(1).toLowerCase() + a.slice(1);
    })
    .replace(new RegExp('['+Object.keys(umlautMap).join('|')+']',"g"),
      (a) => umlautMap[a]
    );
}