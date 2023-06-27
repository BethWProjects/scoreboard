
count = 0;
count2 = 0;
let num1 = document.getElementById('num1-el');
let num2 = document.getElementById('num2-el');


//Home Team Scores
function homeAddOne() {
   count += 1;
   num1.innerText = count;
}

function homeAddTwo() {
    count += 2;
    num1.innerText = count;
 }

 function homeAddThree() {
    count += 3;
    num1.innerText = count;
 }

 //Away Team Scores
 function guestAddOne() {
    count2 += 1;
    num2.innerText = count2;
 }

 function guestAddTwo() {2
    count2 += 2;
    num2.innerText = count2;
 }

 function guestAddThree() {
    count2 += 3;
    num2.innerText = count2;
 }



