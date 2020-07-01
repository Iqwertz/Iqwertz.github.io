/*

1 -->  2      5 <-- 6
^                   ^
3  <-- 4      7 --> 8

*/
var h=[]
var units=1500;
var radius=5;
var transparent=true;
var    fadealpha=1;  //Fading effekt strength
var bgcolor='rgba(0, 0, 0, 0.1)';   //Background color / 0.2 is Alpha value for Fading effekt
var move=true;
var dicke=2;
var speed=500;
var colormodus=1;
var CurveColor='#0aad63';
var CurveColor2='#0007af';
var MouseMode=0;

var XTarget=[];         //Array containig every point on the Letters
var YTarget=[];         // Same with Y          
var font;                //var for the font
var word="Curves.js";  //containig the displayed word
var WriteWord=true;      //boolean if the word should be displayed or not
var TextSize=200;      //textSize for the Text
var WriteSpeed=10;     //Speed of the particles
var TextDelay=10;         //Delay in 0.1 Seconds. When 90% of the dots are on there position it starts to count and when writeSpeed*100 is reched it displays the next word
var numWord=0;       //Counts the number of words if its a sentence
var oldmillis=0;    //takes the millis() (for counting)
var WordOrder=[];    //An array for Words if there are to much to fit into the Screen
var RepeatWords=false;    //loop threw the words?
var CountPosition=0;  //Counts the Amount of particles which are on the Right Position

var font;                //var for the font

var canvas;

var f1;      
var f2;
//var fspeed;
var fcolor;
//var fstart;
var fmouse;
var fwords;

var vars = {   
    // Variable for dat.gui (Controls) 
    units:units,
    radius:radius,
    thickness:dicke,
    velocity:speed,
    transparent:transparent,
    FadingDuration:fadealpha,
    bgcolor:bgcolor,
    move:move,
    clearScreen: function() { background(color(red(color(bgcolor)),green(color(bgcolor)),blue(color(bgcolor))));} ,//clear the Screen
    reset: function() {reset()},
    Screenshot: function(){doScreenShot()},
    colorModus:colormodus,
    CurveColor:CurveColor,
    CurveColor2:CurveColor2,
    MouseMode:MouseMode,
    WriteWord:WriteWord,
    TextSize:TextSize,
    WriteSpeed:WriteSpeed,
    TextDelay:TextDelay,
    RepeatWords:RepeatWords,
    word:word
}

function preload() {
    font = loadFont('data/OpenSans-Light.ttf');    
}

function setup() {
    canvas=createCanvas(windowWidth, windowHeight);    //define Canvas
    canvas.parent('CurvesJs');                      //link canvas with Css class
    background(0);
    smooth(20);
    createGUI();      //creates the controls Windows
    frameRate(30);

    if(WriteWord){
        genWord(word);
    }

    for (var i=0; i<units; i++) {                  //Create the Lines
        h.push(new Curve(width/2, height/2, CurveColor,CurveColor2,speed, radius)); 
    }
}

function windowResized() {             //Resize Canvas when Window Resizes
    canvas=resizeCanvas(windowWidth, windowHeight);
    background(color(red(color(bgcolor)),green(color(bgcolor)),blue(color(bgcolor))));
    if(WriteWord){
        reset();
    }
}

function draw() { 
    updateVars();

    if(WordOrder.length>0){
        TextShorten("nix",0);  
    }

    if (transparent && move) {    //transparent mode
        noStroke();             
        fill(color(bgcolor));
        if(int(millis()%fadealpha)==0){   //fades less if fadealpha is higher
            rect(0, 0, width, height);   //draws a rectangel over the screnn with low Opacity for a fading effekt
        }
    }
    if(move){
        for (var i=0; i<h.length; i++) {   //update the Lines
            h[i].display();
        }
    }
    //  for(var i=0;i<XTarget.length;i++){
    //    point(XTarget[i],YTarget[i]);
    //}
} 

class Curve { 
    constructor(x,y,c,c2,v,r) {  
        this.xpos = x;
        this.ypos = y; 
        this.farb=c;
        this.farb2=c2;
        this.art=int(random(8));
        this.speed=v;
        this.radius=r;
        this.i=0;
        if(WriteWord){
            this.speed=int(WriteSpeed);
            this.i=151;
        }
        this.colorCurve=decideColor(this.farb,this.farb2,this.art);

        this.trand=int(random(XTarget.length));
        this.targlength=XTarget.length;
        this.TargetX=XTarget[this.trand];
        this.TargetY=YTarget[this.trand];
        this.OnPosition=false;
    } 

    display() { 
        if (this.i>=151) {

            if(!WriteWord && radius!=this.radius){
                this.radius=radius;
            }

            var neworient;

            if(WriteWord){


                if(this.targlength!=XTarget.length){
                    this.trand=int(random(XTarget.length));
                    this.targlength=XTarget.length;
                }
                this.TargetX=XTarget[this.trand];
                this.TargetY=YTarget[this.trand];

                stroke('#ef0808');
               // point(XTarget[this.trand],YTarget[this.trand]);

                var i=int(dist(this.TargetX,this.TargetY,this.xpos,this.ypos));
                if(i<=1){
                    i=1;
                }
                this.speed=WriteSpeed*i/10;
                if(this.speed>=150){
                    this.speed=149;
                }
                if(i>20){
                    this.radius=i/6;
                }else{
                    this.radius=radius;
                }
                if(radius>height/4){
                    random(height/8,height/4)
                }
                if(WriteSpeed*(i/dist(0,0,width/2,height/2))<0.2 && !this.OnPosition){
                    CountPosition++;
                    this.OnPosition=true;
                }else{
                    this.OnPosition=false;
                }
                neworient=decideorient(this.art,this.xpos,this.ypos,this.TargetX,this.TargetY,this.radius);
            }else if(MouseMode==1 || MouseMode==2){
                neworient=decideorient(this.art,this.xpos,this.ypos,mouseX,mouseY,this.radius);
            }else if(MouseMode==0){
                neworient=decideorient(this.art,this.xpos,this.ypos,-1,-1,this.radius);
            }
            this.art=neworient[0];
            this.xpos=neworient[1];
            this.ypos=neworient[2];
            this.i=1;
            if(colormodus!=3){
                this.colorCurve=decideColor(this.farb,this.farb2,this.art)
            }
        }
        if (this.xpos>width) {
            this.xpos=0;
        }
        if (this.xpos<0) {
            this.xpos=width;
        }
        if (this.ypos>height) {
            this.ypos=0;
        }
        if (this.ypos<0) {
            this.ypos=height;
        }
        if(this.radius<=0.5){
            this.radius=random(1,3);
        }
        Kurve(this.xpos, this.ypos, this.art, this.i, this.colorCurve, this.radius);
        this.i+=this.speed;
    }
}

function Kurve(xPos, yPos, art, count, Farbe, specRadius) {                                         
    stroke(color(Farbe));
    strokeWeight(dicke);
    noFill(); 
    switch (art) {
        case 1:
            arc(xPos, yPos, specRadius, specRadius, PI, PI+PI/360*count);
            break;
        case 2:
            arc(xPos, yPos, specRadius, specRadius, HALF_PI+PI, HALF_PI+PI+0+PI/360*count);
            break;
        case 3:
            arc(xPos, yPos, specRadius, specRadius, HALF_PI, HALF_PI+0+PI/360*count);
            break;
        case 4:
            arc(xPos, yPos, specRadius, specRadius, 0, 0+PI/360*count);
            break;
        case 5:
            arc(xPos, yPos, specRadius, specRadius, PI+HALF_PI-PI/360*count, PI+HALF_PI);
            break;
        case 6:           
            arc(xPos, yPos, specRadius, specRadius, 0-PI/360*count, 0);
            break;
        case 7:
            arc(xPos, yPos, specRadius, specRadius, PI-PI/360*count, PI);
            break;
        case 8:
            arc(xPos, yPos, specRadius, specRadius, HALF_PI-PI/360*count, HALF_PI);
            break;
    }
}

var decideColor = function(c1,c2,typ){
    var newColor='#000000';
    if(colormodus==1) {
        newColor=c1;
    } else if(colormodus==2 ||colormodus==3){
        switch(typ) {
            case 1:
                newColor=lerpColor(color(c1), color(c2), 0);
                break;
            case 2:
                newColor=lerpColor(color(c1), color(c2), 0.14);
                break;
            case 3:
                newColor=lerpColor(color(c1), color(c2), 0.28);
                break;
            case 4:
                newColor=lerpColor(color(c1), color(c2), 0.42);
                break;
            case 5:
                newColor=lerpColor(color(c1), color(c2), 0.56);
                break;
            case 6:
                newColor=lerpColor(color(c1), color(c2), 0.7);
                break;
            case 7:
                newColor=lerpColor(color(c1), color(c2), 0.84);
                break;
            case 8:
                newColor=lerpColor(color(c1), color(c2), 1);
                break;
        }   
    }
    return(newColor);
}

var decideorient = function(typ,xpos,ypos, ZielX, ZielY, specRadius) {
    var l;
    if(ZielX==-1 && ZielY==-1){
        l=int(random(2));
    } else {
        if(floor(random(2))==1){  //desides direction depending on Mouse position
            if(xpos<ZielX){
                if(typ==2 || typ==8){
                    l=1;
                }else if(typ==3 || typ==5){
                    l=0;
                }else{
                    l=int(random(2));
                }
            }else{
                if(typ==2 || typ==8){
                    l=0;
                }else if(typ==3 || typ==5){
                    l=1;
                }else{
                    l=int(random(2));
                }
            }
        }else{
            if(ypos<ZielY){
                if(typ==4 || typ==7){
                    l=1;
                }else if(typ==1 || typ==6){
                    l=0;
                }else{
                    l=int(random(2));
                }
            }else{
                if(typ==4 || typ==7){
                    l=0;
                }else if(typ==1 || typ==6){
                    l=1;
                }else{
                    l=int(random(2));
                }
            }
        }
    }

    if(MouseMode==2 && !WriteWord){
        if(l==1){
            l=0;
        }else{
            l=1;
        }
    }

    switch(typ) {
        case 1:
            typ = l==0 ? 2 : 8;
            if (l==1) {
                ypos-=specRadius;
            }
            break;
        case 2:
            typ = l==0 ? 4 : 7;
            if (l==1) {
                xpos+=specRadius;
            }
            break;
        case 3:
            typ = l==0 ? 1 : 6;
            if (l==1) {
                xpos-=specRadius;
            }
            break;
        case 4:
            typ = l==0 ? 3 : 5;
            if (l==1) {
                ypos+=specRadius;
            }
            break;
        case 5:
            typ = l==0 ? 7 : 4;
            if (l==1) {
                xpos-=specRadius;
            }
            break;
        case 6:
            typ = l==0 ? 5 : 3;
            if (l==1) {
                ypos-=specRadius;
            }
            break;
        case 7:
            typ = l==0 ? 8 : 2;
            if (l==1) {
                ypos+=specRadius;
            }
            break;
        case 8:
            typ = l==0 ? 6 : 1;
            if (l==1) {
                xpos+=specRadius;
            }
            break;
    }
    return [typ,xpos,ypos];
};

function genWord(text) {
    textAlign(CENTER,CENTER);
    textSize(TextSize);
    if(text.includes(" ")){
        TextShorten(text, 1);
    }else{
        var points = font.textToPoints(text, width/2-(textWidth(text)/2), height/2+(TextSize/4), TextSize, {
            sampleFactor: 0.3,
            simplifyThreshold: 0
        });
        XTarget=[];
        YTarget=[];
        for (var i = 0; i < points.length; i++) {
            var pt = points[i];
            XTarget[i]=pt.x;
            YTarget[i]=pt.y;
        }
    }
}

function TextShorten(Sentence, neu){
    if(neu){
        WordOrder = split(Sentence, ' ');
        stat=1;
        numWord=0;
        oldmillis=millis();
        genWord(WordOrder[numWord]);
        numWord++;
    }
    if(numWord<WordOrder.length){
        if(CountPosition>units*0.9){
            if(millis()-oldmillis>=TextDelay*1000 && WordOrder.length>0){
                genWord(WordOrder[numWord]);
                numWord++;
                oldmillis=millis();
                CountPosition=0;
            }
        }else{
            oldmillis=millis();
        }
    }else{
        if (RepeatWords){
            numWord=0;
        }else{
            WordOrder=[];
        }
    }
}

function doScreenShot(){
    saveCanvas("CurvesJs","png");
}

function reset(){       //resets everything
    updateVars();          //updates variables
    genWord(word);
    background(color(red(color(bgcolor)),green(color(bgcolor)),blue(color(bgcolor))));  //Clears backgound with 1 as alpha value
    h=[];  //clears Array
    for (var i=0; i<units; i++) {                  //Create the Curves
        h.push(new Curve(width/2, height/2, CurveColor,CurveColor2,speed,radius)); 
    }
}

function createGUI() { 
    gui = new dat.GUI;  //defines gui 

    f1 = gui.addFolder('Curve');
    f1.add(vars, 'units').min(0).step(1).onChange(function(value) {reset();}); 
    f1.add(vars, 'thickness').onChange(function(value) {reset();});
    f1.add(vars, 'radius').min(0).step(1).onChange(function(value) {reset();});
    f1.add(vars, 'velocity').onChange(function(value) {reset();});

    fcolor = f1.addFolder('Colors');
    fcolor.add(vars,'colorModus', { OneColor: 1, Direction: 2, MultipleColors: 3 }).onChange(function(value){colormodus=vars.colorModus;});
    fcolor.addColor(vars,'CurveColor').onFinishChange(function(value) {reset();});
    fcolor.addColor(vars,'CurveColor2').onFinishChange(function(value) {reset();});

    fmouse =gui.addFolder('MouseEvents');
    fmouse.add(vars,'MouseMode', {None:0, Follow:1, Flee:2 });//Draw:3

    fwords=gui.addFolder('Words');
    fwords.add(vars,"WriteWord").listen().onChange(function(value) {if(vars.WriteWord){vars.Draw=false;} genWord(word);});
    fwords.add(vars,"TextSize");
    fwords.add(vars,"WriteSpeed");
    fwords.add(vars,"TextDelay");
    fwords.add(vars,"RepeatWords").onFinishChange(function(value) {genWord(vars.word); });
    fwords.add(vars,'word').onFinishChange(function(value) {WordOrder=[];genWord(vars.word); reset();});
    //define Gui Structure
    /*gui.add(vars, 'preset', {Default: 'Default', RandomLines: 'RandomLines', Draw: 'Draw', Lines: 'Lines', MouseFollow:'MouseFollow', Matrix:'Matrix'}).onChange(function(value){newPreset(); reset();});

    fspeed = f1.addFolder('speed');
    fspeed.add(vars, 'velocity').onChange(function(value) {reset();});
    fspeed.add(vars, 'velocityMode',{ None:0, RandomStart: 1, CompleteRandom: 2, MouseDistance: 3, InvertMouseDistance:4}).onChange(function(value){reset();});


    fstart = f1.addFolder('Start');
    fstart.add(vars,'Random').listen().onChange(function(value) {vars.StartX=0; vars.StartY=0; vars.Center=false; reset();});
    fstart.add(vars,'Center').listen().onChange(function(value) {vars.StartX=0; vars.StartY=0; vars.Random=false; reset();});
    fstart.add(vars, 'StartX').min(0).step(1).onChange(function(value) {vars.Random=false; vars.Center=false;reset();});
    fstart.add(vars,'StartY').min(0).step(1).onChange(function(value) {vars.Random=false; vars.Center=false; reset();});

    f2 = gui.addFolder('Background');
    f2.add(vars, 'FadingDuration');
    f2.addColor(vars, 'bgcolor').onChange(function(value) {background(vars.bgcolor);});

    fmouse =gui.addFolder('MouseEvents');
    fmouse.add(vars,'MouseMode', {None:0, Follow:1, Flee:2, Draw:3});
    fmouse.add(vars,'Draw').listen().onChange(function(value) {if(vars.Draw){ vars.WriteWord=false;}});
    fmouse.add(vars,'ClearDraw');
    fmouse.add(vars,'ShowLines');



    if(edit){
        gui.remember(vars);
    }*/
    f2 = gui.addFolder('Background');
    f2.add(vars, 'FadingDuration');
    f2.addColor(vars, 'bgcolor').onChange(function(value) {background(vars.bgcolor);});

    gui.add(vars,'transparent');
    gui.add(vars,'move');
    gui.add(vars, 'Screenshot');
    gui.add(vars,'clearScreen');
    gui.add(vars, 'reset');

}

function updateVars(){  //Updtes the Global vars with them from the Sketch
    units=vars.units;
    radius=vars.radius;
    dicke=vars.thickness;
    move=vars.move;
    transparent=vars.transparent;
    bgcolor=vars.bgcolor;
    fadealpha=vars.FadingDuration;
    speed=vars.velocity;
    colormodus=vars.colorModus;
    CurveColor=vars.CurveColor;
    CurveColor2=vars.CurveColor2;
    MouseMode=vars.MouseMode;
    WriteSpeed=vars.WriteSpeed;
    WriteWord=vars.WriteWord;
    RepeatWords=vars.RepeatWords;
    TextSize=vars.TextSize;
    TextDelay=vars.TextDelay;
    word=vars.word;
}


var update = function() {     //Update function
    requestAnimationFrame(update);
};