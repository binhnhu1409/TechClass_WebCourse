// Automatic Slideshow - change image every 3 seconds - homepage
var myIndex = 0;
change_image();
function change_image() {
  var i;
  var x = document.getElementsByClassName("image_to_change");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout (change_image, 3000);
}

//show current date and time at the bottom of homepage
var show_time = new Date();
document.getElementById("show_date_time").innerHTML = show_time;

//skill-page
document.getElementById("add-new").onclick = function() {
 var counting_skill = document.getElementById("skill-list");
 var new_skill 
}
