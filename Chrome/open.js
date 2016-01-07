function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

var baseUrl = "https://learn.uwaterloo.ca";
var file = document.getElementsByClassName("d2l-fileviewer-pdf-pdfjs")[0].getAttribute("data-location");
if (file) openInNewTab(baseUrl + file);