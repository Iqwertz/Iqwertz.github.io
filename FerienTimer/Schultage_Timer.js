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

function preload() {
  myFont = loadFont('data/CourierPrime.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#00F2A3');
  textFont(myFont);
}

function mouseClicked() {
  if (i==5) {
    i=-1;
  }
  i++;
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

  var diff = (akt.getTime() - start.getTime())*-1;
    var timediff =convertMS(diff);
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
  fill('#363030')
    text("Noch", width/2, height/3)
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
  text("bis zu den Sommerferien", width/2, height/1.5)
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
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return { d: d, h: h, m: m, s: s };
}
