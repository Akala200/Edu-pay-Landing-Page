$(document).ready(function(){
    var url = "http://edupay-api.azurewebsites.net/api/school/school/join"
    
    $("#form").submit(function(e){
        e.preventDefault();
        var form = $(this);
        var action = form.attr("action");
        var data = form.serializeArray();

        var request = new XMLHttpRequest();
        var json_upload =  JSON.stringify(getFormData(data));
        request.open('POST', url, true);
        request.onreadystatechange = function() {if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            renderPosts(response);   
            } alert("School Successfully created. An agent will contact you soon");
    };
        
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.setRequestHeader("Content-length", json_upload.length);
        request.setRequestHeader("Connection", "close");
        request.send(json_upload);
});
});


function getFormData(data) {
    var unindexed_array = data;
    var indexed_array = {};
 
    $.map(unindexed_array, function(n, i) {
     indexed_array[n['name']] = n['value'];
    });
 
    return indexed_array;
 }











// Create the XHR object.
function createCORSRequest(method, url) {

    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }
  
  // Helper method to parse the title tag from the response.
  function getTitle(text) {
    return text.match('<title>(.*)?</title>')[1];
  }
  
  // Make the actual CORS request.
  function makeCorsRequest() {
    // This is a sample server that supports CORS.
    var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';
  
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }
  
    // Response handlers.
    xhr.onload = function() {
      var text = xhr.responseText;
      var title = getTitle(text);
      alert('Response from CORS request to ' + url + ': ' + title);
    };
  
    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };
  
    xhr.send();
  }




