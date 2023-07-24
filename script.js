var input = parseFloat(document.getElementById("inpt").value);


var result = document.getElementById("result");
var audio = new Audio("./public/clock-alarm-8761.mp3");
var ringBell = document.getElementById("ringBell");
var ringBellMsg = document.getElementById("ringBellMsg");

function setAlarm(e) {
  var input = parseFloat(document.getElementById("inpt").value);
  //VALIDATING INPUT FIELD
  let inputRegEx = /[0-9]/;
  let isValid = inputRegEx.test(input);
  console.log(isValid);

  //IF VALID THEN RING THE BELL
  if (isValid) {
    let timeForRing = input * 1000 * 60;
    //FOR MESSAGE ALERT
  
   

    var msg = `Your alarm has set for ${input} minutes`;
    localStorage.setItem("set", msg);
    result.innerHTML = localStorage.getItem("set");

    setTimeout(() => {
      ringBell.style.display = "block";
      ringBellMsg.style.display = "block";

      var interval = setInterval(() => {
        audio.play();
      }, 1000);
      ringBell.addEventListener("click", () => {
        audio.pause();
        clearInterval(interval);
        ringBell.style.display = "none";
        ringBellMsg.style.display = "none";
        localStorage.removeItem("set");
        result.innerHTML = "";
        document.getElementById("inpt").value = "";
       
      });
    }, timeForRing);
  } else {
    document.getElementById("notValid").innerHTML =
      "Please enter a numeric value";
    document.getElementById("inpt").style.border = "1px solid red";
  }
}
