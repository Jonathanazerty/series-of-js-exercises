
(function() {

    var btn = document.getElementById('run');
      
    btn.addEventListener('click', function(e){
    
        var dayElement = document.getElementById('dob-day'); 
        var monthElement = document.getElementById('dob-month'); 
        var yearElement = document.getElementById('dob-year'); 
  
  let birthday = new Date(yearElement.value, monthElement.value, dayElement.value);         
    console.log(birthday);
  
  let ageDifMs = Date.now() - birthday.getTime();
    console.log(ageDifMs);
  let ageDate = new Date(ageDifMs);
    console.log(ageDate);
  let age = Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log(age);
  
     })
  
  })();

/* 

    let userInput = document.getElementById("dob-day","dob-month", "dob-year").value;
    let dob = new Date(userInput);
    if(userInput==null || userInput== '') {
        document.getElementById("message").innerHTML = "**Choose a date please";
        return false;
    }

    else {
    //calculate month difference from current date in time  
    let month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    let age_dt = new Date(month_diff);   
      
    //extract year from date      
    let year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    let age = Math.abs(year - 1970);  

    console.log(age);

    return document.getElementById("run").innerHTML = "You are" + age + " years old !";
    }
*/
