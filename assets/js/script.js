var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&api-key="+APIKey+"&limit="+limit;
var APIKEY = "zv3jd06V7WOa0zWVKy2fSAeLP9hSZEO8";


$("#search").on("click", function(event){
    event.preventDefault();

    var search = "";
    var limit = "";
    var startYear = "";
    var endYear = "";

    var results = response.docs;

    $.ajax ({
    url: queryURL,
    METHOD: "GET"
    }).then(function(response){
    console.log(response);

    /*more code to display articles

    for(i=0; i<response.data.length; i++) {
        var article = $("<div>");
        var title = $("<h2>");
        
        article.attr("class", "example class");
        article.text(results.abstract);

        title.text(results.)

        

        article.text
    }*/

    }) 

})
