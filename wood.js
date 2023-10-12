function woodCalculation (chairQuantity , tableQuantity, bedQuantity){
     perChair = 3;
     perTable = 10;
     perBed = 50;
      total= (chairQuantity *perChair)+(tableQuantity*perTable)+(bedQuantity*perBed)
      return total;


}

const totalWood = woodCalculation( 1,0,2)
console.log(totalWood);