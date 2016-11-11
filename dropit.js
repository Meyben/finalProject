function dropThat() {
    document.getElementById("droppern").classList.toggle("show");
};
window.onclick = function(trykk) {
  if (!trykk.target.matches(".button")) {

    var dropdowns = document.getElementsByClassName("meny");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
  


