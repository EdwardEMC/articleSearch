var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&api-key="+APIKey+"&limit="+limit;
var APIKEY = "zv3jd06V7WOa0zWVKy2fSAeLP9hSZEO8";

//Onclick event to activate the ajax request and 'then' run the function to display the articles
$("#searchBtn").on("click", function(event){
    event.preventDefault();

    var search = $("#search").val().trim();
    var limit = $("#limit").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();

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

        title.text(results.headline.main)

        
        $("#topArticlesDiv").append(title);
        $("#topArticlesDiv").append(article);
    }
    
    */
    }) 

})

//Onclick event to clear the Top Articles div
$("#clearBtn").on("click", function(event){
    event.preventDefault();
    $("#topArticlesDiv").empty();
})
