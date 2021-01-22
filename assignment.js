




function KilometerToMeter(kilometer)
{         
    if(kilometer<0)    //when input negative number it will return error
    {
        return "Distance can't be nagative."
    }
    var distance=kilometer*1000;   // 1 kilometer=1000 meter
    return distance;
}

var result=KilometerToMeter(35);
console.log(result);




function budgetCalculator(watch,mobile,laptop){
             
    var priceOfWatch=50;
    var priceOfMobile=100;
    var priceOfLaptop=500;

    if(watch<0 || mobile<0 || laptop<0)   
    {
        var budget="Amount can't be negative number."; //when input negative number it will return error
        return budget;
    }

    budget=(priceOfWatch*watch)+(priceOfMobile*mobile)+(priceOfLaptop*laptop); // It will return total cost
    return budget;

}
var result=budgetCalculator(3,6,5);
console.log(result);




function hotelCost(day)

{
   if(day<0)
  {
       return totalCost="Days can't be negative number." //When days would be negative number it will return error.
  }

  else
  {
    if(day<=10)    // When number of days<=10 it will multiplied days*cost
    {
       var totalCost=day*100;
    }

    else if(day>10 && day<=20)
    {
        var costOfAfter10Days=(day-10)*80;
        totalCost=(10*100)+costOfAfter10Days; //when number of days>10 and <=20 it will sum total cost of first 10 days and after 10 days.
    }

    else
    {
       var costOfAfter20Days=(day-20)*50;
        totalCost=(10*80)+(10*100)+costOfAfter20Days;  //when number of days>20 it will sum total cost of first 10 days and second 10 days and after 20 days.
    }

    return totalCost; 
  }
    

}
var result=hotelCost(-24);
console.log(result);





function megaFriend() {

    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {  
        if (typeof arr[i] !== 'string') {   //whe input integer or float number it will return error
            max = "Is not string";

        }
        else {
            if (arr[i].length > max.length) {   //check large name from string
                max = arr[i];

            }

        }

    }
    return max;
}
var arr = ["Hridoy", "Nayem", "Srizon"];
var result = megaFriend(arr);
console.log(result);
