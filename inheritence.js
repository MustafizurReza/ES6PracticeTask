class Parent {
    constructor(){
        this.fatherName = "Ami Kita Jani";
    }
}
class Child extends Parent {
    constructor(Name,nickName){
        super();
        this.firstName = Name;
        this.lastName = nickName;
        
    }
}
    baby1 = new Child("Christopher","Nolan");
    console.log(baby1); 