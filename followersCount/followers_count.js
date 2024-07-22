let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Increment the count by 1
  displayCount();
  checkCountValue();
  
}


function checkCountValue() {
    const messages = {
        10: "Your Instagram post gained 10 followers! Congratulations!",
        20: "Your Instagram post gained 20 followers! Keep it up!"
      };
  
      if (messages[count]) {
        alert(messages[count]);
      }
}


function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function resetCount(){
    count = 0;
    alert("Followers count has been reset");
    displayCount();
}   
