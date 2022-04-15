class Restricao{
    constructor(bodyA,pointB){
        var opcoes ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }

        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        this.pointB=pointB;
        
        this.restricao=Constraint.create(opcoes);
        World.add(world,this.restricao);

    }
    prender(body){
    this.restricao.bodyA=body;
    }
    fly(){
        this.restricao.bodyA=null;
    } 
    display(){

        image (this.sling1,200,20);
        image (this.sling2,170,20);
        

        if (this.restricao.bodyA){

        var pointA=this.restricao.bodyA.position;
        var pointB=this.pointB; 

        push(); 
        
        stroke("#432A1B");

        if(pointA.x<220){ 
        strokeWeight(7); 
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y); 
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
        image (this.sling3,pointA.x-30,pointA.y-10,15,30);
    }
    else{
        strokeWeight(3);
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y); 
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
        image (this.sling3,pointA.x+25,pointA.y-10,15,30);

    }

        pop();                 
    }
}
}