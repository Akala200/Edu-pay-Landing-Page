$(document).ready(function(){
    
    $("#form").submit(function(e){
        e.preventDefault();
        var form = $(this);
        var action = form.attr("action");
        var data = form.serializeArray();

        var request = new XMLHttpRequest();
        var json_upload =  JSON.stringify(getFormData(data));
        request.open('POST', 'http://edupay-api.azurewebsites.net/api/school/create-school', true);
        request.setRequestHeader("Content-type", "application/json");
        request.withCredentials = false;
        request.send(json_upload);
        request.onreadystatechange = function() {if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            renderPosts(response);   
            } alert("School Successfully created. An agent will contact you soon");
    };
        
       
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









