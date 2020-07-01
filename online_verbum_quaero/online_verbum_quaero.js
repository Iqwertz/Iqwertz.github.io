var table;                //Generiert table var.
var eingabe="";           //var für die Sucheingabe
var textsize=0;                // textgröße wird im Setup anhand der Größe und Breite des bILDSCHIRMS BESTIMMT
var efeldtextsize=0;          //Größe der Schriftgröße im Ergebniss feld
var mintextsize=0;            //mindest textgröße, für die Skalierung von zu großen Texten
var Reihe=0;                  //var die die Reihen in der for funktion der Suche zählt
var Zeile=0;                  //bestimmt die Zeilenhöhe in der Such ausgabe
var markzeile=0;              //var die die Markierte Zeile angibt
var numzeile;               //var die die Anzahl der Zeilen pro Tabelle angiebt
var i=0;                  //Blinkstrich-Zähl variable
var mode=1;                //var gibt modus an: 1=Suche 2=Einspeicher 3=Lernen
var write=0;              //schreibmodus: 0=kein Eingabefeld aktieviert 1=Sucheingabefeld aktievirt 2=Latein neu eingabe 3=Endung neu eingabe 4=Deutsch neu eingabe
var S1="";                //var für Spalte 1 in tabelle
var S2="";                //var für Spalte 2 in tabelle
var Seite = 1;            //var für gerade angezeigte Seite
var Spalte1 = 1;              //Modus der ersten Spalte: 1=Latein 2=Endung 3=Deutsch
var Spalte2 = 2;              //Modus der zweiten Spalte: 1=Latein 2=Endung 3=Deutsch
var x;                    //var für Status meldung beim Einspeichern 0= nichts 1=Gespeichert 2=Keine deutsch und/oder lateineingabe
var Spalt1="Latein";            //Zwischen Varable enhält daten ob Latein Deutsch oder Endung in der ersten Spalte angezeigt wird
var Spalt2="Deutsch";            //Zwischen Varable enhält daten ob Latein Deutsch oder Endung in der zweiten Spalte angezeigt wird
var Gluehbirne;        //PImage Variablen für die bilder           
var Plus;        //PImage Variablen für die bilder
var Lupep;        //PImage Variablen für die bilder
var info;         //Pimage für info
var infop=0;      //var für Info button
var ok=0;       // var für ok button
var input, name;  
var mobile;
var deb=0;

function preload() {
  table = loadTable("data/Vocstest.csv", "csv", "header");      //Ladet die daten Tabelle
  Gluehbirne = loadImage("data/Gluehbirne.png");      //Alle Bilder Laden und die größe einstellen:              
  Plus = loadImage("data/Plus.png");
  Lupep = loadImage("data/Lupep.png");
  info = loadImage("data/Info.png");
}

function setup() { 
  textLeading(10);      //text Abstand
  strokeWeight(2);       //linien dicke 
  noStroke();             //keine linien werden angezeigt
  background(161, 227, 245);   //Hintergrundfarbe
  var canvas;
  if (displayWidth>=900) {
    canvas=createCanvas(displayWidth/3, windowHeight);         //canvas size
  } else {
    canvas=createCanvas(displayWidth, windowHeight);
  }
  canvas.parent('verbumquaero');
  canvas.center('horizontal');
  Gluehbirne.resize(width/12, height/20);
  Plus.resize(width/12, height/20);
  Lupep.resize(width/12, height/15);
  info.resize(width, height);
  efeldtextsize=height/27;                       //gleiche wie bei textsize
  textsize=height/25; 
  numzeile=17;      //die max. anzahl an Zeilen in der Tabelle
  Spalte1=1;      //Setzt die erste Spalte auf Latein
  Spalte2=3;      //Setzt die zweite spalte auf Deutsch
  Spalt1="Latein";    
  Spalt2="Deutsch";
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
    input = createInput();
    input.position(width/2, height/14.8);
    input.addClass("inputstyle");
    input.center('horizontal');
    mobile=true;
  } else {
    mobile=false;
  }
}

function draw() {
  background(161, 227, 245); //Resetet den Bildschirm
  noStroke();
  if (deb>0) {
    deb--;
  }
  i++;                    
  if (i>=500) {          //Resettet i für Blink Strich
    i=0;
  }            //checkt und öffnet den aktuellen modus
  Eingabefeld();
  Ergebnisse();
  Modus();                      //Öffnet Menüleiste
  funcinfo();                       //informations knopf
  if (infop!=0 && mobile==true) {
    input.addClass("inputhidden");
  } else if (mobile==true) {
    input.removeClass("inputhidden");
  }
}

function inputeingabe() {
  if (mobile==true) {
    name = input.value();
    eingabe=name;
  }
}


function mousePressed() {                                              //Tetet alle Touchfunktionen ab:
  if (mode==1 && deb==0) {
    if (mobile==true) {
      deb=10;
    } else {
      deb=0;
    }
    if (mouseX>=width*0.93-width/12 && mouseX<=width && mouseY<=height*0.05+width/12) {                     //Info button
      infop=1;
    }
    if (mouseX>=(width/8)*7 && mouseX<=width && mouseY<=height/1.0909 && mouseY>=height*0.2) {            //Funktion für nach links und rechts blättern
      if (Seite<=ceil(Reihe/numzeile)) {
        Seite++;
      } else {
        Seite=1;
      }
    } else if (mouseX<=width/8 && mouseX>=0 && mouseY<=height/1.0909 && mouseY>=height*0.2) {
      if (Seite>1) {
        Seite--;
      } else {
        Seite=ceil(Reihe/numzeile);
      }
    }

    if (mouseX<= width/2 && mouseX>=width/8 && mouseY>=(height/6)-10 && mouseY<=height/6+textsize ) {    //Ändern der Suche von den Spalten(Deutsch, Latein, Endung)
      if (Spalte1==3) {
        Spalte1=1;
      } else {
        Spalte1++;
      }
    }
    if (mouseX>= width/2 && mouseX<=(width/8)*7 && mouseY>=height/6 && mouseY<=height/6+textsize ) {
      if (Spalte2==3) {
        Spalte2=1;
      } else {
        Spalte2++;
      }
    }
    if (mouseX<=(width/8)*7 && mouseX>=width/8 && mouseY<=(height/10)+15 && mouseY>=((height/10)-(textsize+2))-15 ) {        //Aktievirt das Keboard und den Schreibmodus in der Suche
      write=1;
    } else {
      write=0;
    }
  }

  if (mode!=1) {
    if (mouseX>= width/2-width/8 && mouseX<=width/2+width/8 && mouseY>=height/1.65-width/18 && mouseY<=height/1.65+width/18) {
      ok=5;
    }
  }

  if (mouseX>=0 && mouseX<= width/3 && mouseY>=(height/1.09090909)+10) {                          //Bestimmt die Toucheingaben in der Menuleiste und aktievirt den Modus dementsprechend
    mode=2;
  }
  if (mouseX>=width/3 && mouseX<= width*0.666 && mouseY>=(height/1.09090909)+10) {
    mode=1;
  }
  if (mouseX>=width*0.666 && mouseY>=(height/1.09090909)+10) {
    mode=3;
  }
}

function mouseReleased() {
  if (mode!=1) {
    ok=0;
    if (mouseX>= width/2-width/8 && mouseX<=width/2+width/8 && mouseY>=height/1.65-width/18 && mouseY<=height/1.65+width/18) {
      mode=1;
    }
  } else {
    infop=0;
    if (mouseX>=width*0.93-width/12 && mouseX<=width && mouseY<=height*0.05+width/12) {                     //Info button
      image(info, 0, 0);
    }
  }
}

function keyPressed() {            //Funktionen für gedrückte Tasten
  if (keyCode == BACKSPACE || keyCode==DELETE || int(keyCode)==65535) {        //Macht die Löschfunktion und aktievirt sie im dem entsprechenden Eingabefeld
    if (write == 1 && eingabe.length > 0) {
      eingabe = eingabe.substring( 0, eingabe.length-1 );
    }
  } else {
    if (write==1) {    //Ist für die Eingabe verantwortlich
      eingabe = eingabe + key.toLowerCase();
      Seite=1;
    }
  }
} 

function Eingabefeld() {                                                   //Macht das Eingabefeld
  inputeingabe();
  fill('#72D5F0');
  rect(width/8+10, height/15+10, width/1.333, textsize+2, 15);
  fill(170, 255, 128);
  rect(width/8, height/15, width/1.333, textsize+2, 15);
  noStroke();
  strokeWeight(1);

  textSize(textsize);
  textAlign(LEFT, BOTTOM);
  if (eingabe.length==0 && write==0) {      //Wenn Eingabe ist leer Aktiviert den Eingabetext und zählt die Anzahlen der Zeilen
    fill(90);
    text ("Suche in " +table.getRowCount() + " Vokabeln", (width/8)+5, (height/9.6)+textsize/7);
  }
  if (write==1) {                                                      //Macht den blinkenden Eingabestrich
    fill(0);
    text (eingabe, (width/8)+5, (height/10)+textsize/7);
    if (i<=40) {
      stroke(0);
      if (eingabe!="") {
        var sw = textWidth(eingabe);
        line(sw+(width/8)+5, height/10, sw+(width/8)+5, (height/10)-textsize*0.7);
      } else {
        fill(0);
        line((width/8)+10, height/10, (width/8)+10, (height/10)-textsize*0.7);
      }
      noStroke();
    } else {
      if (i>=80) {
        i=0;
      }
    }
  } else if (eingabe.length>0) {
    fill(0);
    text (eingabe, (width/8)+5, (height/10)+textsize/7);        //Bildet den EIngabetext ab
  }
}

function  Ergebnisse() {
  fill('#72D5F0');
  rect(width/8+15, height/6+15, width/1.333, height-height/3.75, 20);
  fill(255);
  rect(width/8, height/6, width/1.333, height-height/3.75, 20);
  fill(240);
  rect(width/2, height/6, (width/1.333)/2, height-height/3.75, 0, 20, 20, 0);
  Reihe=0;
  Zeile=height/6;
  fill(0);
  line(width/2, height/6, width/2, height/1.090909090);
  textAlign(LEFT, TOP);
  switch(Spalte1) {
  case 1:
    text("Latein", (width/4)-15, Zeile);
    Spalt1="Latein";
    break;
  case 2:
    text("Endung", (width/4)-15, Zeile);
    Spalt1="Endung";
    break;
  case 3:
    text("Deutsch", (width/4)-15, Zeile);
    Spalt1="Deutsch";
    break;
  }
  switch(Spalte2) {
  case 1:
    text("Latein", (width/1.65)-15, Zeile);
    Spalt2="Latein";
    break;
  case 2:
    text("Endung", (width/1.65)-15, Zeile);
    Spalt2="Endung";
    break;
  case 3:
    text("Deutsch", (width/1.65)-15, Zeile);
    Spalt2="Deutsch";
    break;
  } 
  var row = table.matchRows(eingabe, Spalt1);
  for (var i = 0; i < row.length; i++) {
    Zeile=Zeile+textsize;
    Reihe++;
    if (Zeile<=(height/1.09)-textsize) {
      if (Reihe<=numzeile*Seite && Reihe>=numzeile*(Seite-1)) {
        S1=row[i].getString(Spalt1);
        S2=row[i].getString(Spalt2);
        textSize(efeldtextsize);
        mintextsize=efeldtextsize;
        while (textWidth(S2)>(width/2.6666666)-20) {
          if (mintextsize>7) {
            mintextsize=mintextsize-1;
          }
          textSize(mintextsize);
        }   
        text(S2, (width/2)+10, Zeile);
        mintextsize=efeldtextsize;
        textSize(mintextsize);
        while (textWidth(S1)>(width/2.6666666)-20) {
          if (mintextsize>7) {
            mintextsize=mintextsize-1;
          }
          textSize(mintextsize);
        }
        text(S1, (width/8)+10, Zeile);
        mintextsize=textsize;
      }
    } else {
      Zeile=height/6;
    }
  } 
  fill(100);
  stroke(0);
  strokeWeight(5.0);
  strokeCap(ROUND);
  line(width-textsize*1.5, height/2-textsize, width-textsize/2, height/2);            //Pfeile nach links und Rechts
  line(width-textsize/2, height/2, width-textsize*1.5, height/2+textsize);
  line(0+textsize*1.5, height/2-textsize, 0+textsize/2, height/2);
  line(0+textsize/2, height/2, 0+textsize*1.5, height/2+textsize);
  noStroke();
} 

function Modus() {
  noStroke();
  fill(50);
  rect(0, (height/1.09090909)+5, width, height/12+5);
  image(Gluehbirne, width*0.8, height/1.070909 );
  image(Plus, width*0.15, height/1.070909 );
  image(Lupep, width*0.47, height/1.080909 );
  if (mode!=1) {
    Appnote();
  }
} 

function Appnote() {
  //ok=0;
  rectMode(CENTER);
  background(50, 50, 50, 80);
  fill(255);
  stroke(161, 227, 245);
  strokeWeight(5);
  rect(width/2, height/2, width/1.2, height/2.5, 20);
  noStroke();
  fill('#72D5F0'); 
  rect(width/2+5, height/1.6+5, width/4, width/9, 40);
  fill(170, 255, 128);
  rect(width/2+ok, height/1.6+ok, width/4, width/9, 40);
  fill(0);
  textSize(40);
  textAlign(CENTER);
  text("APP", width/2, height/2.8);
  textSize(35);
  text("OK", width/2+ok, height/1.68+ok);
  textSize(15);
  text("Die Funktionen \"Vokabel einspeichern\" \n und \"Vokabel lernen\" sind nur in der \nVerbum Quaero App verfügbar,\n welche bald in den Playstore kommt.", width/2, height/2.3); 
  rectMode(CORNER);
}

function funcinfo() {
  ellipseMode(CENTER); 
  fill('#72D5F0'); 
  ellipse(width*0.93+7, height*0.05+7, width/13, width/13);
  fill(50);
  ellipse(width*0.93, height*0.05, width/13, width/13);
  fill(255);
  textAlign(CENTER);
  textSize(22);
  text("i", width*0.93, height*0.03);
  if (infop==1) {
    image(info, 0, 0);
  }
}
