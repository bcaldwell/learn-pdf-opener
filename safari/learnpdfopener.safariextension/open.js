function openInNewTab(url) {
    safari.self.tab.dispatchMessage('openUrlInNewTab', url);
}

function openPdf (){
  if (document.URL.indexOf(baseUrl) >= 0) {
    var file = document.getElementsByClassName("d2l-fileviewer-pdf-pdfjs")[0].getAttribute("data-location");
    if (file) openInNewTab(baseUrl + file);
  }
}

var baseUrl = "https://learn.uwaterloo.ca";

safari.self.addEventListener("message", function(e){
  if (e.name == "open-pdf"){
    openPdf();
  }
}, false);

window.addEventListener('keydown', handleKeydown, false);

// Function to send message to Global.html when required shortcut detected
function handleKeydown(e) {
    // If 'T' pressed, checks if Cmd and Shift were held down
    if (e.keyCode == 77 && e.metaKey && e.shiftKey) {
        e.preventDefault();
        openPdf();
    }
}
