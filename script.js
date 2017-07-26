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
            var html="<select class='form-control' id='sourceOption'>";
            $.each(sources, function(index,source){
                // console.log(source);
                html += "<option value='" + source.id + "'>"+source.name+"</option>";
            })
            html+= "</select>";
            // console.log(html);
            $(".form-group").html(html);
        }
    })
})
    //submit button
   $("#source").submit(function() { 
      console.log('im here');//event is the process of submitting the button - the action or direct response of executing function of submitting the form
       event.preventDefault(); //don't do your normal function, do what I want you to do -- hitting submit automatically refreshes the page
       var id = $('#sourceOption').val() // gives source id of the value we want
       var url = "https://newsapi.org/v1/articles";
       var data = {apiKey:"c72a325fc4164584bd3079abe50692b1", source: id}
       $.ajax({
           url: url, 
           data: data, 
           type: "GET",
           success: function(response) {
            //   console.log(response);
              var articles = response.articles
              var html = "<ul class='list-group'>"
              $.each(articles, function(index, article) {
                  html += "<li class='list-item'>" + article.title + "</li>"
              })
              html += "</ul>";
              $("#articles").html(html);
           }
           
       })
})