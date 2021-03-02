//var name = prompt ("Vennligst fyll inn navnet ditt:");
//var welcome = "<p>Hei " + name + " og velkommen til min side. Håper du finner noe du liker.</p>";
//document.write(welcome);

var cv = document.getElementById('cv');
var work = document.getElementById('work');

cv.addEventListener("click", function () {
  work.textContent = "11.05.2020 - D.D, Zimmer & Peacock AS, Ingeniør";
});
