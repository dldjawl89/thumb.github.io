$(document).ready(() => {

  w3.includeHTML();


    document.getElementById("header").innerHTML='<object type="text/html" data="header.html"></object>';

    document.getElementById("footer").innerHTML='<object type="text/html" data="footer.html"></object>';


    // $("#header").load("header.html");
    // $("#footer").load("footer.html");
  });