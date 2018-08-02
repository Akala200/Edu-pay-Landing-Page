$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        

        jQuery.ajax({
            url: 'http://edupay-api.azurewebsites.net/api/school/school/join',
            async   : true,
            dataType: 'json',
            type    : 'POST',
            data    : jQuery("form").serialize(),
            crossDomain: true,
            contentType: 'application/json',
        }).done(function() {
            // Handle Success
            console.log('successful')
        }).fail(function(xhr, status, error) {
           // Handle Failure
           console.log('falsed')
        });
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

 