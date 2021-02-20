class Contestant {
    constructor(){
      this.index = null;
      this.answer = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      console.log("contestantCountRef :"+contestantCountRef);
      contestantCountRef.on("value",(data)=>{
        console.log("contestantCountRef1 :"+data.val());
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      })
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      })
    }
  
    static getcontestantInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allcontestants = data.val();
      })
    }
  }
  