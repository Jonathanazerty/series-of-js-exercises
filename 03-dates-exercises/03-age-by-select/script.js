

function CalculateAge () {
    let userInput = document.getElementById("dob-day","dob-month", "dob-year").value;
    let dob = new Date(userInput);
    if(userInput==null || userInput== '') {
        document.getElementById("message").innerHTML = "**Choose a date please";
        return false;
    }

    else {
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  

    return document.getElementById("run").innerHTML = "You are" + age + " years old !";
    }
}

