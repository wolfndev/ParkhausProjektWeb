function check_darkmode(){
  var shortget = document.getElementsByTagName("body")[0];
  var aaa = shortget.style.backgroundColor;
  Darkmode(aaa)
  shortget.classList.toggle("darkmode");
  Darkmode(aaa)
}
