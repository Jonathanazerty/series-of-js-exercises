
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