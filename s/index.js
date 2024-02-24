var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    processHttp(this);
  }
};
function processHttp(http) {
  var doc = http.responseXML;
  var data = doc.querySelector("datalist").querySelectorAll("url");
  data.forEach((element) => {
    if (
      element.querySelector("shortcode").textContent ==
      window.location.hash.substring(1)
    ) {
      location.href = element.querySelector("rurl").textContent;
    }
  });
}
xhttp.open("GET", "data.xml", true);
xhttp.send();
