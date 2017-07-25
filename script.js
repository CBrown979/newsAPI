/*global $*/
/*global $document*/
/*global $ajax*/
//workaround for when you put your script tag in the html head
//document is the DOM
$(document).ready(function(){
    var url="https://newsapi.org/v1/sources";
    //language and country are the parameters for the request, found in the documentation
    var data={language:"en", country:"us"};
    //var id=blank; -- must create variable outside of ajax so you have access to it globally
    $.ajax({
        url:url,
        data:data,
        type:"GET",
        success:function(response){
            // console.log(response);
            // console.log(response.sources[2]);
            var sources=response.sources;
            // console.log(sources[2]);
            var html="<select class='form-control' id='source'>";
            $.each(sources, function(index,source){
                // console.log(source);
                html += "<option value='id?'>"+source.name+"</option>";
            })
            html+= "</select>";
            console.log(html);
            $(".form-group").html(html);
        }
    })
    //submit button
    //$('select').val()
});

