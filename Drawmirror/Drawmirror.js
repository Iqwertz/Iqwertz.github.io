var bgc='#000000';
var circstc='#FFF';
var circweight=1;
var nsplit=25;
var diameter=900;
var Outline=true;
var dmode = 0;

var stack = [];
var oldColor;
var fillColor = '#00ffd8';
var isFilling=false;
var changedPixelsX = [];
var changedPixelsY = [];
var NCircleFill=0;

var drawcol="#ffffff";
var thickness=1.5;

var canvas;

var vars = {   
    // Variable for dat.gui (Controls) 
    backgroundcol:bgc,
    circlestroke:circstc,
    circweight:circweight,
    nsplit:nsplit,
    diameter:diameter,
    drawcol:drawcol,
    Outline:Outline,
    PenColor:drawcol,
    thickness:thickness,
    clear: function(){reset();},
    BucketColor: fillColor,
    DrawMode: dmode
}

function setup(){
    canvas=createCanvas(windowWidth, windowHeight);
    vars.diameter=height-30;
    noFill();
    createGUI();
    updateVars();
    fillColor = color(fillColor);
}

function windowResized() {             //Resize Canvas when Window Resizes
    canvas=resizeCanvas(windowWidth, windowHeight);
    reset();
}

function draw(){
    background(color(0,0,0,0));
    if(!isFilling){
        updateVars();
        if(Outline){
            stroke(circstc);
            strokeWeight(circweight);
            for (var i=0; i<=nsplit; i++){
                arc(width/2,height/2,diameter,diameter,radians((i-1)*(360/nsplit)),radians(i*(360/nsplit)),PIE);
            }
        }else{
            stroke(circstc);
            strokeWeight(circweight);
            ellipse(width/2,height/2,diameter,diameter);
        }
        if(dmode==1){
            if (stack.length){

                isFilling=true;
                changedPixelsX = [];
                changedPixelsY = [];
                var PixelCount=0;
                while(stack.length){
                    var p = stack.pop();
                    var x1 = p.x,
                        y = p.y;
                    while (x1 > 0 && matches(oldColor, x1 - 1, y)) x1--;

                    var spanAbove = false,
                        spanBelow = false;

                    var x2 = x1 + 1;
                    var ip = 4 * (y * width + x2);
                    while (x2 < width && matches(oldColor, x2, y)) {
                        for (var i = 0; i < 4; i++){
                            pixels[ip++] = fillColor.levels[i];
                            var tempip=ip;
                        }
                        changedPixelsX[PixelCount]=x2;
                        changedPixelsY[PixelCount]=y;
                        PixelCount++;
                        if (y > 0 && spanAbove !== matches(oldColor, x2, y - 1)) {
                            if (!spanAbove) stack.push({
                                x: x2,
                                y: y - 1
                            });
                            spanAbove = !spanAbove;
                        }
                        if (y < height - 1 && spanBelow !== matches(oldColor, x2, y + 1)) {
                            if (!spanBelow) stack.push({
                                x: x2,
                                y: y + 1
                            });
                            spanBelow = !spanBelow;
                        }
                        x2++;
                    }
                }
                updatePixels();
            }
        }
    }
    fillCyrcle();
    document.bgColor = bgc;
}

function fillCyrcle(){
    if(isFilling){
        for(var count=0; count<=changedPixelsX.length; count++){
            var cx = changedPixelsX[count];
            var cy = changedPixelsY[count];
            var d=dist(cx,cy,width/2,height/2);
            var walpha= atan2(cy - height/2, cx - width/2) - atan2(0 - height/2, width/2 - width/2);
            var polarx = width/2+cos((walpha+radians((360/nsplit)*NCircleFill))-PI/2)*d;
            var polary = height/2+sin((walpha+radians((360/nsplit)*NCircleFill))-PI/2)*d;
            strokeWeight(3);
            stroke(fillColor);
            point(polarx,polary);
        }
        NCircleFill++;
        if(NCircleFill>=nsplit){
            NCircleFill=0;
            isFilling=false;
        }
    }
}
function matches(c, x, y) {
    var i = 4 * (y * width + x);
    return (
        pixels[i + 0] === c[0] &&
        pixels[i + 1] === c[1] &&
        pixels[i + 2] === c[2] &&
        pixels[i + 3] === c[3]
    );
}

function mouseClicked(){
    if (dmode==0){
        stroke(drawcol);
        strokeWeight(thickness);
        var d=dist(mouseX,mouseY,width/2,height/2);
        var walpha= atan2(mouseY - height/2, mouseX - width/2) - atan2(0 - height/2, width/2 - width/2);
        if(d<=diameter/2){
            for(var i=0;i<=nsplit;i++){
                point(width/2+cos((walpha+radians((360/nsplit)*i))-PI/2)*d,height/2+sin((walpha+radians((360/nsplit)*i))-PI/2)*d);
            }
        }
    }else{
        var d=dist(mouseX,mouseY,width/2,height/2);
        if(d<=diameter/2){
            oldColor = get(mouseX, mouseY);
            loadPixels();
            stack = [];
            stack.push({
                x: mouseX,
                y: mouseY
            });

        }
    }
}

function mouseDragged(){
    if(dmode==0){
        stroke(drawcol);
        strokeWeight(thickness);
        var d=dist(mouseX,mouseY,width/2,height/2);
        var walpha= atan2(mouseY - height/2, mouseX - width/2) - atan2(0 - height/2, width/2 - width/2);
        var dp=dist(pmouseX,pmouseY,width/2,height/2);
        var walphap= atan2(pmouseY - height/2, pmouseX - width/2) - atan2(0 - height/2, width/2 - width/2);
        if(d<=diameter/2){
            for(var i=0;i<=nsplit;i++){
                line(width/2+cos((walphap+radians((360/nsplit)*i))-PI/2)*dp,height/2+sin((walphap+radians((360/nsplit)*i))-PI/2)*dp,width/2+cos((walpha+radians((360/nsplit)*i))-PI/2)*d,height/2+sin((walpha+radians((360/nsplit)*i))-PI/2)*d);
            }
        }
    }
}

function reset(){
    if(confirm("Clear the Screen?")){
        background(bgc);
    }
}

function createGUI() { 
    gui = new dat.GUI;  //defines gui 

    gui.add(vars, 'nsplit').min(1).step(1).onChange(function(value) {reset();}); 
    gui.add(vars, 'diameter').onChange(function(value) {reset();}); 

    var f1 = gui.addFolder('Background');
    f1.add(vars, 'Outline').onChange(function(value) { stroke(bgc);
            strokeWeight(circweight);
            for (var i=0; i<=nsplit; i++){
                arc(width/2,height/2,diameter,diameter,radians((i-1)*(360/nsplit)),radians(i*(360/nsplit)),PIE);
            }});
    f1.addColor(vars, 'circlestroke');
    f1.add(vars, 'circweight').min(0);
    f1.addColor(vars, 'backgroundcol');

    gui.add(vars, 'DrawMode', {Pen:0,Bucket:1});
    var pen=gui.addFolder('Pen');
    pen.addColor(vars, 'PenColor');
    pen.add(vars,'thickness').min(1.5).step(0.5);
    gui.addColor(vars, 'BucketColor');

    gui.add(vars,'clear');
    /*
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
    /*


    if(edit){
        gui.remember(vars);
    }
    f2 = gui.addFolder('Background');
    f2.add(vars, 'FadingDuration');
    f2.addColor(vars, 'bgcolor').onChange(function(value) {background(vars.bgcolor);});

    gui.add(vars,'transparent');
    gui.add(vars,'move');
    gui.add(vars, 'Screenshot');
    gui.add(vars,'clearScreen');
    gui.add(vars, 'reset');*/

}

function updateVars(){  //Updtes the Global vars with them from the Sketch
    bgc=vars.backgroundcol;
    nsplit=vars.nsplit;
    circstc=vars.circlestroke;
    circweight=vars.circweight;
    Outline=vars.Outline;
    diameter=vars.diameter;
    drawcol=vars.PenColor;
    thickness=vars.thickness;
    dmode=vars.DrawMode;
    fillColor=vars.BucketColor;
    fillColor = color(fillColor);
}


var update = function() {     //Update function
    requestAnimationFrame(update);
};