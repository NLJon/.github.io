function SwapImage() {

    var me_id = document.getElementById("me-pic");

    if (me_id.src.match("images/me-pic.jpg")) {
        me_id.src = "images/me-laff.gif";
        
        // 3. Wait, then swap back
        setTimeout(() => {
            me_id.src = "images/me-pic.jpg";
        }, 2500);
    } 
}

function SwapImageHover(img) {

    if (img.src.match("images/Tf2-fight.png")) {
        img.src = "images/Team_Fortress_2_logo.png";
    } 
    else if (img.src.match("images/Team_Fortress_2_logo.png")) {
        img.src = "images/Tf2-fight.png";
    } 
    else if (img.src.match("images/jetski1.jpg")) {
        img.src = "images/jetski2.jpg";
    } 
    else if (img.src.match("images/jetski2.jpg")) {
        img.src = "images/jetski1.jpg";
    } 
    else if (img.src.match("images/dog1.jpg")) {
        img.src = "images/trail1.jpg";
    } 
    else if (img.src.match("images/trail1.jpg")) {
        img.src = "images/dog1.jpg";
    }     
}

function ClickLike() {
  let text;
  let person = prompt("What is your name?", "");
  if (person == null || person == "") {
    person = "anonymous";
  } 
  text = "Thank you " + person + " for the like!";
  document.getElementById("text-block").innerHTML = text;
  increaseCount();
}


// Declare the counter
let count = 123;

// Function to display the counter
function updateCount() {
  document.getElementById("like-count").innerHTML = count + " Likes!";
}

// Function to increase the counter
function increaseCount() {
  count++;
  updateCount();
}