int rep=3;
void setup(){
  size(500,500);
}

void draw(){
  for(int i=0;i<=rep;i++){
  line(width/2,height/2, i*rep*36,i*rep*36);
  }
}

void mouseDragged(){
  
}
