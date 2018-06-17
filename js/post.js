$(document).ready(function(){
    var contextroot = "http://edupay-api.azurewebsites.net/api/school/school/join"
    $("#form").submit(function(e){
        e.preventDefault();
        var form = $(this);
        var action = form.attr("action");
        var data = form.serializeArray();

    

        $.ajax({
                    url: contextroot,
                    type: 'POST',
                    crossDomain: true,
                    dataType: 'jsonp',
                    crossOrigin: true,
            async: true,
            xhrFields: {
               withCredentials: true
            },
            crossDomain: true,
                    headers: { 
                    "content-encoding": " gzip ",
                    "content-type": "application/json; charset=utf-8",
                    "server": " Kestrel",
                    "vary": "Accept-Encoding",
                    "x-powered-by":" ASP.NET",                                                   
     },
                    contentType: 'application/json',
                    data: JSON.stringify(getFormData(data)),
                    success: function(data){
                        console.log("DATA POSTED SUCCESSFULLY");
                        window.location.href = "home.html";
                    },
                    error: function( jqXhr, textStatus, errorThrown ){
                        console.log( errorThrown );
                    }
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

