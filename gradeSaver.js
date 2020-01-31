//Calculate Final Grade
function calculateGrade() {
    var currentGrade = document.getElementById("currentGrade").value;
    var desiredGrade = document.getElementById("desiredGrade").value;
    var weightOfFinal = document.getElementById("weightOfFinal").value;
  
    //check if number fall in range of 0 to 100
    if (currentGrade < 0 || currentGrade > 100 || desiredGrade < 0 ||
      desiredGrade > 100 || weightOfFinal < 0 || weightOfFinal > 100) {
      alert("All values must be within the range of 0 to 100.");
      return;
    }
  
    //Calculate required final grade
    var requiredFinal = (desiredGrade - (currentGrade)*(100 - weightOfFinal)
    *(.01))/(weightOfFinal*.01);

    //round to two decimal places
    requiredFinal = requiredFinal.toFixed(2);

    //Display the final grade
    document.getElementById("grade").style.display = "block";
    document.getElementById("requiredGrade").innerHTML = requiredFinal;
  
  }
  
  //Hide the tip amount on load
  //document.getElementById("totalTip").style.display = "none";
  //document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateGrade();
  
  };