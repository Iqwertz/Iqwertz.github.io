/*
Bugs:
Date function
Timer function needs to be made
When you press r it changes velocityMode
*/

var    l = [];        // Line Array
var    canvas;        // Canvas Element     
var    units= 1500;     // number of Lines drawn
var    stärke=1.0;    //Thickness of the Lines
var    StartX=0.0;    //Start point X
var    StartY=0.0;    //Start point Y
var    Center=true;   //Start in the Center?
var    velocity=1;    //Velocity of the Lines
var    randomMode=0;  //0= not Random 1=Random at the Start 2=Random when the direction changes 3=V changes on Mousedistance, 4= V changes on Invert ;ouse distance
var    colorLine='#38bf96';   //Main COlor of the Line
var    colorLinetwo='#c30000';  //SeconColor of the Line for Lerp() 
var    minl=1;  //minimum length of the Line
var    maxl=1;   //maximum Length of the Line
var    transparent=true;   //Fading Effekt
var    move=true;   //movement on/off
var    dotted=false;   //dotted lines?
var    colorModus=1 //1=normal Color, 2=Color changes if direction changes, 3=color changes if line crosses another one, 4=Same as three but with random colors
var    fadealpha=1;  //Fading effekt strength
var    bgcolor='rgba(0, 0, 0, 0.09)';   //Background color / 0.2 is Alpha value for Fading effekt
var    MouseMode=1;         //0 no Action on Mouse, 1 Lines try to reych MOuse, 2 Lines try to move away from Mouse
var XTarget=[];         //Array containig every point on the Letters
var YTarget=[];         // Same with Y          
var font;                //var for the font
var word="Hello, on Lines.js created by Julius Hussl Lines.js";  //containig the displayed word
var WriteWord=true;      //boolean if the word should be displayed or not
//var ShowDate=false;     //boolean if Date should be shown
//var DateMode=1;      //0=Day/Month/Year, 1=Hour/Minutes, 2=Day/Month/Year/Hour/Minutes
//var DateDisplayed=0;  //saves the current date
//var Timer=false; //boolean if Date should be shown
var TextSize=200;      //textSize for the Text
var WriteSpeed=150;     //Speed of the particles
var TextDelay=2;         //Delay in 0.1 Seconds. When 90% of the dots are on there position it starts to count and when writeSpeed*100 is reched it displays the next word
var numWord=0;       //Counts the number of words if its a sentence
var oldmillis=0;    //takes the millis() (for counting)
var WordOrder=[];    //An array for Words if there are to much to fit into the Screen
var RepeatWords=false;    //loop threw the words?
var CountPosition=0;  //Counts the Amount of particles which are on the Right Position
var DrawX=[];           //Position of the X Points frome the drawing
var DrawY=[];           //Same with Y
var Drawpoints=0;      //Index var for DrawX and Y
var Draw=false;        //Shold the Lines draw the drawing?
var ShowLines=true;       //Otlines 

var gui;                //dat.Gui variable
var presetData;         //var containig json 
var edit=false;         //edit var
//vars for folders, They mustnt stay public can also stay in the createGui() function
var f1;      
var f2;
var fspeed;
var fcolor;
var fstart;
var fmouse;
var fwords;

var vars = {      // Variable for dat.gui (Controls) 
    preset: 'Default',
    units: units,  //40
    thickness: stärke,
    StartX: StartX,
    StartY: StartY,
    Random:false,    //Random Start?
    Center: Center, 
    velocity: velocity,
    velocityMode: randomMode,
    LineColor:colorLine,
    LineColor2:colorLinetwo,
    minl: minl,
    maxl: maxl,
    transparent: transparent,
    move: move,
    dotted: dotted,
    colorModus: colorModus, //1=normal Color, 2=Color changes if direction changes, 3=color changes if line crosses another one, 4=Same as three but with random colors
    FadingDuration: fadealpha,  //5
    bgcolor: bgcolor,
    reset: function() {reset()},   //button to reset the screen
    MouseMode: MouseMode,
    clearScreen: function() { background(color(red(color(bgcolor)),green(color(bgcolor)),blue(color(bgcolor))));} ,//clear the Screen
    word: word,
    WriteWord: WriteWord,
    WriteSpeed: WriteSpeed,
    TextDelay: TextDelay,
    RepeatWords: RepeatWords,
    TextSize: TextSize,
    Draw: Draw,
    ClearDraw: function(){DrawX=[];DrawY=[]; Drawpoints=0;},
    ShowLines: ShowLines,
    Screenshot: function(){doScreenShot()},
 //   Date: ShowDate,
   // DateMode: DateMode
}

function preload() {
    font = loadFont('data/Roboto-Bold.ttf');    
    presetData = loadJSON('data/Presets.JSON');
}

function setup() {     
   // print(genDate());
    canvas=createCanvas(windowWidth, windowHeight);    //define Canvas
    canvas.parent('linenine');                      //link canvas with Css class
    background(color('#000000'));           //set background color
    StartX=width/2;        //Set Start X point
    StartY=height/2;       //Set start Y point
    var params = getURLParams();
    if(params.word!=null){
        word=params.word;
        vars.word=word;
    }
    createGUI();      //creates the controls Window
    if(WriteWord){
        genWord(word);
    }
    for (var i=0; i<units; i++) {                  //Create the Lines
        l.push(new Line(StartX, StartY, velocity, stärke, colorLine, colorLinetwo, minl, maxl)); 
    }
}

function windowResized() {             //Resize Canvas when Window Resizes
    canvas=resizeCanvas(windowWidth, windowHeight);
    background(color(red(color(bgcolor)),green(color(bgcolor)),blue(color(bgcolor))));
}

function draw() {             //draw loop 
    updateVars();              //updates every Variable from the (controls)
    if(WordOrder.length>0){
        TextShorten("nix",0);  
    }
    if(ShowDate){
        if(DateDisplayed!=day()+month()+year()){
            vars.word=genDate();
            DateDisplayed=day()+month()+year();
        }
    }
    if (transparent && move) {    //transparent mode
        noStroke();             
        fill(color(bgcolor));
        if(int(millis()%fadealpha)==0){   //fades less if fadealpha is higher
            rect(0, 0, width, height);   //draws a rectangel over the screnn with low Opacity for a fading effekt
        }
    }
    if (move) {             //When movement
        for (var i=0; i<l.length; i++) {   //update the Lines
            l[i].display();
        }
    }
    if(ShowLines){
        for(var i=0;i<DrawX.length;i++){
            point(DrawX[i],DrawY[i]);
        }
    }
}

class Line {             //Line Class
    constructor(xpos, ypos, geschw, dicke, col, coltwo, minrandomfaktor, maxrandomfaktor) {  //Defines all the vars
        if(randomMode==1) {            //when random velocity is true than generate al random value between 0 and geschw
            this.v=random(geschw)
        } else if(randomMode==2 || randomMode==3 || randomMode==4){
            this.vMax=geschw;
            this.v=random(geschw);
        }else{
            this.v=geschw;
        }
        this.weight=dicke;
        this.strecke=int(random(minrandomfaktor, maxrandomfaktor));
        this.minrf=minrandomfaktor;
        this.maxrf=maxrandomfaktor;
        this.c=col;
        this.ctwo=coltwo;
        if(Center && xpos==0 && ypos==0){      //If Center Mode active
            this.x=width/2;
            this.y=height/2;
        } else if(xpos==0 && ypos==0){  //StartX =0 and Start Y=0 and !Center means random Start
            this.x=random(width);
            this.y=random(height);
        }else{                         //Take the Defined Start Cordinates
            this.x=xpos;
            this.y=ypos;
        }
        this.dir=floor(random(1, 5));     //Random Start direction
        this.i=0;                          //Counting var for length messurment
        this.n=0                      //Counting var to Circle threw Colors
        this.trand=int(random(XTarget.length));
        this.targlength=XTarget.length;
        this.TargetX=XTarget[this.trand];
        this.TargetY=YTarget[this.trand];
        this.OnPosition=false;
    }

    display() {
        var lastX;      //Previous X Var when !dotted
        var lastY;      //Previous Y Var when !dotted
        if (this.x>width) {    //Teleport on the other Side when over Borders
            this.x=0;
        }
        if (this.x<0) {
            this.x=width;
        }
        if (this.y>height) {
            this.y=0;
        }
        if (this.y<0) {
            this.y=height;
        }
        if(!dotted){      //Remembers last X & Y when !dotted
            var lastX=this.x;
            var lastY=this.y;
        }
        if(randomMode==3||randomMode==4){
            var vd=dist(this.x,this.y,mouseX,mouseY);
            if(randomMode==3){
                this.v=random(((this.vMax/vd)*this.vMax)/3,(this.vMax/vd)*this.vMax);
            }else{
                this.v=random(1/((dist(0,0,width,height)/vd)*this.vMax)/2,1/(dist(0,0,width,height)/vd)*this.vMax);
            }
        }

        if (this.i>this.strecke) {        //when mesurment is bigger then the decided length it decids a new direction and length
            if(randomMode==2){
                this.v=random(this.vMax);
            }
            if(WriteWord){
                if(this.targlength!=XTarget.length){
                    this.trand=int(random(XTarget.length));
                    this.targlength=XTarget.length;
                }
                this.TargetX=XTarget[this.trand];
                this.TargetY=YTarget[this.trand];
            } else if(Draw){
                if(this.targlength!=DrawX.length){
                    this.trand=int(random(DrawX.length));
                    this.targlength=DrawX.length;
                }
                this.TargetX=DrawX[this.trand];
                this.TargetY=DrawY[this.trand];
            }
            this.strecke=int(random(this.minrf, this.maxrf));   //new random length
            var privdir=this.dir+2;        //Prevents the Line from turning 180°
            if (this.dir==4) {
                privdir=2;
            } else if (this.dir==3) {
                privdir=1;
            }
            if(MouseMode==1){
                if(floor(random(2))==1){  //desides direction depending on Mouse position
                    if(this.x<mouseX){
                        this.dir=2;
                    }else{
                        this.dir=4;
                    }
                }else{
                    if(this.y<mouseY){
                        this.dir=3;
                    }else{
                        this.dir=1;
                    }
                }
            } else if(MouseMode==2){
                if(floor(random(2))==1){  //desides direction depending on Mouse position
                    if(this.x>mouseX){
                        this.dir=2;
                    }else{
                        this.dir=4;
                    }
                }else{
                    if(this.y>mouseY){
                        this.dir=3;
                    }else{
                        this.dir=1;
                    } 
                }
            }else{
                this.dir=floor(random(1, 5));
            }
            if(this.v<=0.5){
                this.v=1;
            }
            if(WriteWord || Draw || Date){
                var i=int(dist(this.TargetX,this.TargetY,this.x,this.y));
                this.v=random(2,(WriteSpeed*(i/dist(0,0,width/2,height/2))));
                if(WriteWord){
                    if(WriteSpeed*(i/dist(0,0,width/2,height/2))<0.2 && !this.OnPosition){
                        CountPosition++;
                        this.OnPosition=true;
                    }else{
                        this.OnPosition=false;
                    }
                }
                if(floor(random(2))==1){ 
                    if(this.x<this.TargetX){
                        this.dir=2;
                    }else{
                        this.dir=4;
                    }
                }else{
                    if(this.y<this.TargetY){
                        this.dir=3;
                    }else{
                        this.dir=1;
                    }
                }
            }
            while (privdir==this.dir) {
                this.dir=floor(random(1, 5));
            }
            this.i=0;                   //Resets Counting mesurment
        } else {
            this.i+=this.v;   //if i is smaller than the length than increas by velocity
        }
        switch(this.dir) {            //changes x or y values depending on the direction
            case 1:
                this.y-=this.v;
                break;
            case 2:
                this.x+=this.v;
                break;
            case 3:
                this.y+=this.v;
                break;
            case 4:
                this.x-=this.v;
                break;
        }
        var strokecol='#000000';  //resets color
        if(colorModus==1){       //when Color mode is 1 default color
            strokecol=(this.c)
        } else if(colorModus==2){      //when Color Mode is 2 than change color depending on direction
            switch(this.dir) {
                case 1:
                    strokecol=lerpColor(color(this.c), color(this.ctwo), 0);      //Calculates Lerp Color
                    break;
                case 2:
                    strokecol=lerpColor(color(this.c), color(this.ctwo), 0.33); //Calculates Lerp Color
                    break;
                case 3:
                    strokecol=lerpColor(color(this.c), color(this.ctwo), 0.66); //Calculates Lerp Color
                    break;
                case 4:
                    strokecol=lerpColor(color(this.c), color(this.ctwo), 1); //Calculates Lerp Color
                    break;
            }

        }else if(colorModus==3 || colorModus==4){   //when Color Mode is 3/4 than change color every step
            if(int(millis()%this.v*3)==1){     //Decides when COlor Changes
                this.n++;
            }
            if (this.n==5) {
                this.n=1;
            }
            if(colorModus==3){      //change color with lerp colors
                switch(this.n) {
                    case 1: 
                        strokecol=lerpColor(color(this.c), color(this.ctwo), 0);  //Calculates Lerp Color
                        break;
                    case 2:
                        strokecol=lerpColor(color(this.c), color(this.ctwo), 0.33);  //Calculates Lerp Color
                        break;
                    case 3:
                        strokecol=lerpColor(color(this.c), color(this.ctwo), 0.66);  //Calculates Lerp Color
                        break;
                    case 4:
                        strokecol=lerpColor(color(this.c), color(this.ctwo), 1);  //Calculates Lerp Color
                        break;
                }
            }else{
                strokecol=color(random(255), random(255), random(255)); //Calculates Random Color
            }
        }else{
            strokecol=(this.c) //default
        }
        stroke(strokecol);  //sets Line color
        strokeWeight(this.weight);  //sets line thickness

        if(dotted){          //if dotted draw dots
            point(this.x,this.y)
        }else{           //!dotted draw Line between last Cordinates and new Cordinates
            strokeCap(round);
            line(this.x,this.y,lastX,lastY)
        }
    }
}

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

function genDate(){
var TheDate="Error";
    if(DateMode==0){
        TheDate=day()+'.'+month()+'.'+year();
    }else if(DateMode==1){
           TheDate=hour()+':'+minute();
    }else if(DateMode==2){
            TheDate=hour()+':'+minute()+'.'+day()+'.'+month()+'.'+year();
    }
    return TheDate;
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
function keyTyped() {          //Key Codes
    if (key=='c') {     
        background(bgcolor);
    } else if (key=='t') {
        transparent^=true;
    } else if (key=='r') {
        reset();
    } else if (key==' ') {
        move^=true;
    }else if (key=='s') {
        doScreenShot();
    } else if (key=='e'){
        edit^=true;
        if(edit){
            gui.remember(vars);
        }
    }
} 

function mouseDragged(){
    if(MouseMode==3){
        var drawdens=2;
        var d=dist(mouseX,mouseY,pmouseX, pmouseY);
        if(d>3){
            var factor=drawdens/d;
            for(var i=0;i<=1;i+=factor){
                DrawX[Drawpoints]=lerp(pmouseX, mouseX, i);
                DrawY[Drawpoints]=lerp(pmouseY, mouseY, i);
                Drawpoints++;
            }
        }
    }
}

function reset(){       //resets everything
    updateVars();          //updates variables
    genWord(word);
    background(color(red(color(bgcolor)),green(color(bgcolor)),blue(color(bgcolor))));  //Clears backgound with 1 as alpha value
    l=[];  //clears Array
    for (var i=0; i<units; i++) {  //defines new Lines
        l[i] = new Line(StartX, StartY, velocity, stärke, colorLine,colorLinetwo, minl, maxl);
    }
}

function doScreenShot(){
    saveCanvas("LinesJs","png");
}

function createGUI() { 
    gui = new dat.GUI;  //defines gui 
    //define Gui Structure
    gui.add(vars, 'preset', {Default: 'Default', RandomLines: 'RandomLines', Draw: 'Draw', Lines: 'Lines', MouseFollow:'MouseFollow', Matrix:'Matrix'}).onChange(function(value){newPreset(); reset();});

    f1 = gui.addFolder('Line');
    f1.add(vars, 'units').min(0).step(1).onChange(function(value) {reset();}); 
    f1.add(vars, 'thickness').onChange(function(value) {reset();});
    f1.add(vars, 'minl' ).min(0).step(1).onChange(function(value) {reset();});
    f1.add(vars, 'maxl').min(0).step(1).onChange(function(value) {reset();});

    fspeed = f1.addFolder('speed');
    fspeed.add(vars, 'velocity').onChange(function(value) {reset();});
    fspeed.add(vars, 'velocityMode',{ None:0, RandomStart: 1, CompleteRandom: 2, MouseDistance: 3, InvertMouseDistance:4}).onChange(function(value){reset();});

    fcolor = f1.addFolder('Colors');
    fcolor.add(vars,'colorModus', { OneColor: 1, Direction: 2, Dotted: 3, DottedRandom: 4 }).onChange(function(value){colorModus=vars.colorModus;});
    fcolor.addColor(vars,'LineColor').onFinishChange(function(value) {reset();});
    fcolor.addColor(vars,'LineColor2').onFinishChange(function(value) {reset();});

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
    fmouse.add(vars,'Draw').listen().onChange(function(value) {if(vars.Draw){ vars.WriteWord=false; vars.Date=false;}});
    fmouse.add(vars,'ClearDraw');
    fmouse.add(vars,'ShowLines');

    fwords=gui.addFolder('Words');
    fwords.add(vars,"WriteWord").listen().onChange(function(value) {if(vars.WriteWord){vars.Draw=false;vars.Date=false} genWord(word);});
    fwords.add(vars,"TextSize");
    fwords.add(vars,"WriteSpeed");
    fwords.add(vars,"TextDelay");
    fwords.add(vars,"RepeatWords").onFinishChange(function(value) {genWord(vars.word); });
    fwords.add(vars,'word').onFinishChange(function(value) {WordOrder=[];genWord(vars.word); });
    //fwords.add(vars,'Date').listen().onChange(function(value) {if(vars.Date){vars.Draw=false;vars.WriteWord=false}vars.word=genDate();print(vars.word);reset();});
   // fwords.add(vars,'DateMode',{ DMY:0, HM:1, HMDMY:2});

    gui.add(vars,'transparent');
    gui.add(vars, 'dotted');
    gui.add(vars,'move');
    gui.add(vars, 'Screenshot');
    gui.add(vars,'clearScreen');
    gui.add(vars, 'reset');
    if(edit){
        gui.remember(vars);
    }
}

function updateVars(){  //Updtes the Global vars with them from the Sketch
    units=vars.units;
    stärke=vars.thickness;
    velocity=vars.velocity;
    minl=vars.minl;
    maxl=vars.maxl;
    dotted=vars.dotted;
    transparent=vars.transparent;
    bgcolor=vars.bgcolor;
    colorLine=vars.LineColor;
    colorLinetwo=vars.LineColor2;
    colorModus=vars.colorModus;
    StartX=vars.StartX;
    StartY=vars.StartY;
    Center=vars.Center;
    move=vars.move;
    randomMode=vars.velocityMode;
    MouseMode=vars.MouseMode;
    fadealpha=vars.FadingDuration;
    WriteWord=vars.WriteWord;
    WriteSpeed=vars.WriteSpeed;
    TextDelay=vars.TextDelay;
    RepeatWords=vars.RepeatWords;
    word=vars.word;
    TextSize=vars.TextSize;
    Draw=vars.Draw;
    ShowLines=vars.ShowLines;
    ShowDate=vars.Date;
    DateMode=vars.DateMode;
}

function newPreset(){                                  //updates vars when a new Preset is selected
    var prename=vars.preset;

    vars.units=presetData[prename].units;
    vars.thickness=presetData[prename].thickness;
    vars.velocity=presetData[prename].velocity;
    vars.minl=presetData[prename].minl;
    vars.maxl=presetData[prename].maxl;
    vars.dotted=presetData[prename].dotted;
    vars.transparent=presetData[prename].transparent;
    vars.bgcolor=presetData[prename].bgcolor;
    vars.LineColor=presetData[prename].LineColor;
    vars.LineColor2=presetData[prename].LineColor2;
    vars.colorModus=presetData[prename].colorModus;
    vars.StartX=presetData[prename].StartX;
    vars.StartY=presetData[prename].StartY;
    vars.Center=presetData[prename].Center;
    vars.move=presetData[prename].move;
    vars.velocityMode=presetData[prename].velocityMode;
    vars.MouseMode=presetData[prename].MouseMode;
    vars.FadingDuration=presetData[prename].FadingDuration;
    vars.WriteWord=presetData[prename].WriteWord;
    vars.WriteSpeed=presetData[prename].WriteSpeed;
    vars.TextDelay=presetData[prename].TextDelay;
    vars.RepeatWords=presetData[prename].RepeatWords;
    vars.word=presetData[prename].word;
    vars.TextSize=presetData[prename].TextSize;
    vars.Draw=presetData[prename].Draw;
    vars.ShowLines=presetData[prename].ShowLines;
    vars.Date=presetData[prename].ShowDate;
    vars.DateModepresetData[prename].DateMode;
    updateVars();

    gui.destroy();  //Destroys old gui
    createGUI(); //Creates new Gui for new Preset.
    reset();
}

var update = function() {     //Update function for .listen() elements
    requestAnimationFrame(update);
};