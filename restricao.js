class Restricao{
    constructor(bodyA,pointB){
        var opcoes ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB;
        
        this.restricao=Constraint.create(opcoes);
        World.add(world,this.restricao);

    }
    fly(){
        this.restricao.bodyA=null;
    } 
    display(){
        if (this.restricao.bodyA){

        var pointA=this.restricao.bodyA.position;
        var pointB=this.pointB; 

        
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);  
    }
}
}