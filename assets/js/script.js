//Onclick event to activate the ajax request and 'then' run the function to display the articles
$("#searchBtn").on("click", function(){

    var search = $("#search").val().trim();
    var limit = $("#limit").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    
    var APIKey = "zv3jd06V7WOa0zWVKy2fSAeLP9hSZEO8";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&api-key="+APIKey+"&limit="+limit;
    
    $.ajax ({
    url: queryURL,
    METHOD: "GET"
    }).then(function(response){
        console.log(response.response.docs);
    
    var results = response.response.docs;

    printResults(results);
    }) 

})

//Onclick event to clear the Top Articles div
$("#clearBtn").on("click", function(event){
    event.preventDefault();
    $("#topArticlesDiv").empty();
})

function printResults(results) {
    for(var i=0; i<results.length; i++) {
        var newArticle = $("<div>");
        var headline = $("<h2>");
        var image = $("<img>");
        var articleContent = $("<p>");
        var snippet = $("<p>");

        newArticle.attr("class", "row");
        headline.text(results[i].headline.main);
        headline.attr("class", "col-12 text-center");
        image.attr("src", "https://www.nytimes.com/" + results[i].multimedia[0].url);
        image.attr("class", "col-12 text-center");

        articleContent.text(results[i].lead_paragraph);
        snippet.text(results[i].abstract);

        newArticle.append(headline);
        newArticle.append(image);
        newArticle.append(articleContent);
        newArticle.append(snippet);

        $("#topArticlesDiv").append(newArticle);
    }
    
}