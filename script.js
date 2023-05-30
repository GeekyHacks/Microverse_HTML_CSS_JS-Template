const btnColor = document.querySelector("test");
const backgrod = document.getElementById("backgrod");

btnColor.addEventListener("click", chBackcolor());

function chBackcolor() {
  backgrod.style.backgroundColor = "red";
}

btnColor.addEventListener("click", chcolor());
function chcolor() {
  backgrod.style.backgroundColor = "";
}
